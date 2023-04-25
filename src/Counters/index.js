import React, { useState } from "react";
import HomePage from "../Pages/HomePage";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../ContactUs";

const Counters = () => {
  const [count, setCount] = useState("Home");
  // const handleSubtract = () => {
  //     setCount(count - 2)
  // }
  // const handleAddition = () => {
  //     setCount(count + 2)
  // }
  // console.log("Count", count)
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <span className="flex gap-2">
        <button className="bg-blue-500 p-2" onClick={() => setCount("Home")}>
          Home
        </button>
        <button className="bg-blue-500 p-2" onClick={() => setCount("AboutUs")}>
          AboutUs
        </button>
        <button
          className="bg-blue-500 p-2"
          onClick={() => setCount("ContactUs")}
        >
          ContactUs
        </button>
      </span>
      <div className="">
        {count === "Home" ? (
          <HomePage />
        ) : count === "AboutUs" ? (
          <AboutUs />
        ) : (
          <ContactUs />
        )}
      </div>
      <div>Footer</div>
    </div>
  );
};
export default Counters;
