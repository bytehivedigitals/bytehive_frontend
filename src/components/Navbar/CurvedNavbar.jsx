import React, { useState } from "react";
import { Navbar, Nav, Container, Offcanvas, Button } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi"; // Modern Menu Icon
import "./CurvedNavbar.css"; // Import custom styles
import logo from "../../assets/name.png"; // Import your logo image

const CustomNavbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* Fixed Top Navbar */}
      <Navbar expand="lg" className="custom-navbar fixed-top">
        <Container>
          {/* Logo */}
          <Navbar.Brand href="#">
            <img src={logo} alt="Brand Logo" className="navbar-logo" />
          </Navbar.Brand>

          {/* Modern Menu Icon - Visible only on smaller screens */}
          <div className="menu-icon d-lg-none" onClick={() => setShow(true)}>
            <GiHamburgerMenu />
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
              {/* Contact Button */}
              <Nav.Link href="#contact">
                <Button className="contact-btn">Contact</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Offcanvas Menu for Mobile */}
      <Offcanvas
        show={show}
        onHide={() => setShow(false)}
        placement="end"
        className="custom-offcanvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link
              href="#home"
              className="nav-item mobile-nav-item"
              onClick={() => setShow(false)}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className="nav-item mobile-nav-item"
              onClick={() => setShow(false)}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#services"
              className="nav-item mobile-nav-item"
              onClick={() => setShow(false)}
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="#works"
              className="nav-item mobile-nav-item"
              onClick={() => setShow(false)}
            >
              Works
            </Nav.Link>
            <Nav.Link
              href="#blogs"
              className="nav-item mobile-nav-item"
              onClick={() => setShow(false)}
            >
              Blogs
            </Nav.Link>
            {/* Contact Button in Mobile */}
            <Nav.Link href="#contact" onClick={() => setShow(false)}>
              <Button className="contact-btn mobile-contact-btn">
                Contact
              </Button>
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CustomNavbar;
