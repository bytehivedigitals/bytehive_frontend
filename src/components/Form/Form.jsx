import React, { useState } from "react";
import "../Form/Form.css";
import { Form as BootstrapForm, Modal, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaCheckCircle
} from "react-icons/fa";

const FormWithBackground = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    response: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_m73nvyq",
        "template_k2982un",
        { ...formData, reply_to: formData.email },
        "tijD6H-1i6aLa5rld"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setShowSuccess(true); // Show the success popup
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );

    console.log("Form data submitted:", formData);
    setFormData({
      name: "",
      email: "",
      number: "",
      response: "",
    });
  };

  const handleClose = () => setShowSuccess(false);

  return (
    <div className="form-container">
      <BootstrapForm onSubmit={handleSubmit} className="form-content">
        <h1 className="form-h1">
          Got ideas? We've got the skills. Let's team up.
        </h1>
        <br />
        <br />
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="number">Number:</label>
          <input
            type="tel"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="response">Response:</label>
          <textarea
            id="response"
            name="response"
            value={formData.response}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <br />
        <button type="submit">Send Message</button>
      </BootstrapForm>

      {/* Custom Success Popup */}
      {showSuccess && (
  <div className="success-popup-overlay">
    <div className="success-popup">
      <div className="success-icon">
        <div className="circle"></div>
        <div className="checkmark"></div>
      </div>
      <h3>Success!</h3>
      <p>Your response has been sent successfully! Our team will contact you soon...</p>
      <button onClick={handleClose}>OK</button>
    </div>
  </div>
      )}
    </div>
  );
};

export default FormWithBackground;