import React from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product1" },
  { id: "p3", title: "Product3" },
  { id: "p2", title: "Product2" },
];

export const Products = () => {
  return (
    <>
      <h1> My stuff</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={`/products/${prod.id}`} >{prod.title}</Link>  
          </li>
        ))}
        \{" "}
      </ul>
    </>
  );
};
