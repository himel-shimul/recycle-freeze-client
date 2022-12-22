import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("https://recycle-freeze-server-himel-shimul.vercel.app/categories").then((data) => {
      setCategories(data.data);
      console.log(data.data);
    });
  }, []);
  return (
    <>
    <h2 className="text-3xl text-center my-6">All Categories</h2>
    <div className="lg:flex w-full my-3">
      {categories.map((category) => (
        <CategoryCard
        key={category._id}
        category={category}
        ></CategoryCard>
      ))}
    </div>
    </>
  );
};

export default Category;
