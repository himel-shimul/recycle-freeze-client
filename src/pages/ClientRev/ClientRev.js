import React from "react";
import demo1 from '../../assets/demo1.webp';
import demo2 from '../../assets/demo2.webp';
import demo3 from '../../assets/demo3.jpg';

const ClientRev = () => {
  return (
    <div className="my-16">
      <h2 className="text-4xl text-center">Our Beloved Clients quotes</h2>
      <div className="flex items-center justify-center gap-4">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={demo1}
            alt="Shoes"
            className="mask mask-circle"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title"> Very helpful!!</h2>
          <p>Sandy adams</p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={demo2}
            alt="Shoes"
            className="mask mask-circlel"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title"> I love this product.</h2>
          <p>Anwar</p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={demo3}
            alt="Shoes"
            className="mask mask-circle"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title"> I have purchesed some products. those are awesome!</h2>
          <p>Lana rose</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ClientRev;
