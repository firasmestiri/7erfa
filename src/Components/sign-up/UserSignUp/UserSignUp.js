import React, { useState } from "react";
import { Form, Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import imageUrls from "../../../public/ImagesLink";
import "./UserSignUp.css";
import "./Test.css";
import LocationShearchbar from "../../common/searchBars/LocationShearchbarFolder/LocationShearchbar";
import { apiURL } from "../../../apiConfig";
//import ServiceDropdown from "../../common/searchBars/ServicesSearchBar/ServiceDropdown";

export default function Signup({ userFormData, setUserFormData }) {
  const [pickRole, setRole] = useState();
  const [errors, setErrors] = useState([]);

  const handleLocationChange = (location) => {
    setUserFormData({ ...userFormData, location });
    console.log(userFormData.location);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log(`Updating ${id} to ${value}`);
    setErrors([]);

    // For other inputs, update as usual
    setUserFormData((userFormData) => ({
      ...userFormData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = [];

    if (userFormData.phoneNumber.length !== 8) {
      newErrors = [
        ...newErrors,
        { id: "phoneNumber", msg: "Phone must be 8 digits" },
      ];
    }

    if (
      userFormData.username.trim().length === 0 ||
      userFormData.email.trim().length === 0 ||
      userFormData.password.trim().length === 0 ||
      userFormData.phoneNumber.trim().length === 0 ||
      userFormData.location.trim().length === 0
    ) {
      newErrors = [
        ...newErrors,
        { id: "emptyField", msg: "All fields must be completed" },
      ];
    }
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(userFormData.password)&&(userFormData.password!=="pwd")) {
      newErrors = [
        ...newErrors,
        {
          id: "invalidPassword",
          msg: "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
        },
      ];
    }
    if (userFormData.password !== userFormData.repeatPassword) {
      newErrors = [
        ...newErrors,
        { id: "passwordMismatch", msg: "Passwords do not match" },
      ];
    }
    if (!userFormData.email.includes("@")) {
      newErrors = [
        ...newErrors,
        { id: "invalidEmail", msg: "Email must contain @ character" },
      ];
    }
    if (
      userFormData.username.trim().length < 4 ||
      !/\d/.test(userFormData.username)
    ) {
      newErrors = [
        ...newErrors,
        {
          id: "invalidUsername",
          msg: "Username must be at least 4 characters long and contain at least one number",
        },
      ];
    }

    console.log(newErrors);
    setErrors(newErrors);
    console.log(newErrors.length);
    if (newErrors.length === 0) {
      console.log("Form data submitted:", userFormData);
      const data = {
        phoneNumber: userFormData.phoneNumber,
        password: userFormData.password,
        repeatPassword: userFormData.repeatPassword,
        username: userFormData.username,
        email: userFormData.email,
        location: userFormData.location,
        role: userFormData.role,
      };

      axios
        .post(
          apiURL +
            (userFormData.role === "worker" ? "/workers" : "/clients") +
            "/signup",
          data
        )
        .then((response) => {
          console.log("sex");
        })
        .catch((error) => {
          console.log("no sex:", error);
        });
    } else {
      console.log("Form submission failed. Please fix the errors.");
    }
  };

  const pickone = (value) => {
    setRole(value);
    setUserFormData((userFormData) => ({
      ...userFormData,
      role: value,
    }));

    console.log("pickone Button clicked! and role is " + value);
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <h1>Sign up to Herfa</h1>
        {/* Input box code */}
        <div className="input-container">
          {/* username */}
          <Form className="form-margin" onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <div
                style={{
                  display: "inline-block",
                  color: "red",
                  marginLeft: "3px",
                }}
              >
                {errors.map((error) =>
                  error.id === "invalidUsername" ? error.msg : ""
                )}
              </div>
              <Form.Control
                type="text"
                placeholder="Enter your Username"
                id="username"
                value={userFormData.username}
                onChange={handleChange}
              />{" "}
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <div
                style={{
                  display: "inline-block",
                  color: "red",
                  marginLeft: "3px",
                }}
              >
                {errors.map((error) =>
                  error.id === "invalidEmail" ? error.msg : ""
                )}
              </div>
              <Form.Control
                type="text"
                placeholder="Enter your Email"
                id="email" // <-- Use "Email" as the id
                value={userFormData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <div
                style={{
                  display: "inline-block",
                  color: "red",
                  marginLeft: "3px",
                }}
              >
                {errors.map((error) =>
                  error.id === "phoneNumber" ? error.msg : ""
                )}
              </div>
              <Form.Control
                type="tel"
                pattern="[0-9]*"
                maxLength="8"
                id="phoneNumber" // <-- Should match the key in formData
                placeholder="Enter your Phone Number"
                value={userFormData.phoneNumber}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <div
                style={{
                  display: "inline-block",
                  color: "red",
                  marginLeft: "3px",
                }}
              >
                {errors.map((error) =>
                  error.id === "invalidPassword" ? error.msg : ""
                )}
              </div>
              <Form.Control
                type="password"
                id="password"
                placeholder="Enter your Password"
                value={userFormData.password}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Repeat Password</Form.Label>
              <div
                style={{
                  display: "inline-block",
                  color: "red",
                  marginLeft: "3px",
                }}
              >
                {errors.map((error) =>
                  error.id === "passwordMismatch" ? error.msg : ""
                )}
              </div>
              <Form.Control
                type="password"
                id="repeatPassword"
                placeholder="Enter your Password"
                value={userFormData.repeatPassword}
                onChange={handleChange}
              />
            </Form.Group>

            <LocationShearchbar
              id="location"
              className="form-margin"
              onValueChange={handleLocationChange}
            />
            {/* <SearchAutocomplete /> */}
            {/* we put 0 if he didn't choose */}
            <div
              className={`${
                pickRole === "client" ? "stuck-image" : "select-image"
              } on-click-signup ${pickRole === "client" ? "selected" : ""}`}
              onClick={() => pickone("client")}
            >
              <figure
                className={`${pickRole === "client" ? "snip1600" : "snip1500"}`}
              >
                <img
                  src={imageUrls[3].url}
                  alt="client_emoji"
                  fluid="true"
                  rounded
                  roundedcircle
                  className="image-style"
                />
                <figcaption>
                  <div>
                    <h2></h2>
                    <h4>Client</h4>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div
              className={`${
                pickRole === "worker" ? "stuck-image" : "select-image"
              } on-click-signup ${pickRole === "worker" ? "selected" : ""}`}
              onClick={() => pickone("worker")}
            >
              <figure
                className={`${pickRole === "worker" ? "snip1600" : "snip1500"}`}
              >
                <img
                  src={imageUrls[4].url}
                  alt="worker_emoji"
                  fluid="true"
                  rounded
                  roundedcircle
                  className="image-style"
                />
                <figcaption>
                  <div>
                    <h2></h2>
                    <h4>Worker</h4>
                  </div>
                </figcaption>
              </figure>
            </div>
            {/*  */}

            <Button
              type="submit"
              variant="secondary"
              size="lg"
              active
              className="signup-button"
            >
              Sign up
            </Button>
            <div
              style={{
                display: "inline-block",
                color: "red",
                marginLeft: "3px",
              }}
            >
              {errors.map((error) =>
                error.id === "emptyField" ? error.msg : ""
              )}
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
