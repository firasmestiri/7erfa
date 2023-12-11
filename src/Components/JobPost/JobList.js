import React, { useState } from "react";

const JobList = () => {
  const [jobs, setJobs] = useState([
    {
      jobTitle: "Software Engineer",
      jobType: "Full-time",
      jobDescription: "Developing web applications using React and Node.js",
      jobAddress: "Beb Saadoun",
    },
  ]);

  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobSelect = (job) => {
    setSelectedJob((prevSelectedJob) =>
      JSON.stringify(prevSelectedJob) === JSON.stringify(job) ? null : job
    );
  };

  const handleAcceptJob = () => {
    //back
    console.log(`Job accepted: ${selectedJob.jobTitle}`);
  };

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
            <div key={index} style={{ marginBottom: "20px", color: "white" }}>
              <label
                onClick={() => handleJobSelect(job)}
                style={{
                  color: "rgb(228, 202, 121)",
                  fontSize: "16px",
                  padding: "8px",
                  border: "1px solid rgb(228, 202, 121)",
                  borderRadius: "4px",
                  cursor: "pointer",
                  backgroundColor: "transparent",
                  display: "inline-block",
                  marginBottom: "10px",
                }}
              >
                {job.jobTitle}
              </label>
              {selectedJob &&
                JSON.stringify(selectedJob) === JSON.stringify(job) && (
                  <div>
                    <strong>{selectedJob.jobTitle}</strong>
                    <p>Type: {selectedJob.jobType}</p>
                    <p>Description: {selectedJob.jobDescription}</p>
                    <p>Address: {selectedJob.jobAddress}</p>
                    <button onClick={handleAcceptJob}>Accept Job</button>
                    {/*more detail*/}
                  </div>
                )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobList;
