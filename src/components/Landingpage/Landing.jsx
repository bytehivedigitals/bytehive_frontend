import React from "react";
import "../Landingpage/Landing.css";
import { FaArrowDown } from "react-icons/fa";
import bgVideo from "../../assets/logo_anim.webm";

function Landing() {
  return (
    <div className="landingPage">
      {/* Background Video - hidden on mobile via CSS */}
      <video autoPlay muted loop className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="video-overlay"></div>

      {/* Foreground content */}
      <div className="landing-content">
        {/* Headings */}
        <div className="headings-container">
          <div className="headings">
            <h1>*LET'S</h1>
            <h2>MAKE IT</h2>
            <h3>GREAT</h3>

            {/* Arrow */}
            <div className="down-arrow-container">
              <FaArrowDown className="down-arrow" />
            </div>
          </div>

          {/* Mobile-only video shown below arrow */}
          <div className="mobile-video">
            <video autoPlay muted loop>
              <source src={bgVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Paragraph & Scroll */}
        <div className="content-section">
          <div className="paragraph-container">
            <p className="main-paragraph">
              At ByteHive, we don’t just build websites and software — we craft
              experiences that connect, engage, and inspire. We’re a passionate
              collective of tech enthusiasts, designers, and strategists on a
              mission to turn your ideas into intelligent digital solutions.
              Whether you’re a startup shaping your first product or an
              enterprise scaling to new heights, ByteHive is your creative tech
              partner for web development, digital marketing, branding, UI/UX,
              and beyond.
            </p>
          </div>

          <div className="scroll-container">
            <span className="scroll-text">SCROLL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
