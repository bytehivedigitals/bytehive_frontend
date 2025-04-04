import React, { useState } from "react";
import "./Service.css";
import Anim from "../../assets/service-anim.gif";
import bgImage1 from "../../assets/serviceblock-bg-1.png";
import bgImage2 from "../../assets/serviceblock-bg-2.png";
import bgImage3 from "../../assets/serviceblock-bg-3.png";
import bgImage4 from "../../assets/serviceblock-bg-4.png";
import bgImage5 from "../../assets/serviceblock-bg-5.png";

const services = [
  {
    title: "BRAND IDENTITY CREATION",
    description:
      "We help you create a unique brand identity that resonates with your audience and stands out in the market. From logos to brand guidelines, we ensure your brand tells a compelling story.",
    bgImage: bgImage1,
  },
  {
    title: "WEB & MOBILE DESIGN",
    description:
      "Our team designs responsive and user-friendly web and mobile interfaces to enhance user experience. We focus on creating designs that are both visually appealing and highly functional.",
    bgImage: bgImage2,
  },
  {
    title: "UI/UX DESIGN",
    description:
      "We focus on creating intuitive and engaging user interfaces and experiences for your digital products. Our designs prioritize usability, accessibility, and user satisfaction.",
    bgImage: bgImage3,
  },
  {
    title: "CUSTOM SOFTWARE DEVELOPMENT",
    description:
      "We develop custom software solutions tailored to your business needs, ensuring scalability and security. Our solutions are designed to grow with your business and adapt to changing requirements.",
    bgImage: bgImage4,
  },
  {
    title: "CLOUD COMPUTING",
    description:
      "Our cloud solutions help you optimize your operations and reduce costs with scalable and secure cloud services. We provide end-to-end cloud migration, management, and optimization.",
    bgImage: bgImage5,
  },
  {
    title: "CYBERSECURITY",
    description:
      "We provide comprehensive cybersecurity services to protect your data and systems from threats. Our proactive approach ensures your business stays secure in an ever-evolving digital landscape.",
    bgImage: bgImage1,
  },
  {
    title: "IT CONSULTING",
    description:
      "Our IT consulting services help you navigate the digital landscape and implement the best technology solutions. We offer strategic guidance to align technology with your business goals.",
    bgImage: bgImage2,
  },
];

function Service() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index) => {
    setActiveIndex(activeIndex !== index ? index : null);
  };

  return (
    <div className={`servicePage ${activeIndex !== null ? "expanded" : ""}`}>
      <div className="left-side">
        <div className="left-text">
          <h1>EXPLORE OUR</h1>
          <h2>SERVICES</h2>
        </div>
        <p>
          Welcome to BYTEHIVE, where technology meets innovation. We deliver
          secure, scalable, and tailored IT solutions to help your business
          thrive in the digital era. Let’s build the future together!
        </p>
        <img src={Anim} alt="Service Animation" className="service-img" />
      </div>

      <div className={`right-side ${activeIndex !== null ? "expanded" : ""}`}>
        <div className="cards-container">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-block ${
                index === activeIndex ? "expanded" : ""
              }`}
              onClick={() => handleCardClick(index)}
              style={
                index === activeIndex
                  ? {
                      backgroundImage: `url(${service.bgImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }
                  : {}
              }
            >
              {/* Diagonal Arrow Icon (↗) */}
              <div className="arrow-container">
                <svg
                  className="arrow-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3a6ecf"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="19" x2="19" y2="5"></line>
                  <polyline points="9 5 19 5 19 15"></polyline>
                </svg>
              </div>

              <h3>
                {service.title.split(" ").slice(0, 2).join(" ")}
                {service.title.split(" ").length > 2 && <br />}
                {service.title.split(" ").slice(2).join(" ")}
              </h3>
              {index !== activeIndex && (
                <p className="service-caption">Short Caption On Services</p>
              )}
              {index === activeIndex && (
                <p className="service-description">{service.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
