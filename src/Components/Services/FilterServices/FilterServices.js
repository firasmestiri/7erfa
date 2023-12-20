import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Button } from "react-bootstrap";
import "./FilterServices.css";
import ServiceDropdown from "../../common/searchBars/ServicesSearchBar/ServiceDropdown";
import LocationSearchbar from "../../common/searchBars/LocationShearchbarFolder/LocationShearchbar";
import HoverRating from "../../common/HoverRating";
import WorkerCard from "../WorkerCard";

export default function FilterServices({ workers, onFilter }) {
  const [rangeInterval, setRangeInterval] = useState([10, 500]);
  const [range, setRange] = useState([rangeInterval[0], rangeInterval[1]]);
  const [locationFilter, setLocationFilter] = useState("");
  const [serviceFilter, setServiceFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [filteredWorkers, setFilteredWorkers] = useState(workers);

  const handleRangeChange = (value) => {
    setRange(value);
  };

  const handleFilter = () => {
    const filtered = workers.filter(
      (worker) =>
        worker.userId.location.includes(locationFilter) &&
        worker.serviceType.includes(serviceFilter) &&
        worker.rating >= ratingFilter &&
        worker.fees >= range[0] &&
        worker.fees <= range[1]
    );
    setFilteredWorkers(filtered); // Update filtered workers
    onFilter(filtered); // Pass filtered workers to the parent component
  };
  return (
    <div className="containerfilter">
      <div className="filterBox">
        <div id="services">
          <ServiceDropdown />
        </div>
        <div id="location">
          <LocationSearchbar />
        </div>
        <div>
          <div id="price">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Slider
                range
                value={range}
                max={rangeInterval[1]}
                min={rangeInterval[0]}
                onChange={handleRangeChange}
                style={{
                  transform: "scale(1, 2)",
                  marginBottom: "20px",
                  width: "90%",
                }}
              />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "150px" }}>
            <div id="min price" className="filterItemprice">
              <p>Min: {range[0]}</p>
            </div>
            <div id="max price" className="filterItemprice">
              <p>Max: {range[1]}</p>{" "}
            </div>
          </div>
        </div>
        <div id="rating">
          <HoverRating />
        </div>
        <Button variant="success">Filter</Button>
      </div>

      <div className="workersContainer">
        {filteredWorkers.map((worker) => (
          <WorkerCard key={worker.id} worker={worker} />
        ))}
      </div>
    </div>
  );
}
