import React, { useState } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

export default function HoverRating() {
  const [rating, setRating] = useState(0);

  const handleHover = (hoveredRating) => {
    setRating(hoveredRating);
  };

  const handleClick = (selectedRating) => {
    // You can handle click event here if needed
    console.log(`Selected Rating: ${selectedRating}`);
  };

  const handleClear = () => {
    setRating(0);
  };

  const starSize = 30; // Adjust the size according to your preference
  const starColor = "yellow"; // Set the color to yellow

  return (
    <div className="hover-rating">
      <div style={{ display: "flex" }}>
        {[1, 2, 3, 4, 5].map((star) => {
          let starComponent;

          if (star <= rating) {
            starComponent = (
              <BsStarFill
                key={star}
                size={starSize}
                color={starColor}
                onMouseEnter={() => handleHover(star)}
                onClick={() => handleClick(star)}
              />
            );
          } else if (star - 0.5 === rating) {
            starComponent = (
              <BsStarHalf
                key={star}
                size={starSize}
                color={starColor}
                onMouseEnter={() => handleHover(star - 0.5)}
                onClick={() => handleClick(star - 0.5)}
              />
            );
          } else {
            starComponent = (
              <BsStar
                key={star}
                size={starSize}
                color={starColor}
                onMouseEnter={() => handleHover(star)}
                onClick={() => handleClick(star)}
              />
            );
          }

          return starComponent;
        })}

        <button onClick={handleClear} style={{ marginLeft: "10px" }}>
          Clear Rating
        </button>
      </div>
      <div style={{ marginLeft: "10px", fontSize: "18px" }}>
        {rating > 0 ? `${rating} stars` : "Hover over the stars to rate"}
      </div>
    </div>
  );
}
