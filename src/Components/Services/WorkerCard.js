import React from "react";
import { Button, Card } from "react-bootstrap";
import FixedRating from "../common/FixedRating"; // Adjust the path based on your file structure

export default function WorkerCard({ worker }) {
  const { serviceType, fees, rating, userId } = worker;
  const {location} = userId;

  return (
    <Card style={{ width: "18rem", margin: "20px" }}>
      <Card.Img variant="top" src="/Images/TestImages/3.png" alt={serviceType} />
      <Card.Body>
        <Card.Text>
          Location: {location}
          <br />
          Fees: {fees}
          <br />
          Rating: <FixedRating value={rating} />
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
