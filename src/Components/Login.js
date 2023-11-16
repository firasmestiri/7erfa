import React from "react";
import { Form, Button } from "react-bootstrap";
export default function Login() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e4ca79",
        marginTop: "50px", // Adjust as needed for top margin
        marginRight: "350px", // Adjust as needed for right margin
        marginBottom: "50px", // Adjust as needed for bottom margin
        marginLeft: "350px", // Adjust as needed for left margin
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
        <h1>Login to Herfa</h1>
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
        </div>
        <h3 style={{ fontSize: "20px" }}>
          Forgot password?{" "}
          {/*make this a link to send you to the  Forgot password page */}{" "}
        </h3>{" "}
        <Button
          variant="secondary"
          size="lg"
          active
          style={{ width: "150px", margin: "30px" }}
        >
          Log In
        </Button>
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            justifySelf: "flex-start",
            flexDirection: "row",
          }}
        >
          <h3 style={{ fontSize: "20px" }}>No account?</h3>
          <h3 style={{ fontSize: "20px" }}>
            <a href="">Sign up</a>
          </h3>
        </div>
      </div>
    </div>
  );
}
