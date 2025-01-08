import { useNavigate } from "react-router-dom";
import ShoppingContext from "../context/shopping/ShoppingContext";
import "./Subtotal.css";

import React, { useContext } from "react";

const Subtotal = () => {
  const navigate = useNavigate();
  const shoppingContext = useContext(ShoppingContext);
  const { basket, getBasketTotal } = shoppingContext;

  const handleCheckout = () => {
    navigate("/payment");
  };

  return (
    <div className="subtotal">
      <p>
        Subtotal({basket.length} items:{""})
        <strong>${getBasketTotal(basket)}</strong>
      </p>
      <small className="subtotal_gift">
        <input type="checkbox" />
        This order container a gift
      </small>
      <button onClick={handleCheckout}>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
