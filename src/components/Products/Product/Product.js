import React, { useContext } from "react";
import "./Product.css";

import ShoppingContext from "../../../context/shopping/ShoppingContext";

const Product = ({ id, title, image, rating, price }) => {
  
  const shoppingContext = useContext(ShoppingContext);
  const { addToBasket } = shoppingContext;

  const addToBasketHandler = () => {
    addToBasket({ item: { id, title, image, rating, price } });
  };

  

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="product">
      <img src={image} alt="{title}" />
      <div className="product_info">
        <p className="product_description">{title}</p>
        <div className="product_rating">
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
        <p className="product_price">
          <small className="dollar">$</small>
          <strong className="price">{price}</strong>
        </p>
      </div>
      <button className="product_button"  onClick={addToBasketHandler}>
        Add to cart
      </button>
    </div>
  );
};

export default Product;
