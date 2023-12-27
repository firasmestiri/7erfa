import React from "react";
import { Form, Dropdown, InputGroup, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import iconsURL from "../../../../public/IconsLinks";
import { useDropdown } from "../useDropdown";

export default function ServiceDropdown({onChange}) {
  const onSelect = (service) => {
    onChange(service);
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
    iconsURL.map((service) => service.description),
    onSelect
  );

  return (
    <div>
      <InputGroup className="mb-3">
        <Form>
          <Form.Group controlId="formSearch">
            <Form.Label>Select your Service</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search Service..."
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

      {/* Display label when the service is not available */}
      {notFound && <Alert variant="danger">Service is not available</Alert>}
      {/* Display clear selection button */}
      {selectedItem && (
        <button onClick={() => setSelectedItem(null)}>Clear Selection</button>
      )}
    </div>
  );
}
