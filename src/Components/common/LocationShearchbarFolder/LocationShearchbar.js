import React, { useState } from "react";
import {
  Form,
  Button,
  Image,
  Dropdown,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LocationShearchbar() {
  // search DropDown
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowDropdown(false);
    // You can perform additional actions when an item is selected
  };

  const items = ["Item 1", "Item 2", "Item 3", "khaled", "ahmed"];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().startsWith(searchTerm.toLowerCase())
  );
  //end of search DropDown
  return (
    <div>
      <InputGroup className="mb-3">
        <Form>
          <Form.Group controlId="formSearch">
            <Form.Label>select your Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search Location..."
              onFocus={() => setShowDropdown(true)}
              onBlur={() => setShowDropdown(false)}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form.Group>
        </Form>
        <Dropdown show={showDropdown}>
          <Dropdown.Toggle
            variant="outline-secondary"
            id="dropdown-basic"
            size="sm"
          ></Dropdown.Toggle>
          <Dropdown.Menu>
            {filteredItems.map((item, index) => (
              <Dropdown.Item key={index} onClick={() => handleItemClick(item)}>
                {item}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </InputGroup>
    </div>
  );
}
