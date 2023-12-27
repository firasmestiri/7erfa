import React, { useState } from "react";
import { Form } from "react-bootstrap";

export default function ServicesCheck({ onServicesChange }) {
  const [selectedServices, setSelectedServices] = useState([]);

  const services = [
    "cleaning",
    "plumber",
    "electrician",
    "babysitter",
    "painting",
    // Add more services as needed
  ];

  const handleCheckboxChange = (service) => {
    setSelectedServices((prevSelectedServices) => {
      if (prevSelectedServices.some((s) => s.name === service)) {
        return prevSelectedServices.filter((s) => s.name !== service);
      } else {
        return [...prevSelectedServices, { name: service, isSelected: true }];
      }
    });
  };

  // Remove the following line from here
  // onServicesChange(selectedServices);

  const notifyParent = () => {
    onServicesChange(selectedServices);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>Services</h2>
      <Form style={{ display: "flex", flexDirection: "row" }}>
        {services.map((service) => (
          <Form.Check
            key={service}
            type="checkbox"
            id={`serviceCheckbox-${service}`}
            label={service}
            checked={selectedServices.some((s) => s.name === service)}
            onChange={() => handleCheckboxChange(service)}
          />
        ))}
      </Form>
      {/* <div>
        {selectedServices.map((service) => (
          <p key={service.name}>
            {service.name}: {service.isSelected ? "True" : "False"}
          </p>
        ))}
      </div> */}
      {/* Notify parent when needed, for example on a button click */}
      <button onClick={notifyParent}>Notify Parent</button>
    </div>
  );
}
