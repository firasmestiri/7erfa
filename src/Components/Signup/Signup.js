import React, { useState } from "react";
import {
  Form,
  Button,
  Image,
  Dropdown,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import imageUrls from "../../public/ImagesLink";
import "./Signup.css"; // Import the CSS file
import iconsURL from "../../public/IconsLinks";

export default function Signup() {
  const [pickRole, setRole] = useState(0);
  const pickone = (value) => {
    if (pickRole === value) {
      setRole(0);
    } else {
      setRole(value);
    }
    console.log("pickone Button clicked! and role is " + pickRole);
  };

  const adaptUi = () => {
    switch (pickRole) {
      case 1:
        return (
          <div>
            <p>Rendered if intValue is 1</p>
          </div>
        );
      case 2:
        return (
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                choose your service
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {iconsURL.map((url) => (
                  <Dropdown.Item key={url.id}>{url.description}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        );
    }
  };
  // search DropDown
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowDropdown(false);
    // You can perform additional actions when an item is selected
  };

  const items = ["Item 1", "Item 2", "Item 3", "khaled", "ahmed"];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <h1>Sign up to Herfa</h1>
        {/* Input box code */}
        <div className="input-container">
          {/* username */}
          <Form className="form-margin">
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter your Username" />
            </Form.Group>
          </Form>
          {/* username */}
          <Form className="form-margin">
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Enter your Email" />
            </Form.Group>
          </Form>
          {/* Phone Number */}
          <Form className="form-margin">
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Enter your Phone Number" />
            </Form.Group>
          </Form>
          {/* Password */}
          <Form className="form-margin">
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your Password" />
            </Form.Group>
          </Form>
          {/* Repeat Password */}
          <Form className="form-margin">
            <Form.Group controlId="formRepeatPassword">
              <Form.Label>Repeat Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Repeat your Password"
              />
            </Form.Group>
          </Form>
          <div>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search..."
                onFocus={() => setShowDropdown(true)}
                onBlur={() => setShowDropdown(false)}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Dropdown show={showDropdown}>
                <Dropdown.Toggle
                  variant="outline-secondary"
                  id="dropdown-basic"
                >
                  {selectedItem || "Select"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {filteredItems.map((item, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={() => handleItemClick(item)}
                    >
                      {item}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </InputGroup>
          </div>
        </div>
        {/* we put 0 if he didn't choose */}
        <div className="image-container">
          {/* Customer image we put 1 to say its a customer */}
          <div
            className="select-image on-click-signup"
            onClick={() => pickone(1)}
          >
            <Image
              src={imageUrls[3].url}
              alt=""
              roundedCircle
              className="image-style"
            />
          </div>
          {/* worker image we put 2 to say its worker */}
          <div
            className="select-image on-click-signup"
            onClick={() => pickone(2)}
          >
            <Image
              src={imageUrls[4].url}
              alt=""
              fluid
              rounded
              roundedCircle
              className="image-style"
            />
          </div>
        </div>
        <div>{adaptUi()}</div>
        {/* Button for Sign up */}
        <Button variant="secondary" size="lg" active className="signup-button">
          Sign up
        </Button>
        <h1>{pickRole}</h1>
      </div>
    </div>
  );
}
