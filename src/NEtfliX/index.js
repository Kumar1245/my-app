import React from "react";
import Card from "./Cards";
import { MovieList } from "./MovieList";

const Props = () => {
  return (
    <>
      <div className="grid grid-cols-5 gap-24 mx-auto bg-gray-200 p-5">
        {MovieList.map((item) => {
          return (
            <>
              <div className="">
                <Card item={item} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Props;
