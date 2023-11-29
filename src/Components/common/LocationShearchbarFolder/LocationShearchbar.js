import React, { useState, useRef, useEffect } from "react";
import { Form, Dropdown, InputGroup, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import tunis_neighborhoods from "../../../public/LocationsSaves";

export default function LocationSearchbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [regionNotFound, setRegionNotFound] = useState(false);
  const inputRef = useRef(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowDropdown(false);
    setRegionNotFound(false);
    // You can perform additional actions when an item is selected
  };

  const handleInputChange = (e) => {
    const value = e.currentTarget.value;
    setSearchTerm(value);

    const filteredItems = tunis_neighborhoods.filter((neighborhood) =>
      neighborhood.name.toLowerCase().startsWith(value.toLowerCase())
    );

    // Check if the entered text is not in the tunis_neighborhoods
    setRegionNotFound(filteredItems.length === 0 && value.trim() !== "");
    // ... (update the state or take other actions)
  };

  const handleBlur = () => {
    // Delay hiding the dropdown to allow item selection
    setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };

  const filteredItems = tunis_neighborhoods.filter((neighborhood) =>
    neighborhood.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (showDropdown && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showDropdown]);

  return (
    <div>
      <InputGroup className="mb-3">
        <Form>
          <Form.Group controlId="formSearch">
            <Form.Label>Select your Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search Location..."
              onFocus={() => setShowDropdown(true)}
              onBlur={handleBlur}
              onChange={handleInputChange}
              value={selectedItem ? selectedItem : searchTerm}
              ref={inputRef}
            />
          </Form.Group>
        </Form>
        {regionNotFound ? null : (
          <Dropdown show={showDropdown}>
            <Dropdown.Toggle
              as="div"
              variant="outline-secondary"
              id="dropdown-basic"
              size="sm"
              style={{ backgroundImage: "none" }}
            ></Dropdown.Toggle>
            <Dropdown.Menu style={{ maxHeight: "200px", overflowY: "scroll" }}>
              {filteredItems.map((neighborhood, index) => (
                <Dropdown.Item
                  key={index}
                  onClick={() => handleItemClick(neighborhood.name)}
                >
                  {neighborhood.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        )}
      </InputGroup>

      {/* Display label when the region is not available */}
      {regionNotFound && (
        <Alert variant="danger">Region is not available</Alert>
      )}
      {/* Display clear selection button */}
      {selectedItem && (
        <button onClick={() => setSelectedItem(null)}>Clear Selection</button>
      )}
    </div>
  );
}
