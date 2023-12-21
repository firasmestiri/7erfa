import React from "react";
import "./StarRating.css"; // Import the CSS file

const StarRating = ({ rating, readOnly }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="star-rating">
      {stars.map((star) => (
        <span
          key={star}
          className={`star ${star <= rating ? "filled" : ""} ${
            readOnly ? "read-only" : ""
          }`}
        >
          ⭐
        </span>
      ))}
    </div>
  );
};

export default StarRating;
