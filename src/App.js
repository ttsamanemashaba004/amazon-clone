import React, { useEffect } from "react";
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
    if (location.pathname === "/home" || location.pathname === "/cart" ) {
      document.body.style.backgroundColor = "#e3e6e6";
    } else {
      document.body.style.backgroundColor = "";
    }
  }, [location]);

  return(
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

          <Route path="/login" element={<Auth />} />

          {/* Not Found */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </>
  )
}

export default App;
