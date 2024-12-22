import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/layout/Header";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/Login";
import NotFound from "./components/NotFound";


function App() {
  return (
    <Router>
      <Header />
      <>
        <Routes>
          {/* Redirecting user */}
          <Route path="/" element={<Navigate to="/home" replace />} />
          
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />

          {/* Not found*/}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
