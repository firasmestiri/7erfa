import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

export default function FixedRating({ value }) {
  const starSize = 30; // Adjust the size according to your preference
  const starColor = "yellow"; // Set the color to yellow

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(value);
    const hasHalfStar = value - fullStars >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<BsStarFill key={i} size={starSize} color={starColor} />);
    }

    if (hasHalfStar) {
      stars.push(<BsStarHalf key="half" size={starSize} color={starColor} />);
    }

    const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <BsStar key={`empty-${i}`} size={starSize} color={starColor} />
      );
    }

    return stars;
  };

  return <div style={{ display: "flex" }}>{renderStars()}</div>;
}
