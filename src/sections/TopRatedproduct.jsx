import React from "react";
import Card from "../components/Card";
import SingleProduct from "../components/SingleProduct";

const TopRatedproduct = () => {
  return (
    <>
      <div className="bg-red-500">
        <h1 className="text-7xl text-center ">TOP PRODUCTS</h1>
      </div>

      <Card />
      <SingleProduct/>
    </>
  );
};

export default TopRatedproduct;
