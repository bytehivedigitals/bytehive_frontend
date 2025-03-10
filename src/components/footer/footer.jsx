import React from "react";
import "./footer.css";
import logo from "../../assets/name_white.png";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-top-content">
          <h2>Ready to get started?</h2>
          <p>
            Let’s create something amazing together. Reach out for a quote
            today!
          </p>
          <button className="footer-top-button">
            Request a Quote <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-columns">
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Work</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">Branding</a>
              </li>
              <li>
                <a href="#">E-commerce</a>
              </li>
              <li>
                <a href="#">SEO</a>
              </li>
              <li>
                <a href="#">Marketing</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Case Studies</a>
              </li>
              <li>
                <a href="#">Webinars</a>
              </li>
              <li>
                <a href="#">Whitepapers</a>
              </li>
              <li>
                <a href="#">Downloads</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contact</h3>
            <ul>
              <li>
                Phone: <a href="tel:+123456789">+1 234 567 89</a>
              </li>
              <li>
                Email: <a href="mailto:info@example.com">info@example.com</a>
              </li>
              <li>
                Whatsapp:{" "}
                <a
                  href="https://wa.me/123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +1 234 567 89
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="footer-logo-img" />
          <p>© {new Date().getFullYear()} ByteHive LLP. All rights reserved.</p>
        </div>

        <div className="social-links">
          <a href="#" className="social-link">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="social-link">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="social-link">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="social-link">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
