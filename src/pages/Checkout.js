import React, { useContext } from "react";
import "./Checkout.css";
import ShoppingContext from "../context/shopping/ShoppingContext";
import Cart from "./Cart";
import Subtotal from "../components/Subtotal";

const Checkout = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user } = shoppingContext;

  return (
    <div className="checkout">
      <div className="checkout-content">
        <h3>Hello, {user?.email}</h3>
        <h1 className="checkout_title">Shopping Cart</h1>
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
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
