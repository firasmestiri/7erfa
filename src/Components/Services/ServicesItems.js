import React from "react";
import { Button, Card } from "react-bootstrap";
import FixedRating from "../common/FixedRating"; // Adjust the path based on your file structure

export default function ServicesItems({ service }) {
  const { img, location, serviceType, price, rating } = service;

  return (
    <Card style={{ width: "18rem", margin: "20px" }}>
      <Card.Img variant="top" src={img} alt={serviceType} />
      <Card.Body>
        <Card.Title>{serviceType}</Card.Title>
        <Card.Text>
          Location: {location}
          <br />
          Price: {price}
          <br />
          Rating: <FixedRating value={rating} />
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
