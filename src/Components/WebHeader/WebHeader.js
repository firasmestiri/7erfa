// WebHeader.js
import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Image,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import imageUrls from "../../public/ImagesLink";
import "./WebHeader.css"; // Link to the CSS file
import { isSignedIn } from "../../User.js";

export default function WebHeader() {
  return (
    <div className="navbar-container">
      <Navbar expand="lg" className="navbar">
        <Container className="logo-container">
          <div className="logo-container">
            <div>
              <Link to="/">
                <Image
                  src={imageUrls[0].url}
                  alt=""
                  style={{
                    width: "100px",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
              </Link>
              <Link to="/" className="home_text">
                <h1>Herfa</h1>
              </Link>
            </div>
            <div className="services-dropdown">
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Home Cleaning
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Plumbing</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Electrical
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">see all</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#Contact">Contact</Nav.Link>
            </div>
          </div>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="nav-links">
                {isSignedIn() && (
                  <Button
                    style={{
                      backgroundColor: "#2f2a39",
                      border: "none",
                      width: "100",
                    }}
                  >
                    <Link to="/RequestServicePage" className="login_button">
                      request a service
                    </Link>
                  </Button>
                )}
                {!isSignedIn() && (
                  <Button
                    style={{
                      backgroundColor: "#2f2a39",
                      border: "none",
                      width: "100",
                    }}
                  >
                    <Link to="/Login" className="login_button">
                      Login
                    </Link>
                  </Button>
                )}
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
