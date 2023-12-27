import React, { useState } from "react";
import { Form } from "react-bootstrap";

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

  // Avoid calling onProfileChange directly in the rendering process
  const notifyParent = () => {
    onProfileChange(profileData);
  };

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

      {/* Notify parent when needed, for example on a button click */}
      <button onClick={notifyParent}>Notify Parent</button>
    </div>
  );
}
