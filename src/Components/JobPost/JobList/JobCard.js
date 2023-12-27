// JobCard.js
import React from "react";

const JobCard = ({ job }) => {
  const defaultProfileImage =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";

  return (
    <div
      style={{
        backgroundColor: "rgb(228, 202, 121)",
        color: "white",
        padding: "16px",
        borderRadius: "10px", // Adjust the border radius to your preference
        marginBottom: "16px",
        display: "flex",
        alignItems: "flex-start",
        maxWidth: "400px", // Set the maximum width based on your preference
      }}
    >
      <div style={{ marginRight: "16px" }}>
        <img
          src={job.userProfilePic || defaultProfileImage}
          alt="Profile Pic"
          style={{
            width: "50px",
            height: "50px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      </div>
      <div>
        <h3>{job.jobTitle}</h3>
        <p>Type: {job.jobType}</p>
        <p>Description: {job.jobDescription}</p>
        <p>Address: {job.jobAddress}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default JobCard;
