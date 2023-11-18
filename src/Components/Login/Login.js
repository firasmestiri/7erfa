// Login.js
import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import { Link } from "react-router-dom";
import Signup from "../Signup/Signup";
import { Route, Routes } from "react-router-dom";


export default function Login() {
  return (
    <div className="login-container">
      <div className="login-form-container">
        <h1>Login to Herfa</h1>
        <div style={{ width: "500px" }}>
          <Form className="form-margin">
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Enter your Phone Number" />
            </Form.Group>
          </Form>
          <Form className="form-margin">
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="text" placeholder="Enter your Password" />
            </Form.Group>
          </Form>
        </div>
        <h3 style={{ fontSize: "20px" }}>
          Forgot password?{" "}
          {/*make this a link to send you to the Forgot password page */}{" "}
        </h3>{" "}
        <Button
          variant="secondary"
          size="lg"
          active
          style={{ width: "150px", margin: "30px" }}
        >
          Log In
        </Button>
        <div className="link-container">
          <h3 style={{ fontSize: "20px" }}>No account?</h3>
          <h3 style={{ fontSize: "20px" }}>
          <Link to="/signup">Sign up</Link> 
            <Routes>
            <Route path="/SignUp" element={<Signup />}/>
            </Routes>
          </h3>
        </div>
      </div>
    </div>
  );
}
