import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function AvailabilityForm({ onAvailabilityChange }) {
  const [availability, setAvailability] = useState({
    startTime: "",
    endTime: "",
    workingDays: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAvailability((prevAvailability) => ({
      ...prevAvailability,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (day) => {
    const isDaySelected = availability.workingDays.includes(day);
    setAvailability((prevAvailability) => ({
      ...prevAvailability,
      workingDays: isDaySelected
        ? prevAvailability.workingDays.filter((d) => d !== day)
        : [...prevAvailability.workingDays, day],
    }));
  };

  onAvailabilityChange(availability);

  return (
    <div>
      <h2>Availability Schedule</h2>
      <Form>
        <Form.Group controlId="startTime">
          <Form.Label>Start Time</Form.Label>
          <Form.Control
            type="time"
            name="startTime"
            value={availability.startTime}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="endTime">
          <Form.Label>End Time</Form.Label>
          <Form.Control
            type="time"
            name="endTime"
            value={availability.endTime}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="workingDays">
          <Form.Label>Working Days</Form.Label>
          <div>
            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ].map((day) => (
              <Form.Check
                key={day}
                type="checkbox"
                id={`workingDayCheckbox-${day}`}
                label={day}
                checked={availability.workingDays.includes(day)}
                onChange={() => handleCheckboxChange(day)}
              />
            ))}
          </div>
        </Form.Group>
      </Form>
    </div>
  );
}
