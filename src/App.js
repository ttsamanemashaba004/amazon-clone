import React, { useEffect, useState } from "react";
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

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userInfo = localStorage.getItem("isLoggedIn");

    if (userInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.getItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    // Our actual router
    <Router>
      <Navbar isAuthenticated={isLoggedIn} onLogout={logoutHandler}/>
      <AppContent onLogin={loginHandler}/>
    </Router>
  );
};

const AppContent = ({onLogin}) => {
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
        <Route path="/login" element={<Login onLogin={onLogin} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />

        <Route path="/login" element={<Auth />} />

        {/* Not Found */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
