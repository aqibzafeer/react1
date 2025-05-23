import AboutLeft from "../pages/AboutLeft";
import AboutRight from "../pages/AboutRight";
import SideBar from "../pages/SideBar";
import Skill from "../pages/about/Skill";
import Experience from "../pages/about/Experience";
import Projects from "../pages/about/Projects";
import Edu from "../pages/about/Edu";

import React from "react";
import WooProducts from "./WooProducts";

function About() {
  return (
    <>
      <div>
        <WooProducts />
      </div>
      {/* <div className="flex flex-col sm:flex-row w-full p-5">
        <AboutLeft />
        <SideBar />
        <AboutRight />
      </div>

      <div className="flex flex-col sm:flex-row w-full p-5">
        <Skill />
        <Experience />
      </div>
      <div className="flex flex-col sm:flex-row w-full p-5">
        <Projects />
        <Edu />
      </div> */}
    </>
  );
}
export default About;
