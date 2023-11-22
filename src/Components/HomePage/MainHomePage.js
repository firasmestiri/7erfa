import React from "react";
import HomePageSearchBar from "./HomePageSearchBar";
import HomePageServices from "./HomePageServices";
import { Row } from "react-bootstrap";
import iconsURL from "../../public/IconsLinks";

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
        {iconsURL.map((url) => (
          <HomePageServices key={url.id} iconsURL={url} />
        ))}
      </div>
    </div>
  );
}
