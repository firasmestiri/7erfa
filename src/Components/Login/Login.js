// Login.js
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import { Link } from "react-router-dom";
import Signup from "../Signup/Signup";
import { Route, Routes } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can use formData in your desired way, such as sending it to a server or using it in your application.
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h1>Login to Herfa</h1>
        <div style={{ width: "500px" }}>
          <Form className="form-margin" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password" // Change the input type to "password"
                placeholder="Enter your Password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              size="lg"
              active
              style={{ width: "150px", margin: "30px" }}
            >
              Log In
            </Button>
          </Form>
        </div>
        {/* <h3 style={{ fontSize: "20px" }}>Forgot password? </h3> */}

        <div className="link-container">
          <h3 style={{ fontSize: "20px" }}>No account?</h3>
          <h3 style={{ fontSize: "20px" }}>
            <Link to="/signup">Sign up</Link>
            <Routes>
              <Route path="/SignUp" element={<Signup />} />
            </Routes>
          </h3>
          <h3>{formData.phoneNumber}</h3>
        </div>
      </div>
    </div>
  );
}
