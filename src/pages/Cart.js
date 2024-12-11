import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { clearBasket, removeFromBasket } from "../redux/reducers/basketSlice";

const Cart = () => {
  const items = useSelector((state) => state.basket.items);
  const dispatch = useDispatch();

  // handle clearing the cart
  const handleClearBasket = () => dispatch(clearBasket());

  //Handle removing a single item from basket

  const handleRemoveItem = (id) => {
    dispatch(removeFromBasket(id));
  };

  const fullStars = Math.floor(items.rating);
  const hasHalfStar = items.rating % 1 !== 0;

 const totalPrice = items.reduce((total, item) => total + (Number(item.price) || 0), 0)

  return (
    <div className="checkout_products">
      <h2>Shopping Cart</h2>
      <div className="checkout_product">
        {/* {left side of basket} */}
        <>
          {items.length > 0 ? (items.map((item) => (
            <div className="product_item">
              <img
                className="checkout_product_image"
                src={item.image}
                alt="{title}"
              />

              <div className="checkout_product_info">
                <p className="checkout_product">{item.title}</p>
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
                  <strong className="price">{item.price}</strong>
                </p>
                <button className="remove_item_button" onClick={() => handleRemoveItem(item.id)}>Remove From Cart</button>
              </div>
            </div>
          )
        )) : (
          <p> Your Cart is empty</p>
        )}
        </>
      </div>
      {/* {Right side side of basket} */}
      <div className="basket_checkout">
        <h3>Order Summary</h3>
        <p>Total Items: {items.length}</p>
        <p>Total Price: {totalPrice.toFixed(2)}</p>
        <button onClick={handleClearBasket} className="basket_clear_button">Clear</button>
        <button className="basket_checkout_button">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
