import React from "react";
import { Form, Button, Image } from "react-bootstrap";
import imageUrls from "../public/ImagesLink";

export default function Signup() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e4ca79",
        marginTop: "50px", // Adjust as needed for top margin
        marginRight: "400px", // Adjust as needed for right margin
        marginBottom: "50px", // Adjust as needed for bottom margin
        marginLeft: "400px", // Adjust as needed for left margin
        padding: "20px", // Adjust as needed for inner padding
        // paddingTop: "20px",
        // paddingBottom: "20px",
        borderRadius: "10px", // Adjust as needed for border-radius
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1> Sign up to Herfa</h1>
        {/* input box code : */}
        <div style={{ width: "500px" }}>
          <Form
            style={{
              marginTop: "50px", // Adjust as needed for top margin
              marginBottom: "50px", // Adjust as needed for bottom margin
            }}
          >
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Enter your Phone Number" />
            </Form.Group>
          </Form>
          <Form
            style={{
              marginTop: "50px", // Adjust as needed for top margin
              marginBottom: "10px", // Adjust as needed for bottom margin
            }}
          >
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="text" placeholder="Enter your Password" />
            </Form.Group>
          </Form>
          <Form
            style={{
              marginTop: "50px", // Adjust as needed for top margin
              marginBottom: "10px", // Adjust as needed for bottom margin
            }}
          >
            <Form.Group controlId="formPassword">
              <Form.Label>Repeat Password</Form.Label>
              <Form.Control type="text" placeholder="Repeat your Password" />
            </Form.Group>
          </Form>
        </div>
        {/* button for Sign up */}
        <Button
          variant="secondary"
          size="lg"
          active
          style={{ width: "150px", margin: "30px" }}
        >
          Sign up
        </Button>
        <div style={{ display: "flex", gap: "10px" }}>
          {/* customer */}
          <div style={{ display: "flex" }}>
            <Image
              src={imageUrls[3].url}
              alt=""
              roundedCircle
              style={{
                width: "120px", // Set the width to a fixed value
                height: "150px", // Let the height adjust automatically to maintain aspect ratio
                objectFit: "cover",
                backgroundColor: "#D9D9D9",
              }}
            />
          </div>
          <div style={{ display: "flex" }}>
            <Image
              src={imageUrls[4].url}
              alt=""
              fluid
              rounded
              roundedCircle
              style={{
                width: "120px", // Set the width to a fixed value
                height: "150px", // Let the height adjust automatically to maintain aspect ratio
                objectFit: "cover",
                backgroundColor: "#D9D9D9",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
