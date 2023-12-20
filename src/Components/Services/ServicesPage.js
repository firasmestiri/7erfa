// ServicesPage.js
import React, { useEffect, useState } from "react";
import FilterServices from "./FilterServices/FilterServices";
import WorkerCard from "./WorkerCard";
import axios from "axios";
import { apiURL } from "../../apiConfig";

export default function ServicesPage() {
  const [workers, setWorkers] = useState([]);
  const [filteredWorkers, setFilteredWorkers] = useState([]);

  /*useEffect(() => {
    const url = apiURL + "/workers";
    console.log(url);
    axios
      .get(url)
      .then((response) => {
        setWorkers(response.data.workers);
        setFilteredWorkers(response.data.workers); // Set initial filtered workers
        console.log(response.data.workers);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);*/

  useEffect(() => {
    // Mock data for testing purposes
    const mockWorkers = [
      {
        id: 1,
        userId: {
          location: "New York",
        },
        serviceType: "Plumbing",
        rating: 4.5,
        fees: 50,
      },
      {
        id: 2,
        userId: {
          location: "Los Angeles",
        },
        serviceType: "Electrician",
        rating: 3.8,
        fees: 60,
      },
      {
        id: 3,
        userId: {
          location: "Chicago",
        },
        serviceType: "Cleaning",
        rating: 4.2,
        fees: 40,
      },
      // Add more workers as needed
    ];

    setWorkers(mockWorkers);
  }, []);

  const handleFilter = (filteredWorkers) => {
    setFilteredWorkers(filteredWorkers);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <FilterServices workers={workers} onFilter={handleFilter} />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {filteredWorkers.map((worker, index) => {
          return <WorkerCard key={index} worker={worker} />;
        })}
      </div>
    </div>
  );
}
