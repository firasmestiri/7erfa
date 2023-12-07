import React from "react";
import { useState } from "react";
import "./SearchBar.css";
import ServiceDropdown from "../../common/searchBars/ServicesSearchBar/ServiceDropdown";
import LocationSearchbar from "../../common/searchBars/LocationShearchbarFolder/LocationShearchbar";

export default function SearchBar() {
  const handleSearch = () => {
    // Implement your search logic here, using the 'searchTerm' state
  };
  return (
    <div
      className="input-group"
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <ServiceDropdown />
      <LocationSearchbar />
      <button type="button" className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
