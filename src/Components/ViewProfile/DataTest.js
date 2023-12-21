import React, { useState } from "react";
import UserProfile from "./UserProfile";
import "./ViewProfile.css";

export default function DataTest() {
  const [user, setUser] = useState({
    id: 1,
    username: "john_doe",
    email: "john@example.com",
    location: "Cityville",
    role: "user",
    rating: 2,
  });

  const [worker, setWorker] = useState({
    id: 2,
    username: "jane_worker",
    email: "jane@example.com",
    location: "Workertown",
    role: "worker",
    rating: 3,
    services: ["Cleaning", "Plumber", "Electrician", "Babysitter", "Painting"],
    availability: {
      startTime: "09:00",
      endTime: "17:00",
      workingDays: ["Monday", "Wednesday", "Friday"],
    },
    workerProfile: {
      description: "Experienced worker with a variety of skills.",
      portfolio: "Link to portfolio",
    },
  });
  return (
    <div className="custom-background">
      {/* <UserProfile user={user} /> */}
      <UserProfile user={worker} />
    </div>
  );
}
