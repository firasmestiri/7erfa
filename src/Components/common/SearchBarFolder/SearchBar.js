import React from "react";
import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar() {
  const [searchTerm1, setSearchTerm1] = useState("");

  const handleInputChange1 = (e) => {
    setSearchTerm1(e.target.value);
  };

  const [searchTerm2, setSearchTerm2] = useState("");

  const handleInputChange2 = (e) => {
    setSearchTerm2(e.target.value);
  };

  const handleSearch = () => {
    // Implement your search logic here, using the 'searchTerm' state
    console.log(`Searching for: ${searchTerm1}`);
  };
  return (
    <div
      className="input-group"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <input
          type="search"
          id="form1"
          className="form-control searchBar-style"
          placeholder="Search"
          value={searchTerm1}
          onChange={handleInputChange1}
        />
        <input
          type="search"
          id="form2"
          className="form-control  searchBar-style"
          placeholder="Search"
          value={searchTerm2}
          onChange={handleInputChange2}
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
