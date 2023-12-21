// HomePageSearchBar.js
import React from "react";
import imageUrls from "../../public/ImagesLink";
import SearchBar from "./SearchBarFolder/SearchBar";
import "./HomePageSearchBar.css";

export default function HomePageSearchBar() {
  return (
    <div
      style={{ backgroundImage: `url(${imageUrls[5].url})` }}
      className="home-page-search-bar"
    >
      <div className="search-bar-container">
        <div className="title-container">
          <h1>Herfa</h1>
          <h3>Don't Do It Yourself</h3>
        </div>
        <div className="search-bar-wrapper">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
