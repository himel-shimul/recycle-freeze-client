import React, { useState } from "react";
import BookingModal from "./BookingModal/BookingModal";

const ProductCard = ({ product }) => {
  const [pd, setPd] = useState(null);
  const {
    image,
    category,
    location,
    original_price,
    resale_price,
    pd_name,
    published_date,
    seller_name,
    used,
    _id,
  } = product;
  console.log(product);
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <figure>
        <img src={image} className="image-fluid" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{pd_name}</h2>
        <p>Posted: {published_date}</p>
        <div className="flex">
          <p>Buying Price: ${original_price}</p>
          <p>Selling Price: ${resale_price}</p>
        </div>
        <p>Year of used: {used} year</p>
        <p>Location: {location}</p>
        <p>seller: {seller_name}</p>
        <div className="card-actions justify-end">
          {/* The button to open modal */}
          <label onClick={() => setPd(product)} htmlFor={_id} className="btn btn-primary">
          Book Now
          </label>
          {pd && <BookingModal _id={_id} pd={pd} setPd={setPd}></BookingModal>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
