import React from "react";
import About from "../components/constant/About";
import Blog from "../components/constant/Blog";
import Client from "../components/constant/Client";
import Contact from "../components/constant/Contact";
import Introduction from "../components/constant/Introduction";
import Project from "../components/constant/Project";
import Testimonial from "../components/constant/Testimonial";

const Main = () => {
  return (
    <div className="wrapper">

      <Introduction />

      <Project />

      <About />

      <Contact />
    </div>
  );
};

export default Main;
