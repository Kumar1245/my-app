import React, { Fragment } from "react";
import Card from "./Card";
import { ProductList } from "./ProductList";

const Props = (props) => {
  console.log(props);
  return (
    <div className="flex flex-col">
      <p className="text-center my-3">{props.category}</p>
      <div className="grid grid-cols-5 gap-24 mx-auto bg-gray-200 p-5">
        {props.data.map((item, index) => {
          return (
            <Fragment key={index + 1}>
              <div className="flex flex-col">
                <Card item={item} />
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Props;
