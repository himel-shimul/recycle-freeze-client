import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { cat_img, cat_id } = category;
  return (
    <div className="card w-96 bg-base-100 m-auto">
      <Link to={`/products/${cat_id}`}>
        <figure className="px-10 pt-10">
          <img src={cat_img} alt="Shoes" className="rounded-xl" />
        </figure>
      </Link>
    </div>
  );
};

export default CategoryCard;
