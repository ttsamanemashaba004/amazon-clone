import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./pages/Auth";

const App = () => {
  return (
    // Our actual router
    <Router>
      <Navbar />
      <>
        {/* Collection of Routes */}
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          {/* Individual Route */}
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Auth />} />

          {/* Not Found */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
