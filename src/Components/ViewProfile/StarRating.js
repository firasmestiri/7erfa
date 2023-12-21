import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./StarRating.css"; // Import the CSS file

const StarRating = ({ rating, readOnly }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="star-rating">
      {stars.map((star) => (
        <FontAwesomeIcon
          key={star}
          icon={faStar}
          className={`star ${star <= rating ? "filled" : ""} ${
            readOnly ? "read-only" : ""
          }`}
        />
      ))}
    </div>
  );
};

export default StarRating;
