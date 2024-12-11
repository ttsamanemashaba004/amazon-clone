import React from "react";
import "./BottomNavbar.css";
import MenuIcon from '@mui/icons-material/Menu';


const BottomNavbar = () => {
  return (
    <div className="bottom-nav">
      <div className="left_header">
        <div className="all_option menu">
          <MenuIcon />
          <span className="options">All</span>
        </div>
        <div className="all_options">
          <span className="options">Today's Deals</span>
        </div>
        <div className="all_options">
          <span className="options">Customer Service</span>
        </div>
        <div className="all_options">
          <span className="options">Registry</span>
        </div>
        <div className="all_options">
          <span className="options">Gift Cards</span>
        </div>
        <div className="all_options">
          <span className="options">Sell</span>
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
