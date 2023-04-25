import React from "react";
import classNames from "classnames";

const Card = (Props) => {
  return (
    <>
      <div className="flex flex-col bg-white p-2 shadow items-center hover:scale-105 transition-all duration-500">
        <img alt="" src={Props.item.movie_image} className="p-3 h-40 w-40" />
        <p className="whitespace-nowrap text-xl font-bold ">
          {Props.item.movie_name}
        </p>
        <span className="text-black flex">
          <p className="text-xl text-red-500 ">Rating: </p>
          <p className="text-4xl"> {Props.item.Rating}</p>
        </span>
        <button className=" bg-orange-400 p-2 row-auto rounded-full transition-all duration-500 hover:rounded-lg">
          Watch Now
        </button>
      </div>
    </>
  );
};

export default Card;
