import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Service.css";
import Anim from "../../assets/Service_anim.webm";
import bgImage1 from "../../assets/serviceblock-bg-1.webp";
import bgImage2 from "../../assets/serviceblock-bg-2.webp";
import bgImage3 from "../../assets/serviceblock-bg-3.webp";
import bgImage4 from "../../assets/serviceblock-bg-4.webp";

const services = [
  {
    title: "BRAND IDENTITY CREATION",
    caption: "Craft your brand's voice.",
    description: "Crafting a distinctive brand identity that connects with your audience and leaves a lasting impression. From logos to guidelines, we bring your brand story to life.",
    bgImage: bgImage1,
  },
  {
    title: "WEB & MOBILE DESIGN",
    caption: "Designs that engage.",
    description: "We design responsive, user-friendly web and mobile interfaces that combine stunning visuals with seamless functionality to elevate user experience",
    bgImage: bgImage2,
  },
  {
    title: "UI/UX DESIGN",
    caption: "Seamless user journeys.",
    description: "We craft intuitive, engaging interfaces that prioritize usability, accessibility, and user satisfaction for your digital products.",
    bgImage: bgImage3,
  },
  {
    title: "CUSTOM SOFTWARE DEVELOPMENT",
    caption: "Solutions built for you.",
    description: "We create custom software solutions built for your business, ensuring scalability, security, and adaptability to evolve with your needs.",
    bgImage: bgImage4,
  },
  {
    title: "CLOUD COMPUTING",
    caption: "Scale smarter, faster.",
    description: "Our cloud solutions optimize operations and reduce costs with scalable, secure services. We handle everything from migration to management and optimization.",
    bgImage: bgImage3,
  },
  {
    title: "CYBERSECURITY",
    caption: "Protect what matters.",
    description: "We offer comprehensive cybersecurity services to safeguard your data and systems, ensuring your business remains secure in a constantly changing digital world",
    bgImage: bgImage2,
  },
  {
    title: "IT CONSULTING",
    caption: "Strategize. Transform. Grow.",
    description: "Our IT consulting services guide you through the digital landscape, providing strategic solutions that align technology with your business goals.",
    bgImage: bgImage1,
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
    <div
      className={`servicePage ${isMobile ? "mobile" : ""} ${
        activeIndex !== null ? "expanded" : ""
      }`}
    >
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
            <div className="mobile-top-text">
              <h1>EXPLORE OUR</h1>
              <h2>SERVICES</h2>
            </div>
            <p>
              At ByteHive, we turn ideas into powerful digital
              solutions. Delivering secure, scalable, and innovative experiences
              that fuel growth.
            </p>
            <video autoPlay muted loop className="mobile-top-img">
              <source src={Anim} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
          {/* Accordion Layout */}
          <div className="mobile-accordion">
            {services.map((service, index) => (
              <div
                key={index}
                className={`accordion-card ${
                  activeIndex === index ? "expanded" : ""
                }`}
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
                  <span
                    className={`arrow ${activeIndex === index ? "rotate" : ""}`}
                  >
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
              At ByteHive, we turn ideas into powerful digital
              solutions. Delivering secure, scalable, and innovative experiences
              that fuel growth.
            </p>
            <video autoPlay muted loop className="service-img">
              <source src={Anim} type="video/webm" />
              Your browser does not support the video tag.
            </video>
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
                      width="22"
                      height="22"
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
                    <p className="service-caption">{service.caption}</p>
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
