import React, { useContext, useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import instance from "../axios";
import ShoppingContext from "../context/shopping/ShoppingContext";
import { Link } from "react-router-dom";
import Cart from "../pages/Cart";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";

import "./Payment.css";

const Payment = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user, getBasketTotal, emptyBasket } = shoppingContext;

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special strip secret which will allow us to charge customer
    const getClientSecret = async () => {
      const response = await instance({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });

      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket, getBasketTotal]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: { card: elements.getElement(CardElement) },
      })
      .then(({ paymentIntent }) => {
        // Payment intent = payment confirmation
        db.collection("user")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        emptyBasket();
        navigate("/orders");
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? "e.error.message" : "");
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout <Link to="/checkout">{basket?.length} items</Link>
        </h1>
      </div>
      <div className="payment_section">
        <div className="payment_title">
          <h3>Delivery Address</h3>
        </div>
        <div className="payment_address">
          <p>{user?.email}</p>
          <p>123 Monument Road</p>
          <p>Glen Marais</p>
          <p>Kempton Park</p>
        </div>
      </div>
      <div className="payment_section">
        <div className="payment_title">
          <h3>Review items and delivery</h3>
        </div>
        <div className="payment_item">
          {basket.map((item) => (
            <Cart
              key={item.item.id}
              id={item.item.id}
              title={item.item.title}
              image={item.item.image}
              price={item.item.price}
              rating={item.item.rating}
            />
          ))}
        </div>
      </div>
      <div className="payment_section">
        <div className="payment_title">
          <div className="payment_details">
            {/* {Stripe} */}

            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_price_container">
                <NumericFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
