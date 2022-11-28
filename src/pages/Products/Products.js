import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {

    const products = useLoaderData();

  return (
    <div className="my-12">
      <div className="grid grid-cols-2 gap-4">
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
