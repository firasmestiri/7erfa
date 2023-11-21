// HomePageServices.js

import React from "react";

import iconsURL from "../../public/IconsLinks";
import "./HomePageServices.css";

export default function HomePageServices() {
  return (
    <div className="background-shape">
      <img className="service-image" src={iconsURL[0].url} />
      <h3 className="text-content">plumber</h3>
    </div>
  );
}
