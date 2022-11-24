import React from "react";
import img1 from '../../../assets/lg_generic_banner_by_lidikhalid_d4jre7h-fullview.jpg';
import img2 from '../../../assets/non-frost.jpg';
import img3 from '../../../assets/W020200413154368706053.jpg';

const Banner = () => {
  return (
    <div className=" my-12">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src={img1} className="w-full" alt=""/>
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={img2} className="w-full" alt=""/>
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={img3} className="w-full" alt=""/>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
};

export default Banner;
