import React from "react";
import { Bars } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Bars
        height="80"
        width="80"
        radius="9"
        color="blue"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};

export default Loader;
