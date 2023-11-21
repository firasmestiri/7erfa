import React from "react";
import imageUrls from "../../public/ImagesLink";
import SearchBar from "../SearchBar";

export default function HomePageSearchBar() {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrls[5].url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minBlockSize: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ margin: "auto", textAlign: "center", color: "white" }}>
        <div>
          <h1>eaaeae</h1>
          <h3>teaeaeaeext2</h3>
        </div>
        <SearchBar />
      </div>
    </div>
  );
}
