import React, { useState } from "react";
import { Form, Dropdown, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import tunis_neighborhoods from "../../../public/LocationsSaves";

export default function LocationSearchbar() {
  // Search Dropdown
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowDropdown(false);
    // You can perform additional actions when an item is selected
  };

  const filteredItems = tunis_neighborhoods.filter((neighborhood) =>
    neighborhood.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );
  // End of Search Dropdown

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
              onBlur={() => setShowDropdown(false)}
              onChange={(e) => setSearchTerm(e.target.value)}
              value={selectedItem || ""}
            />
          </Form.Group>
        </Form>
        <Dropdown show={showDropdown}>
          <Dropdown.Toggle
            variant="outline-secondary"
            id="dropdown-basic"
            size="sm"
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
      </InputGroup>
    </div>
  );
}
