import React from "react";
import Component2 from "./Component2";

const Component1 = (props) => {
  console.log(props.name);
  return (
    <div>
      <Component2 name={props.name} />
    </div>
  );
};

export default Component1;
