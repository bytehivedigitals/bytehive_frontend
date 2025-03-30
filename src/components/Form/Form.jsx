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
} from "react-icons/fa";

const FormWithBackground = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    response: "",
  });

  const [show, setShow] = useState(false);

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
        "service_m73nvyq", // Replace with your EmailJS service ID
        "template_k2982un", // Replace with your EmailJS template ID
        { ...formData, reply_to: formData.email }, // Add reply_to field for auto-reply
        "tijD6H-1i6aLa5rld" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setShow(true); // Show the success popup
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

  const handleClose = () => setShow(false);

  return (
    <div className="form-container">
      <BootstrapForm onSubmit={handleSubmit} className="form-content">
        <h1 className="form-h1">
          Got ideas? We've got the skills. Let's team up.
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
       <div className="popup">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your message has been sent successfully! Our team will contact you soon....</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </div>
  );
};

export default FormWithBackground;