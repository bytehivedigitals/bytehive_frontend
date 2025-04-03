import React, { useState, useEffect } from "react";
import "./CurvedNavbar.css";

const CustomNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className={`custom-navbar ${isScrolled ? "custom-scrolled" : ""}`}>
        <div className="custom-logo">ByteHive</div>

        <div className="custom-nav-center">
          <ul className={`custom-nav-links ${isScrolled ? "hidden" : ""}`}>
            {["What We Do", "Work", "Method", "Learn", "About"].map((id) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => handleNavClick(id)}>
                  {id.replace("-", " ")}
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
          {isScrolled && (
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
            {["what-we-do", "work", "method", "learn", "about"].map(
              (id, index) => (
                <li key={id} onClick={() => handleNavClick(id)}>
                  <span className="custom-menu-index">(0{index + 1})</span>{" "}
                  {id.replace("-", " ")}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default CustomNavbar;
