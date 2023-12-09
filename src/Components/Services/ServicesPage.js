import React, { useEffect, useState } from "react";
import FilterServices from "./FilterServices/FilterServices";
import WorkerCard from "./WorkerCard";
import axios from "axios"
import { apiURL } from "../../apiConfig";

export default function ServicesPage() {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    const url = apiURL + "/workers";
    console.log(url);
    axios.get(url).then(response => {
      setWorkers(response.data.workers);
      console.log(response.data.workers);
    }).catch(error => {
      console.log(error);
    })
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <FilterServices />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {workers.map((worker, index) => {
          return <WorkerCard key={index} worker={worker} />;
        })}
      </div>
    </div>
  );
}
