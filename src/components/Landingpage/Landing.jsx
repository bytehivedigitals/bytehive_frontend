import React from "react";
import "../Landingpage/Landing.css";
import gif from "../../assets/byt.gif";
import { FaArrowDown } from "react-icons/fa";

function Landing() {
  return (
    <div className="landingPage">
      {/* Headings with arrow */}
      <div className="headings-container">
        <div className="headings">
          <h1>*LET'S</h1>
          <h2>MAKE IT</h2>
          <h3>GREAT</h3>
          <div className="down-arrow-container">
            <FaArrowDown className="down-arrow" />
          </div>
        </div>
      </div>

      {/* Centered GIF */}

      {/* Content section (paragraph + scroll) */}
      <div className="content-section">
        {/* Left-aligned paragraph */}
        <div className="paragraph-container">
          <p className="main-paragraph">
            "At the intersection of innovation and technology, we craft
            solutions that not only meet today's challenges but shape tomorrow's
            possibilities. Through collaboration, creativity, and cutting-edge
            expertise, we're dedicated to building a digital future that
            empowers businesses and transforms industries."
          </p>
        </div>

        {/* Scroll text - right aligned under paragraph */}
        <div className="scroll-container">
          <span className="scroll-text">SCROLL</span>
        </div>
      </div>
    </div>
  );
}

export default Landing;
