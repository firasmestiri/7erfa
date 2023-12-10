import React, { useState } from "react";
import { Form, Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import imageUrls from "../../../public/ImagesLink";
import "./UserSignUp.css";
import LocationShearchbar from "../../common/searchBars/LocationShearchbarFolder/LocationShearchbar";
import { apiURL } from "../../../apiConfig";
//import ServiceDropdown from "../../common/searchBars/ServicesSearchBar/ServiceDropdown";

export default function Signup({userFormData, setUserFormData}) {
  const [pickRole, setRole] = useState(0);
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
    if (!passwordRegex.test(userFormData.password)) {
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
    if (userFormData.username.trim().length < 4 || !/\d/.test(userFormData.username)) {
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
    if (value === 1) {
      setRole("client");
      value = "client";
    } else {
      setRole("worker");
      value = "worker";
    }

    // Update the selected role in the formData
    setUserFormData((userFormData) => ({
      ...userFormData,
      role: value, // Convert the value to a string if needed
    }));

    console.log("pickone Button clicked! and role is " + value);
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
        /*return <ServiceDropdown />;*/
        return (
          <div>
            <p>Rendered if intValue is 2</p>
          </div>
        );
      default:
        return null;
    }
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

      {adaptUi()}
    </div>
  );
}
