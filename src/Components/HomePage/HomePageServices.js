import React from "react";
import "./HomePageServices.css";

export default function HomePageServices({ iconsURL }) {
  return (
    <div className="background-shape">
      <img className="service-image" src={iconsURL.url} />
      <h3 className="text-content">{iconsURL.description}</h3>
    </div>
  );
}
