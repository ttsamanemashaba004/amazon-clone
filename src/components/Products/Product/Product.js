import React from "react";
import "./Product.css";
import ProductCard from "./ProductCard/ProductCard";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="">Product 1</Link>
        </li>
        <li>
          <Link to="">Product 2</Link>
        </li>
        <li>
          <Link to="">Product 3 </Link>
         </li>
      </ul>
      <ProductCard />
    </div>
  );
};

export default Product;
