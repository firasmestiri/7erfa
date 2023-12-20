import React, { useState } from "react";
import "./RequestServicePage.css";
import { Form, Dropdown, Button } from "react-bootstrap";
import LocationShearchbar from "../common/searchBars/LocationShearchbarFolder/LocationShearchbar";
import ServiceDropdown from "../common/searchBars/ServicesSearchBar/ServiceDropdown";

export default function RequestServicePage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can use formData in your desired way, such as sending it to a server or using it in your application.
    console.log("Form data submitted:", formData);
  };

  const [selectedAction, setSelectedAction] = useState("select duration");
  const handleActionSelect = (action) => {
    setSelectedAction(action);
    // You can also perform additional actions here, such as saving the selected action to state or elsewhere.
  };

  const [selectedDate, setSelectedDate] = useState("");
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="request-container">
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Service Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title..."
              value={formData.title}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter description..."
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {selectedAction}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleActionSelect("less than 1h")}>
              less than 1h
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleActionSelect("between 1h and 3h")}
            >
              between 1h and 3h
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleActionSelect("more than 3h")}>
              more than 3h
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="box-margin">
          <label htmlFor="datePicker">Select a date:</label>
          <input
            type="date"
            id="datePicker"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>
        <LocationShearchbar className="box-margin" />
        <ServiceDropdown className="box-margin" />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </div>
  );
}
