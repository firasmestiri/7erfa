import React, { useState } from "react";
import ServicesCheck from "./ServicesCheck";
import AvailabilityForm from "./AvailabilityForm";
import WorkerProfileForm from "./WorkerProfileForm";

export default function WorkerSignUp() {
  const [services, setServices] = useState([]);
  const [availability, setAvailability] = useState({});
  const [profileData, setProfileData] = useState({});

  const handleServicesChange = (selectedServices) => {
    setServices(selectedServices);
  };

  const handleAvailabilityChange = (availabilityData) => {
    setAvailability(availabilityData);
  };

  const handleProfileChange = (profileFormData) => {
    setProfileData(profileFormData);
  };

  const handleSubmit = () => {
    // Access your data here
    console.log("Services:", services);
    console.log("Availability:", availability);
    console.log("Profile Data:", profileData);
  };

  return (
    <div className="login-container">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <ServicesCheck onServicesChange={handleServicesChange} />
        <AvailabilityForm onAvailabilityChange={handleAvailabilityChange} />
        <WorkerProfileForm onProfileChange={handleProfileChange} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
