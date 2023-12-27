import React, { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./FilterServices.css";
import ServiceDropdown from "../../common/searchBars/ServicesSearchBar/ServiceDropdown";
import LocationSearchbar from "../../common/searchBars/LocationShearchbarFolder/LocationShearchbar";
import HoverRating from "../../common/HoverRating";

export default function ServicesFilter({ filter, setFilter }) {
  const handleFeeChange = (fee) => {
    setFilter({...filter, fee})
  };
  const handleRatingChange = (rating) => {
    setFilter({...filter, rating})
  };
  const handleServiceChange = (service) => {
    setFilter({...filter, service})
  };
  const handleLocationChange = (location) => {
    setFilter({...filter, location})
  };

  return (
    <div className="containerfilter">
      <div className="filterBox">
        <div id="services">
          <ServiceDropdown
            onChange={handleServiceChange}
          />
        </div>
        <div id="location">
        <LocationSearchbar onChange={handleLocationChange} />

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
                step={5}
                value={filter.fee}
                min={filter.feeRange.min}
                max={filter.feeRange.max}
                onChange={handleFeeChange}
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
              <p>Min: {filter.feeRange.min}</p>
            </div>
            <div id="max price" className="filterItemprice">
              <p>Max: {filter.feeRange.max}</p>{" "}
            </div>
          </div>
        </div>
        <div id="rating">
          <HoverRating
            onChange={handleRatingChange}
          />
        </div>
      </div>
    </div>
  );
}