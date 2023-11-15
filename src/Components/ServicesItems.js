import React from "react";
import { Card, ListGroup, Image, Button } from "react-bootstrap";
import imageUrls from "../public/ImagesLink";

export default function ServicesItems() {
  const handleButtonClick = () => {
    // Your logic for handling the button click goes here
    console.log("Button clicked!");
  };
  return (
    <div>
      <Card style={{ width: "18rem", border: "none", margin: "30px" }}>
        <Card.Img variant="top" src={imageUrls[1].url} />
        <Card.Body style={{ backgroundColor: "#e4ca79" }}>
          <Card.Title
            onClick={handleButtonClick}
            style={{
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            Card Title
          </Card.Title>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
}
