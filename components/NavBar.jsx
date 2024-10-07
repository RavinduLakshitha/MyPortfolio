import { useState } from "react";
import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavbarCom = () => {
  return (
    <>
      <Navbar expand="lg" className="custom-navbar">
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand href="#home">
            <b>Ravindu Lakshitha</b>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="navbar-toggler" // Ensure this class is present
            style={{color: "white"}}
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="#home" style={{ color: "rgb(255, 241, 0)" }}>
                <b>Portfolio</b>
              </Nav.Link>
              <Nav.Link href="#link" style={{ color: "rgb(255, 241, 0)" }}>
                <b>Projects</b>
              </Nav.Link>
              <Nav.Link href="#link" style={{ color: "rgb(255, 241, 0)" }}>
                <b>Tech Stack</b>
              </Nav.Link>
              <Nav.Link href="#link" style={{ color: "rgb(255, 241, 0)" }}>
                <b>Timeline</b>
              </Nav.Link>
              <Nav.Link href="#link" style={{ color: "rgb(255, 241, 0)" }}>
                <b>Contact</b>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarCom;
