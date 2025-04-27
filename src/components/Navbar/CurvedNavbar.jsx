import React, { useState, useEffect } from "react";
import "./CurvedNavbar.css";
import logoImage from "../../assets/bytehive_name.png";

const CustomNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Function to capitalize each word
  const capitalizeWords = (str) => {
    return str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      const interval = setInterval(() => {
        if (scrolling) {
          const menu = document.querySelector(".custom-menu-items");
          if (menu) {
            menu.scrollBy({ top: 1, behavior: "smooth" });
          }
        }
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isMenuOpen, scrolling]);

  const handleNavClick = (id) => {
    setIsMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth", // Enables smooth scrolling
        block: "start", // Scroll to the top of the section
      });
    }
  };

  const navItems = ["what-we-do", "work", "method", "learn", "about"];

  return (
    <>
      <nav className={`custom-navbar ${isScrolled ? "custom-scrolled" : ""}`}>
        <div className="custom-logo">
          <img src={logoImage} alt="Logo" className="custom-logo-img" />
        </div>

        <div className="custom-nav-center">
          <ul className={`custom-nav-links ${isScrolled ? "hidden" : ""}`}>
            {navItems.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(id);
                  }}
                >
                  {capitalizeWords(id)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="custom-right-side">
          <a
            href="#contact"
            className="custom-contact-link"
            onClick={() => handleNavClick("contact")}
          >
            Contact
          </a>
          {(isScrolled || isMobile) && (
            <span
              className="custom-menu-text"
              onClick={() => setIsMenuOpen(true)}
            >
              Menu
            </span>
          )}
        </div>
      </nav>

      {isMenuOpen && (
        <div
          className="custom-fullscreen-menu"
          onMouseEnter={() => setScrolling(false)}
          onMouseLeave={() => setScrolling(true)}
        >
          <div className="custom-menu-header">
            <div className="custom-logo-1">ByteHive</div>
            <span
              className="custom-close-btn"
              onClick={() => setIsMenuOpen(false)}
            >
              Close
            </span>
          </div>
          <ul className="custom-menu-items">
            {navItems.map((id, index) => (
              <li key={id} onClick={() => handleNavClick(id)}>
                <span className="custom-menu-index">(0{index + 1})</span>{" "}
                {capitalizeWords(id)}
              </li>
            ))}
            <li onClick={() => handleNavClick("contact")}>
              <span className="custom-menu-index">(06)</span> Contact
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default CustomNavbar;
