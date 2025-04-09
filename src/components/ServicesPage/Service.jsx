import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 580);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 580;
      setIsMobile(newIsMobile);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCardClick = (index) => {
    setActiveIndex(activeIndex !== index ? index : null);
  };

  // Animation controls for left and right sections
  const leftControls = useAnimation();
  const rightControls = useAnimation();

  // Intersection Observer hooks
  const [leftRef, leftInView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const [rightRef, rightInView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Animate when in view
  React.useEffect(() => {
    if (leftInView) {
      leftControls.start("visible");
    } else {
      leftControls.start("hidden");
    }

    if (rightInView) {
      rightControls.start("visible");
    } else {
      rightControls.start("hidden");
    }
  }, [leftControls, rightControls, leftInView, rightInView]);

  // Animation variants
  const leftVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const rightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className={`servicePage ${isMobile ? "mobile" : ""} ${activeIndex !== null ? "expanded" : ""}`}>
      {isMobile ? (
        // Mobile Layout
        <div className="mobile-layout">
            <motion.div
              className="mobile-top-section"
              ref={leftRef}
              initial="hidden"
              animate={leftControls}
              variants={leftVariants}
            >
              <div className="left-text">
                <h1>EXPLORE OUR</h1>
                <h2>SERVICES</h2>
              </div>
              <p>
                At ByteHive, we craft digital solutions that drive impact. From modern websites to intelligent software, we turn ideas into secure, scalable, and creative tech experiences. Whether you're starting up, scaling, or rebranding — we’re here to bring your vision to life, one byte at a time.
              </p>
              <motion.img
                src={Anim}
                alt="Service Animation"
                className="mobile-top-img"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  leftInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                }
                transition={{ delay: 0.4, duration: 0.6 }}
              />
            </motion.div>
          {/* Accordion Layout */}
          <div className="mobile-accordion">
            {services.map((service, index) => (
              <div
                key={index}
                className={`accordion-card ${activeIndex === index ? "expanded" : ""}`}
                onClick={() => handleCardClick(index)}
                style={
                  activeIndex === index
                    ? {
                        backgroundImage: `url(${service.bgImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        color: "#fff",
                      }
                    : {}
                }
              >
                <div className="accordion-header">
                  <h3>{service.title}</h3>
                  <span className={`arrow ${activeIndex === index ? "rotate" : ""}`}>
                    ▼
                  </span>
                </div>

                {activeIndex === index && (
                  <p className="accordion-description">{service.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Desktop Layout
        <>
          <motion.div
            className="left-side"
            ref={leftRef}
            initial="hidden"
            animate={leftControls}
            variants={leftVariants}
          >
            <div className="left-text">
              <h1>EXPLORE OUR</h1>
              <h2>SERVICES</h2>
            </div>
            <p>
              At ByteHive, we craft digital solutions that drive impact. From modern websites to intelligent software, we turn ideas into secure, scalable, and creative tech experiences. Whether you're starting up, scaling, or rebranding — we’re here to bring your vision to life, one byte at a time.
            </p>
            <motion.img
              src={Anim}
              alt="Service Animation"
              className="service-img"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                leftInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </motion.div>
  
          <motion.div
            className={`right-side ${activeIndex !== null ? "expanded" : ""}`}
            ref={rightRef}
            initial="hidden"
            animate={rightControls}
            variants={rightVariants}
          >
            <div className="cards-container">
              {services.map((service, index) => (
                <motion.div
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
                  variants={cardVariants}
                  whileHover={
                    index !== activeIndex
                      ? {
                          scaleY: 1.03,
                          transformOrigin: "center bottom",
                        }
                      : {}
                  }
                >
                  <motion.div
                    className="dropdown-icon"
                    animate={{ rotate: index === activeIndex ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </motion.div>
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
                </motion.div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
}

export default Service;
