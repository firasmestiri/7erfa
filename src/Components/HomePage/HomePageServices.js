import React from "react";
import "./HomePageServices.css";

export default function HomePageServices({ iconsURL }) {
  const handleClick = () => {
    // Handle click logic here
    console.log("Button clicked!");
  };
  return (
    <div className="background-shape on-click" onClick={handleClick}>
      <img className="service-image" src={iconsURL.url} />
      <h3 className="text-content">{iconsURL.description}</h3>
    </div>
  );
}
