import React from "react";
import Creditcard from "../../Assests/CreditCard.jpg";

const Footer = () => {
  return (
    <>
      <div className="h-80 bg-gray-400 ">
        <p className="text-xl align-text-bottom  text-center ">
          Powered By Ecart
        </p>
        <img className=" " src={Creditcard} alt="" />
      </div>
    </>
  );
};

export default Footer;
