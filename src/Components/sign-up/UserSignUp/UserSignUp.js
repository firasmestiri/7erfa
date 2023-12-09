import React, { useState } from "react";
import {
  Form,
  Button,
  Image,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import imageUrls from "../../../public/ImagesLink";
import "./UserSignUp.css"; // Import the CSS file
import LocationShearchbar from "../../common/searchBars/LocationShearchbarFolder/LocationShearchbar";
import ServiceDropdown from "../../common/searchBars/ServicesSearchBar/ServiceDropdown";

export default function Signup() {
  const [pickRole, setRole] = useState(0);
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    phoneNumber: "",
    password: "",
    repeatPassword: "",
    Username: "",
    Email: "",
    location: ""
  });


  const handleChange = (e) => {
    const { id, value } = e.target;
    setErrors([]);

    setFormData({
      ...FormData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = [];

    if (formData.phoneNumber.length !== 8) {
      newErrors = [
        ...newErrors,
        { id: "phoneNumber", msg: "Phone must be 8 digits" },
      ];
    }

    if (formData.Username.trim().length === 0 || formData.Email.trim().length === 0 || formData.password.trim().length === 0 || formData.phoneNumber.length === 0 || formData.location.length === 0) {
      newErrors = [
        ...newErrors,
        { id: "emptyField", msg: "All fields must be completed" },
      ];
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      newErrors = [
        ...newErrors,
        {
          id: "invalidPassword",
          msg:
            "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
        },
      ];
    }
    if (formData.password !== formData.repeatPassword) {
      newErrors = [
        ...newErrors,
        { id: "passwordMismatch", msg: "Passwords do not match" },
      ];
    }
    if (!formData.Email.includes("@")) {
      newErrors = [
        ...newErrors,
        { id: "invalidEmail", msg: "Email must contain @ character" },
      ];
    }
    if (!/\d/.test(formData.Username)) {
      newErrors = [
        ...newErrors,
        { id: "noNumberInUsername", msg: "Username must contain at least one number" },
      ];
    }
    if (newErrors.length === 0) {
      console.log("Form data submitted:", formData);
      // Add logic for form submission or API call here
    } else {
      setErrors(newErrors);
      console.log("Form submission failed. Please fix the errors.");
    }

  }

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
        return <ServiceDropdown />;
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
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter your Username" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Enter your Email" />
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
                id="phoneNumber"
                placeholder="Enter your Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your Password" />
            </Form.Group>
            <Form.Group controlId="formRepeatPassword">
              <Form.Label>Repeat Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Repeat your Password"
              />
            </Form.Group>


            <LocationShearchbar className="form-margin" />
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
            <Button type="submit" variant="secondary" size="lg" active className="signup-button">
              Sign up
            </Button>
          </Form>
        </div>
      </div>

      <h1>{pickRole}</h1>
    </div>
  );
}
