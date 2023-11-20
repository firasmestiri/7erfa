import React from "react";
import { useState } from "react";
export default function HomePageSearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    // Implement your search logic here, using the 'searchTerm' state
    console.log(`Searching for: ${searchTerm}`);
  };
  return (
    <div className="input-group">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <input
          type="search"
          id="form1"
          className="form-control"
          placeholder="Search"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <input
          type="search"
          id="form2"
          className="form-control"
          placeholder="Search"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
