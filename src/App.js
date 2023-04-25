import ContactUs from "./ContactUs";
import "./App.css";
import UseEffect from "./UseEffect";
import Props from "./Props";
import ImportExport from "./ImportExport";
import Counters from "./Counters";
import Icons from "./IconsSet";
import BackgroundChange from "./BackgroundChange";
import SpreadOperator from "./SpreadOperator";
import Gallery from "./Gallery";
import Layout from "./Layout";
import DemoProps from "./DemoProps";
import NEtfliX from "./NEtfliX";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import Mobile from "./AcessoriesPages/mobile";
import Laptop from "./AcessoriesPages/Laptop";
import Watch from "./AcessoriesPages/Watch";

function App() {
  return (
    <>
      {/* {/* <Layout /> */}

      {/* <SpreadOperator /> */}
      {/* <BackgroundChange /> */}
      {/* <Icons /> */}
      {/* <ContactUs /> */}
      {/* <UseEffect /> */}
      {/* <Props /> */}
      {/* <ImportExport /> */}
      {/* <Counters /> */}
      {/* <Gallery /> */}
      {/* <NEtfliX /> */}
      {/* <DemoProps /> */}

      <BrowserRouter>
        <Routes>
          <Route path="*" element={<p>page not found</p>} />

          <Route path="/" element={<Layout component={<HomePage />} />} />
          <Route
            path="/about-us"
            element={<Layout component={<AboutUs />} />}
          />
          <Route
            path="/contact-us"
            element={<Layout component={<ContactUs />} />}
          />
          <Route path="/Mobile" element={<Layout component={<Mobile />} />} />
          <Route path="/Laptop" element={<Layout component={<Laptop />} />} />
          <Route path="/Watch" element={<Layout component={<Watch />} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
