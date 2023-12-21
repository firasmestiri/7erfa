import React, { useState } from "react";
import { Form } from "react-bootstrap";

const EditServices = ({ services, initialSelectedServices, onSave }) => {
  const [selectedServices, setSelectedServices] = useState(
    initialSelectedServices
  );

  const handleCheckboxChange = (service) => {
    setSelectedServices((prevSelectedServices) => {
      if (prevSelectedServices.some((s) => s.name === service)) {
        return prevSelectedServices.filter((s) => s.name !== service);
      } else {
        return [...prevSelectedServices, { name: service, isSelected: true }];
      }
    });
  };

  const handleSaveClick = () => {
    onSave(selectedServices);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h4>Edit Services</h4>
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
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSaveClick}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditServices;
