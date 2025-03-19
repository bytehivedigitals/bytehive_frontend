import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  Button,
  Form,
} from "react-bootstrap";
import { RiMenu2Line } from "react-icons/ri"; // Updated menu icon
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import "./CurvedNavbar.css";
import logo from "../../assets/name.png";

const CustomNavbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* Fixed Top Navbar */}
      <Navbar expand="lg" className="custom-navbar fixed-top">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="Brand Logo" className="navbar-logo" />
          </Navbar.Brand>

          <div className="menu-icon d-lg-none" onClick={() => setShow(true)}>
            <RiMenu2Line /> {/* Updated menu icon */}
          </div>

          <Navbar.Collapse className="justify-content-end d-none d-lg-flex">
            <Nav className="nav-items">
              <Nav.Link href="#home" className="nav-item">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="nav-item">
                About
              </Nav.Link>
              <Nav.Link href="#services" className="nav-item">
                Services
              </Nav.Link>
              <Nav.Link href="#works" className="nav-item">
                Works
              </Nav.Link>
              <Nav.Link href="#blogs" className="nav-item">
                Blogs
              </Nav.Link>
              <Nav.Link href="#contact">
                <Button className="contact-btn">Contact</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Offcanvas Mobile Menu (Left Side) */}
      <Offcanvas
        show={show}
        onHide={() => setShow(false)}
        placement="start"
        className="custom-offcanvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>ByteHive</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          {/* Search Bar */}
          <Form className="search-bar">
            <Form.Control type="text" placeholder="Search..." />
          </Form>

          {/* Navigation Links */}
          <Nav className="flex-column">
            {["Home", "About", "Services", "Works", "Blogs"].map(
              (item, index) => (
                <Nav.Link
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="nav-item mobile-nav-item"
                  onClick={() => setShow(false)}
                >
                  {item}
                </Nav.Link>
              )
            )}
            <Nav.Link href="#contact" onClick={() => setShow(false)}>
              <Button className="contact-btn mobile-contact-btn">
                Contact
              </Button>
            </Nav.Link>
          </Nav>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="#" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="#" className="social-icon">
              <FaInstagram />
            </a>
            <a href="#" className="social-icon">
              <FaTwitter />
            </a>
            <a href="#" className="social-icon">
              <FaLinkedinIn />
            </a>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CustomNavbar;
