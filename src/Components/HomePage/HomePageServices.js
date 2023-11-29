import React from "react";
import "./HomePageServices.css";
import { Link } from "react-router-dom";

export default function HomePageServices({ iconsURL }) {
  const handleClick = () => {
    // Handle click logic here
    console.log("Button clicked!");
  };
  return (
    <Link to="/ServicesPage" className="login_button">
      <div className="background-shape on-click" onClick={handleClick}>
        <img className="service-image" src={iconsURL.url} />
        <h3 className="text-content">{iconsURL.description}</h3>
      </div>
    </Link>
  );
}
