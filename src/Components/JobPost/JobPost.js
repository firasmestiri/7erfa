import React, { useState } from "react";
import "./JobPost.css"

const JobPost = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobType, setJobType] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobAddress, setJobAddress] = useState("");
  const [photo, setPhoto] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleJobPost = () => {
    console.log("Job posted:", {
      jobTitle,
      jobType,
      jobDescription,
      jobAddress,
      photo,
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);

    // Use FileReader to read the contents of the file and set it as a preview image
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="job-post-container">
      <div className="login-form-container">
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2 style={{ color: "rgb(228, 202, 121)", fontSize: "32px" }}>
        Post a Job
      </h2>
      <form onSubmit={handleJobPost}>
        <div style={{ margin: "10px 0", textAlign: "center" }}>
          <label
            style={{
              color: "rgb(228, 202, 121)",
              fontSize: "18px",
              margin: "5px 0",
              display: "block",
            }}
          >
            Job Title:
          </label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            style={{
              color: "black",
              fontSize: "16px",
              width: "300px",
              padding: "8px",
            }}
          />
        </div>
        <br />
        <div style={{ margin: "10px 0", textAlign: "center" }}>
          <label
            style={{
              color: "rgb(228, 202, 121)",
              fontSize: "18px",
              margin: "5px 0",
              display: "block",
            }}
          >
            Job Type:
          </label>
          <input
            type="text"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            style={{
              color: "black",
              fontSize: "16px",
              width: "300px",
              padding: "8px",
            }}
          />
        </div>
        <br />
        <div style={{ margin: "10px 0", textAlign: "center" }}>
          <label
            style={{
              color: "rgb(228, 202, 121)",
              fontSize: "18px",
              margin: "5px 0",
              display: "block",
            }}
          >
            Job Description:
          </label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            style={{
              color: "black",
              fontSize: "16px",
              width: "300px",
              padding: "8px",
              minHeight: "100px",
            }}
          />
        </div>
        <br />
        <div style={{ margin: "10px 0", textAlign: "center" }}>
          <label
            style={{
              color: "rgb(228, 202, 121)",
              fontSize: "18px",
              margin: "5px 0",
              display: "block",
            }} // job address nrodoha dropdown hasb l addresses li hat'hom khaled f sign up
          >
            Job Address:
          </label>
          <input
            type="text"
            value={jobAddress}
            onChange={(e) => setJobAddress(e.target.value)}
            style={{
              color: "black",
              fontSize: "16px",
              width: "300px",
              padding: "8px",
            }}
          />
        </div>
        <br />
        <div style={{ margin: "10px 0", textAlign: "center" }}>
          <label
            style={{
              color: "rgb(228, 202, 121)",
              fontSize: "18px",
              margin: "5px 0",
              display: "block",
            }}
          >
            Upload a photo if needed:
          </label>
          <div style={{ margin: "10px 0", textAlign: "center" }}>
            <label
              htmlFor="custom-upload"
              style={{
                color: "rgb(228, 202, 121)",
                fontSize: "16px",
                padding: "8px",
                border: "1px solid rgb(228, 202, 121)",
                borderRadius: "4px",
                cursor: "pointer",
                backgroundColor: "transparent",
                display: "inline-block", // Ensure the label takes the full width of its content
              }}
            >
              {photo ? `File chosen: ${photo.name}` : "Choose a file"}
              <input
                id="custom-upload"
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                style={{
                  display: "none",
                }}
              />
            </label>
          </div>
        </div>
        {previewImage && (
          <div>
            <p>Preview:</p>
            <img
              src={previewImage}
              alt="Preview"
              style={{
                maxWidth: "100%",
                maxHeight: "200px",
                borderRadius: "4px",
              }}
            />
          </div>
        )}
        <br />
        <button type="submit" style={{ fontSize: "20px" }}>
          Post Job
        </button>
      </form>
      <br />
      <button
        onClick={() => console.log("View Profile clicked")} // needs linking with background :p
        style={{ fontSize: "20px" }}
      >
        View User's Profile
      </button>
    </div>
    </div>
    </div>
  );
};

export default JobPost;