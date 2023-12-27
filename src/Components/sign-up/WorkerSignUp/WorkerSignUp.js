import React, { useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import { apiURL } from "../../../apiConfig";
import { Link, useNavigate } from "react-router-dom";
export default function WorkerSignUp({user}) {
  const navigate = useNavigate();

  const [formData, setformData] = useState({
    description: "",
    portfolioFile: null,
    services: [],
    workingDays: [],
    availability: {
      startTime: "",
      endTime: "",
    },
    fees: "",
  });

  const handleServicesChange = (event) => {
    const service = event.target.id;

    setformData((prevFormData) => {
      const isSelected = prevFormData.services.includes(service);
      return {
        ...prevFormData,
        services: isSelected
          ? prevFormData.services.filter((d) => d !== service)
          : [...prevFormData.services, service],
      };
    });
  };

  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const { id, value, type } = e.target;
    console.log(`Updating ${id} to ${value}`);
    setErrors([]);

    // For other inputs, update as usual
    if (e.target.type === "time") {
      setformData((prevFormData) => ({
        ...prevFormData,
        availability: { ...prevFormData.availability, [id]: value },
      }));
    } else {
      setformData((prevFormData) => ({
        ...prevFormData,
        [id]: value,
      }));
    }
  };

  const handleWorkingDayChange = (event) => {
    const day = event.target.id;

    setformData((prevFormData) => {
      const isDaySelected = prevFormData.workingDays.includes(day);
      return {
        ...prevFormData,
        workingDays: isDaySelected
          ? prevFormData.workingDays.filter((d) => d !== day)
          : [...prevFormData.workingDays, day],
      };
    });
  };

  const handleSubmit = (e) => {
    // Access your data here
    e.preventDefault();
    const data = {
      ...user,
      description: formData.description,
      portfolioFile: formData.portfolioFile,
      services: formData.services,
      workingDays: formData.workingDays,
      availability: {
        startTime: formData.availability.startTime,
        endTime: formData.availability.endTime,
      },
      fees: formData.fees,
    };
    console.log(data);
    axios.post(apiURL+"/workers/signup",data)
    .then((response)=>{
      navigate("/");
    }).catch((error)=>{
      console.log("ERROR",error);
    });
  

    console.log("FORM:", formData);
  };

  return (
    <div>
      <div className="login-container">
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* <ServicesCheck onServicesChange={handleServicesChange} />*/}
          <Form>
            <h2>Services</h2>
            {[
              "cleaning",
              "plumber",
              "electrician",
              "babysitter",
              "painting",
            ].map((service, index) => (
              <Form.Check
                key={index}
                type="checkbox"
                id={`${service}`}
                label={service}
                value={formData.services.includes(service)}
                //checked={selectedServices.some((s) => s.name === service)}
                onChange={handleServicesChange}
              />
            ))}
            <h2>Availability Schedule</h2>
            <Form.Group controlId="startTime">
              <Form.Label>Start Time</Form.Label>
              <Form.Control
                type="time"
                name="startTime"
                value={formData.availability.startTime}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="endTime">
              <Form.Label>End Time</Form.Label>
              <Form.Control
                type="time"
                name="endTime"
                value={formData.availability.endTime}
                onChange={handleChange}
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
                ].map((day, index) => (
                  <Form.Check
                    key={index}
                    type="checkbox"
                    id={`${day}`}
                    label={day}
                    checked={formData.workingDays.includes(day)}
                    onChange={handleWorkingDayChange}
                  />
                ))}
              </div>
            </Form.Group>
            <h2>Worker Profile</h2>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="fees">
              <Form.Label>Fees</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="fees"
                value={formData.fees}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="portfolioFile">
              <Form.Label>Upload Portfolio</Form.Label>
              <Form.Control
                type="file"
                accept=".pdf, .doc, .docx"
                name="portfolioFile"
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}
