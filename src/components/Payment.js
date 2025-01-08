import React, { useContext } from "react";
import ShoppingContext from "../context/shopping/ShoppingContext";
import { Link } from "react-router-dom";
import Cart from "../pages/Cart";

import './Payment.css'

const Payment = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user } = shoppingContext;

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
            </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
