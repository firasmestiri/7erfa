import React, { useState } from "react";
import JobCard from "./JobCard";

const JobList = () => {
  const [jobs, setJobs] = useState([
    {
      jobTitle: "Software Engineer",
      jobType: "Full-time",
      jobDescription: "Developing web applications using React and Node.js",
      jobAddress: "Beb Saadoun",
      profilePicUrl: "user1_profile_pic.jpg", // Add the user's profile pic URL
    },
    // Add more job objects as needed
  ]);

  return (
    <div>
      <h2 style={{ color: "rgb(228, 202, 121)", fontSize: "32px" }}>
        Posted Jobs
      </h2>
      {jobs.length === 0 ? (
        <p style={{ color: "white" }}>No jobs posted yet.</p>
      ) : (
        <div>
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default JobList;
