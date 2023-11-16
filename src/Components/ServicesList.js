import React from "react";
import ServicesItems from "./ServicesItems";
export default function ServicesList() {
  return (
    <div>
      {" "}
      <h3 style={{ color: "#e4ca79", margin: "20px" }}>
        The easy, reliable way to take care of your home.
      </h3>{" "}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ServicesItems />
        <ServicesItems />
        <ServicesItems />
      </div>
    </div>
  );
}
