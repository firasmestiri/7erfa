import React from "react";
import HomePageSearchBar from "./HomePageSearchBar";
import HomePageServices from "./HomePageServices";
import { Row } from "react-bootstrap";

export default function MainHomePage() {
  return (
    <div>
      <HomePageSearchBar />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <HomePageServices />
        <HomePageServices />
        <HomePageServices />
        <HomePageServices />
        <HomePageServices />
      </div>
    </div>
  );
}
