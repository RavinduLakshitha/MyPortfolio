// import { right } from '@popperjs/core';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarCom = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bar">
        <Container>
          <Navbar.Brand
            href="#home"
            className="Ravi"
            style={{
              color: "#678e1d",
              fontSize: "220%",
              fontFamily: "-moz-initial",
              letterSpacing: "10px"
            }}
          >
            <b>Ravindu</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="24"
              height="24"
              color="rgb(92.16% 95.69% 0%)"
            >
              <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
            </svg>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#portfolio"
                style={{ color: "rgb(92.16% 95.69% 0%)" }}
              >
                Portfolio
              </Nav.Link>
              <Nav.Link
                href="#projects"
                style={{ color: "rgb(92.16% 95.69% 0%)" }}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#techstack"
                style={{ color: "rgb(92.16% 95.69% 0%)" }}
              >
                Tech Stack
              </Nav.Link>
              <Nav.Link
                href="#timeline"
                style={{ color: "rgb(92.16% 95.69% 0%)" }}
              >
                Timeline
              </Nav.Link>
              <Nav.Link
                href="#contact"
                style={{ color: "rgb(92.16% 95.69% 0%)" }}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarCom;
