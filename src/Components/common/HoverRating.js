import React, { useState } from "react";
import { MDBContainer, MDBRating } from "mdbreact";
export default function HoverRating() {
  const [basic] = useState([
    {
      tooltip: "Very Bad",
    },
    {
      tooltip: "Poor",
    },
    {
      tooltip: "Ok",
      choosed: true,
    },
    {
      tooltip: "Good",
    },
    {
      tooltip: "Excellent",
    },
  ]);

  return (
    <div>
      <MDBContainer>
        <MDBRating data={basic} />
      </MDBContainer>
    </div>
  );
}
