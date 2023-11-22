import React from "react";
import { Form, Button, Image } from "react-bootstrap";
import imageUrls from "../../public/ImagesLink";
import "./Signup.css"; // Import the CSS file

export default function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <h1>Sign up to Herfa</h1>
        {/* Input box code */}
        <div className="input-container">
          <Form className="form-margin">
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Enter your Phone Number" />
            </Form.Group>
          </Form>
          <Form className="form-margin">
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your Password" />
            </Form.Group>
          </Form>
          <Form className="form-margin">
            <Form.Group controlId="formRepeatPassword">
              <Form.Label>Repeat Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Repeat your Password"
              />
            </Form.Group>
          </Form>
        </div>
        <div className="image-container">
          {/* Customer images */}
          <div className="customer-image on-click-signup">
            <Image
              src={imageUrls[3].url}
              alt=""
              roundedCircle
              className="image-style"
            />
          </div>
          <div className="customer-image on-click-signup">
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
        {/*if the user picked customer*/}
        {/*if the user picked worker*/}
        {/*if the user didn't pick*/}
        {/* Button for Sign up */}
        <Button variant="secondary" size="lg" active className="signup-button">
          Sign up
        </Button>
      </div>
    </div>
  );
}
