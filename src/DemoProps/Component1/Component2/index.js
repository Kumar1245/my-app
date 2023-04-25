import React from "react";
import Component3 from "./Component3";

const Component2 = (props) => {
  console.log("called from Component2", props.name);
  return (
    <div>
      <Component3 name={props.name} />
    </div>
  );
};

export default Component2;
