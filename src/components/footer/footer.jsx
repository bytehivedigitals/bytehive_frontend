import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../assets/name_white1.png"; // Import your logo
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Section with Logo */}
          <div className="footer-item footer-logo">
            <img src={logo} alt="ByteHive LLP Logo" className="logo-image" />
            <p>Let's Make It Great!</p>
          </div>

          {/* Quick Links */}
          <div className="footer-item">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-item">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Mobile App Development</a>
              </li>
              <li>
                <a href="#">Branding & Design</a>
              </li>
              <li>
                <a href="#">SEO & Marketing</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-item">
            <h4>Contact Us</h4>
            <p>Email: info@bytehive.in</p>
            <p>Phone: +91 9747913218</p>
            <p>Phone: +91 7293217153</p>
            <p>Phone: +91 7025864355</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="footer-social">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/company/bytehive-llp/">
            <FaLinkedinIn />
          </a>
          <a href="https://www.instagram.com/bytehive_/">
            <FaInstagram />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>© 2025 ByteHive LLP. All Rights Reserved.</p>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
