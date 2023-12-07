import React, { useState, useRef, useEffect } from "react";
import { Form, Dropdown, InputGroup, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import iconsURL from "../../../public/IconsLinks";

export default function ServiceDropdown() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [serviceNotFound, setServiceNotFound] = useState(false);
  const inputRef = useRef(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setShowDropdown(false);
    setServiceNotFound(false);
    // You can perform additional actions when a service is selected
  };

  const handleInputChange = (e) => {
    const value = e.currentTarget.value;
    setSearchTerm(value);

    const filteredServices = iconsURL.filter((service) =>
      service.description.toLowerCase().startsWith(value.toLowerCase())
    );

    // Check if the entered text is not in the services
    setServiceNotFound(filteredServices.length === 0 && value.trim() !== "");
    // ... (update the state or take other actions)
  };

  const handleBlur = () => {
    // Delay hiding the dropdown to allow service selection
    setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };

  const filteredServices = iconsURL.filter((service) =>
    service.description.toLowerCase().startsWith(searchTerm.toLowerCase())
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
            <Form.Label>Select your Service</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search Service..."
              onFocus={() => setShowDropdown(true)}
              onBlur={handleBlur}
              onChange={handleInputChange}
              value={selectedService ? selectedService.description : searchTerm}
              ref={inputRef}
            />
          </Form.Group>
        </Form>
        {serviceNotFound ? null : (
          <Dropdown show={showDropdown}>
            <Dropdown.Toggle
              as="div"
              variant="outline-secondary"
              id="dropdown-basic"
              size="sm"
              style={{ backgroundImage: "none" }}
            ></Dropdown.Toggle>
            <Dropdown.Menu style={{ maxHeight: "200px", overflowY: "scroll" }}>
              {filteredServices.map((service, index) => (
                <Dropdown.Item
                  key={index}
                  onClick={() => handleServiceClick(service)}
                >
                  {service.description}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        )}
      </InputGroup>

      {/* Display label when the service is not available */}
      {serviceNotFound && (
        <Alert variant="danger">Service is not available</Alert>
      )}
      {/* Display clear selection button */}
      {selectedService && (
        <button onClick={() => setSelectedService(null)}>
          Clear Selection
        </button>
      )}
    </div>
  );
}
