import React, { useContext } from "react";
import "./Cart.css";

import ShoppingContext from "../context/shopping/ShoppingContext";

const Cart = ({ id, title, image, rating, price, hideButton }) => {
  const shoppingContext = useContext(ShoppingContext);
  const { removeFromBasket, } = shoppingContext;

  const removeFromBasketHandler = () => {
    removeFromBasket({ id: id });
  };

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="checkout_products">
      <div className="checkout_product">
        <div key={id} className="product_item">
          <img className="checkout_product_image" src={image} alt="{title}" />
          <div className="checkout_product_info">
            <p className="checkout_product">{title}</p>
            <div className="checkout_product_rating">
              {Array.from({ length: 5 }).map((_, i) => {
                if (i < fullStars) {
                  return (
                    <p key={i} className="star filled">
                      &#9733;
                    </p>
                  ); // Full star
                } else if (i === fullStars && hasHalfStar) {
                  return (
                    <p key={i} className="star half">
                      &#9733;
                    </p>
                  ); // Half star
                }
                return (
                  <p key={i} className="star empty">
                    &#9733;
                  </p>
                ); // empty star
              })}
            </div>
            <p className="checkout_product_price">
              <small className="dollar">$</small>
              <strong className="price">{price}</strong>
            </p>
            {!hideButton && (
              <button
                className="remove_item_button"
                onClick={removeFromBasketHandler}
              >
                Remove From Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
