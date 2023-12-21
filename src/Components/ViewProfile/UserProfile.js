import React, { useEffect, useState } from "react";

const UserProfile = ({ user }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setUserData(user);
  }, [user]);

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "10px" }}>
      <h2>{userData ? userData.username : "Loading..."}</h2>
      {userData && (
        <div>
          <p>Email: {userData.email}</p>
          <p>Location: {userData.location}</p>
          <p>Role: {userData.role}</p>
          {userData.role === "worker" && (
            <div>
              <h3>Services</h3>
              <ul>
                {userData.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
              <h3>Availability Schedule</h3>
              <p>Start Time: {userData.availability.startTime}</p>
              <p>End Time: {userData.availability.endTime}</p>
              <p>
                Working Days: {userData.availability.workingDays.join(", ")}
              </p>
              <h3>Worker Profile</h3>
              <p>Description: {userData.workerProfile.description}</p>
              <p>Portfolio: {userData.workerProfile.portfolio}</p>
            </div>
          )}
          <h3>Rating: {userData.rating}</h3>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
