import React from "react";

const CategoryCard = ({category}) => {
    const {cat_img} = category;
  return (
    <div className="card w-96 bg-base-100 m-auto">
      <figure className="px-10 pt-10">
        <img
          src={cat_img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
    </div>
  );
};

export default CategoryCard;
