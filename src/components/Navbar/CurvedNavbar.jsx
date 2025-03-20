import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";
import { RiMenu2Line } from "react-icons/ri";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaSearch,
} from "react-icons/fa";
import "./CurvedNavbar.css";
import logo from "../../assets/name.png";
import logo1 from "../../assets/name__1_-removebg-preview.png";

const CustomNavbar = () => {
  const [show, setShow] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setShow(false);
    }
  };

  return (
    <>
      <Navbar expand="lg" className="custom-navbar fixed-top">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="Brand Logo" className="navbar-logo" />
          </Navbar.Brand>

          <div className="menu-icon d-lg-none" onClick={() => setShow(true)}>
            <RiMenu2Line />
          </div>

          <Navbar.Collapse className="justify-content-end d-none d-lg-flex">
            <Nav className="nav-items">
              {["Home", "About", "Services", "Works"].map((item, index) => (
                <Nav.Link
                  key={index}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="nav-item"
                >
                  {item}
                </Nav.Link>
              ))}
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

      {/* Offcanvas Mobile Menu */}
      <Offcanvas
        show={show}
        onHide={() => setShow(false)}
        placement="start"
        className="custom-offcanvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src={logo1} alt="Brand Logo" className="offcanvas-logo" />
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          {/* Search Bar with Icon */}
          <InputGroup className="search-bar">
            <Form.Control type="text" placeholder="Search..." />
            <InputGroup.Text className="search-icon">
              <FaSearch />
            </InputGroup.Text>
          </InputGroup>

          {/* Navigation Links */}
          <Nav className="flex-column">
            {["Home", "About", "Services", "Works"].map((item, index) => (
              <Nav.Link
                key={index}
                className="nav-item mobile-nav-item"
                onClick={() => scrollToSection(item.toLowerCase())}
              >
                {item}
              </Nav.Link>
            ))}
            <Nav.Link href="#contact">
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
