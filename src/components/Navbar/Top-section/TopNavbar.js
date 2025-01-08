import React, { useContext } from "react";
import "./TopNavbar.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { FaShoppingCart } from "react-icons/fa";

import ShoppingContext from "../../../context/shopping/ShoppingContext";
import { auth } from "../../../firebase";

const TopNavbar = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket = [], user, setUser } = shoppingContext;

  const handleAuthentication = () => {
    if (user) {
      auth.signOut().then(() => {
        setUser(null);
      });
    }
  };

  return (
    <div className="top-nav fade">
      <div className="left">
        <Link to="/home">
          <img
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon-logo"
          />
        </Link>
        <div className="deliver-to">
          <div className="icon">
            <span className="material-symbols-outlined">location_on</span>
          </div>
          <div className="location">
            <span className="top">Deliver to</span>
            <span className="bottom">South Africa</span>
          </div>
        </div>
      </div>
      <div className="header_search">
        <input className="header_input" type="texy" />
        <div className="search">
          <SearchIcon className="search_icon" viewBox="0 0 24 24" />
        </div>
      </div>
      <div className="right">
        <div className="language">
          <span className="lan_option">EN</span>
        </div>

        <Link to={!user && "/login"} className="no_underline">
          <div className="header_option" onClick={handleAuthentication}>
            <span className="header_optionOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header_optionTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionOne">Returns</span>
          <span className="header_optionTwo">& Orders</span>
        </div>

        <Link to="/checkout" className="cart_border">
          <div className="header_optionBasket">
            {/* <ShoppingBasketIcon fontSize="large" /> */}
            <FaShoppingCart size={30} />
            <span className="header_optionTwo header_basketCount">
              {basket.length}
            </span>
            <span className="cart">Cart</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TopNavbar;
