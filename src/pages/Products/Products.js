import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {

    const products = useLoaderData();

  return (
    <div className="m-auto">
      <div className="flex items-end">
      {
        products.map(product => <ProductCard
        key={product._id}
        product={product}
        ></ProductCard>)
      }
      </div>
    </div>
  );
};

export default Products;
