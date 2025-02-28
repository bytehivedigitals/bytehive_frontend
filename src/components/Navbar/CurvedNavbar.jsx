import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CurvedNavbar.css";
import logo from '../../assets/name.png'

const CurvedNavbar = () => {
  return (
    <Navbar expand="lg" className="curved-navbar fixed-top">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-items">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/works">
              Works
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs">
              Blogs
            </Nav.Link>
            <Button as={Link} to="/contact" className="get-in-touch">
              Get in Touch
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CurvedNavbar;
