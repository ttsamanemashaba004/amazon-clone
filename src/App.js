import React, { useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./pages/Auth";
import Products from "./components/Products/Products";
import ProductDetails from "./components/Products/Product/ProductDetails";
import Login from "./components/Login/Login";
import ShoppingContext from "./context/shopping/ShoppingContext";
import { auth } from "./firebase";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51QJyiQGmnwFVF56F7X6ApJCABEZAcalOFQUsQk781ZVfmNt0anxz1tvRZJmQDIi91rl5fOYV6ZEEK2FG2aoc5HwL00MEERY7sZ"
);

const PaymentWrapper = () => {
  <Elements stripe={stripePromise}>
    <Payment />
  </Elements>
}

const App = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { setUser } = shoppingContext;

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User is ->", authUser);

      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    // Our actual router

    <Router>
      <Navbar />
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/home" || location.pathname === "/cart") {
      document.body.style.backgroundColor = "#e3e6e6";
    } else {
      document.body.style.backgroundColor = "";
    }
  }, [location]);

  return (
    <>
      {/* Collection of Routes */}
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        {/* Individual Route */}
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />

        <Route path="/payment" element={<PaymentWrapper />} />

        <Route path="/login" element={<Auth />} />

        {/* Not Found */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
