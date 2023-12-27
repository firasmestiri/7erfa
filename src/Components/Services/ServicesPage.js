import React, { useEffect, useState } from "react";
import ServicesFilter from "./FilterServices/ServicesFilter";
import WorkerCard from "./WorkerCard";
import axios from "axios";
import { apiURL } from "../../apiConfig";
import { useParams } from "react-router-dom";

export default function ServicesPage() {
  let initialService = useParams().service;
  if (initialService == null) initialService = "";
  console.log(initialService);
  const [filter, setFilter] = useState({
    feeRange: {
      min: 10,
      max: 500,
    },
    fee: [10, 500],
    location: "",
    service: initialService,
    rating: "",
  });

  const [workers, setWorkers] = useState([]);
  const [filteredWorkers, setFilteredWorkers] = useState([]);
  const updateDisplayedWorkers = () => {
    console.log("Workers are:", workers);
    console.log("inspect",
      filter.service,
      workers[0]
    );
    const filtered = workers.filter(
      (worker) =>
        worker.userId.location.includes(filter.location) &&
        (filter.service === "" ||
          worker.services.includes(filter.service)) &&
        worker.fees >= filter.fee[0] &&
        worker.fees <= filter.fee[1]
    );
    setFilteredWorkers(filtered);
  };

  useEffect(() => {
    const url = apiURL + "/workers";
    axios
      .get(url)
      .then((response) => {
        setWorkers(response.data.workers);
        console.log(response.data.workers);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    updateDisplayedWorkers();
    console.log(filter);
  }, [workers, filter]);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <ServicesFilter filter={filter} setFilter={setFilter} />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {filteredWorkers.map((worker, index) => {
          return <WorkerCard key={index} worker={worker} />;
        })}
      </div>
    </div>
  );
}
