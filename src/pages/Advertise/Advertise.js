import React from "react";

const Advertise = ({product}) => {
    const {pd_name, image, resale_price, description} = product;
    // console.log(product);
  return (
    <div className="card w-96 bg-base-100 shadow-xl m-auto">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
        {pd_name}
          <div className="badge badge-secondary">advertise</div>
        </h2>
        <p>{description}</p>
        <p>Price: $ {resale_price}</p>
        <div className="card-actions justify-end">
          {/* <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div> */}
        </div>
      </div>
    </div>
  );
};

export default Advertise;
