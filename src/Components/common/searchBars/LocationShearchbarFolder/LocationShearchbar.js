import React from "react";
import { Form, Dropdown, InputGroup, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import tunis_neighborhoods from "../../../../public/LocationsSaves";
import { useDropdown } from "../useDropdown";

export default function LocationShearchbar() {
  const onSelect = (item) => {
    // You can perform additional actions when an item is selected
  };

  const {
    showDropdown,
    selectedItem,
    searchTerm,
    notFound,
    inputRef,
    handleItemClick,
    handleInputChange,
    handleBlur,
    filteredOptions,
    setShowDropdown,
    setSelectedItem,
  } = useDropdown(
    tunis_neighborhoods.map((neighborhood) => neighborhood.name),
    onSelect
  );

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
        {notFound ? null : (
          <Dropdown show={showDropdown}>
            <Dropdown.Toggle
              as="div"
              variant="outline-secondary"
              id="dropdown-basic"
              size="sm"
              style={{ backgroundImage: "none" }}
            ></Dropdown.Toggle>
            <Dropdown.Menu style={{ maxHeight: "200px", overflowY: "scroll" }}>
              {filteredOptions.map((option, index) => (
                <Dropdown.Item
                  key={index}
                  onClick={() => handleItemClick(option)}
                >
                  {option}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        )}
      </InputGroup>

      {/* Display label when the option is not available */}
      {notFound && <Alert variant="danger">Option is not available</Alert>}
      {/* Display clear selection button */}
      {selectedItem && (
        <button onClick={() => setSelectedItem(null)}>Clear Selection</button>
      )}
      {/* <h1>{selectedItem}</h1> */}
    </div>
  );
}
