import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Image,
  Button,
} from "react-bootstrap";

export default function WebHeader() {
  return (
    <div style={{ display: "block" }}>
      <Navbar expand="lg" style={{ backgroundColor: "#e4ca79", width: "100%" }}>
        <Container style={{ display: "flex", justifyContent: "space around" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex start",
              gap: "50px",
            }}
          >
            <div style={{ display: "flex" }}>
              <Image
                src="https://media.canva.com/1/image-resize/1/382_408_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9iVXo2dy9NQUZ5UzBiVXo2dy8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAACIaJlQcRYzwz3ptlA4oqXzUhOhtAWPliDqHt8Aasms9&exp=1699963681&x-canva-quality=thumbnail_large&csig=AAAAAAAAAAAAAAAAAAAAAEb7GcgycuWQcB31QIDOt9swFergDEPYPybtGfdsBiH5"
                alt=""
                //fluid
                // rounded
                style={{
                  width: "100px", // Set the width to a fixed value
                  height: "auto", // Let the height adjust automatically to maintain aspect ratio
                  objectFit: "cover",
                }}
              />
              <h1
                style={{
                  fontFamily: "Times New Roman",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Herfa
              </h1>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Home Cleaning
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Plumbing</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Electrical
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
              </NavDropdown>
            </div>
          </div>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav style={{ display: "flex", gap: "30px" }}>
                <Nav.Link href="#Help">Help</Nav.Link>
                <Button
                  style={{
                    backgroundColor: "#2f2a39",
                    border: "none",
                    width: "100",
                  }}
                >
                  Login
                </Button>{" "}
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
