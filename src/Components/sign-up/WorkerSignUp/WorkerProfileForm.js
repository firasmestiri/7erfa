import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function WorkerProfileForm({ onProfileChange }) {
  const [profileData, setProfileData] = useState({
    description: "",
    portfolioFile: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfileData((prevData) => ({
      ...prevData,
      portfolioFile: file,
    }));
  };

  onProfileChange(profileData); // Pass the updated profile data to the parent
  return (
    <div>
      <h2>Worker Profile</h2>
      <Form>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={profileData.description}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="portfolioFile">
          <Form.Label>Upload Portfolio</Form.Label>
          <Form.Control
            type="file"
            accept=".pdf, .doc, .docx"
            name="portfolioFile"
            onChange={handleFileChange}
          />
        </Form.Group>
      </Form>
    </div>
  );
}
