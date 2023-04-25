import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logoecomerse from "../Assests/logo ecomerse.png";

function Header() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
    // window.location.href = "/";
    // alert("Login  Successfully");
  };
  return (
    <>
      <div className="h-20 border-b-2 border-white backdrop-blur fixed z-50  w-full flex items-center justify-between px-5">
        <p className="text-4xl font-bold  ">
          {/* <img src={logoecomerse} alt="" className="h-20 w-32 p-0" /> */}
          E-Commerce
        </p>
        <div className=" rounded-lg outline-none  flex items-center ">
          <input
            className="gap-5  font-serif p-3 outline-none w-96 px-4"
            type="text"
            name=""
            placeholder="Search Product "
          />
          <button className="p-3 bg-red-500 px-4">Search</button>
        </div>
        <span className="flex gap-5">
          <button onClick={handleLogin} className="text-xl">
            Login
          </button>
          <Link to="/about-us" className="text-xl">
            About Us
          </Link>
          <Link to="/contact-us" className="text-xl">
            Contact Us
          </Link>
        </span>
      </div>

      <div className="flex w-full items-center px-2 pt-20 bg-blue-800">
        <Link
          to="/Mobile"
          className="text-xl p-2 rounded border-2 border-opacity-0 hover:text-white border-white hover:border-opacity-100"
        >
          Mobile
        </Link>
        <Link
          to="/Laptop"
          className="text-xl p-2 rounded border-2 border-opacity-0  hover:text-white border-white hover:border-opacity-100 "
        >
          Laptop
        </Link>
        <Link
          to="/Watch"
          className="text-xl p-2 rounded border-2 border-opacity-0  hover:text-white border-white hover:border-opacity-100"
        >
          Watch
        </Link>
      </div>
    </>
  );
}

export default Header;
