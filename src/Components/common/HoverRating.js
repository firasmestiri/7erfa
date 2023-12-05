import React, { useState } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import "./HoverRating.css"; // You can create a CSS file for styling

const HoverRating = () => {
  const [rating, setRating] = useState(0);

  const handleHover = (hoveredRating) => {
    setRating(hoveredRating);
  };

  const handleClick = (selectedRating) => {
    // You can handle click event here if needed
    console.log(`Selected Rating: ${selectedRating}`);
  };

  return (
    <div className="hover-rating">
      {[1, 2, 3, 4, 5].map((star) => {
        let starComponent;

        if (star <= rating) {
          starComponent = (
            <BsStarFill
              key={star}
              onMouseEnter={() => handleHover(star)}
              onClick={() => handleClick(star)}
            />
          );
        } else if (star - 0.5 === rating) {
          starComponent = (
            <BsStarHalf
              key={star}
              onMouseEnter={() => handleHover(star - 0.5)}
              onClick={() => handleClick(star - 0.5)}
            />
          );
        } else {
          starComponent = (
            <BsStar
              key={star}
              onMouseEnter={() => handleHover(star)}
              onClick={() => handleClick(star)}
            />
          );
        }

        return starComponent;
      })}
    </div>
  );
};

export default HoverRating;
