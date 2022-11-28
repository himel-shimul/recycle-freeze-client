import axios from "axios";
import React, { useEffect } from "react";

const AdvertiseProduct = () => {
  const [products, setProducts] = [];

  useEffect(() => {
    axios.get("http://localhost:5000/advertise").then((data) => {
      setProducts(data.data);
      console.log(data.data);
    });
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4">
      {products?.map((product) => {
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>;
      })}
    </div>
  );
};

export default AdvertiseProduct;
