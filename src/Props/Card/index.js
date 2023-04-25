import React from "react";
import classNames from "classnames";

const Card = (props) => {
  console.log("Cards Props", props);
  return (
    <div
      className={classNames(
        "flex flex-col p-2 hover:scale-105 transition-all duration-500 w-52 shadow hover:shadow-lg rounded-lg border-solid border-1 shadow-indigo-500/40  border-indigo-600  bg-cyan-50 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 box-decoration-slice border-spacing-1 mt-4 ml-5",
        props.item.id === 2 ? "product-blue text-white" : "product-white"
      )}
    >
      <img alt="" src={props.item.product_image} className="p-3" />
      <p className="whitespace-nowrap text-xl font-bold ">
        {props.item.product_name}
      </p>
      <p className="text-black">₹{props.item.product_price}</p>
      <button className=" bg-orange-400 p-2 row-auto rounded-full transition-all duration-500 hover:rounded-lg">
        Add Cart
      </button>
    </div>
  );
};

export default Card;
