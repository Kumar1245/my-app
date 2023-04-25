import React from "react";
import Header from "../Header";
import Gallery from "../Gallery";
import Footer from "../Pages/Footer";

const Layout = (props) => {
  return (
    <>
      <Header />
      {/* <Gallery /> */}
      {props.component}
      <Footer />
    </>
  );
};

export default Layout;
