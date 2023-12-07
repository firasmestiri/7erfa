import React, { useState } from "react";
import FilterServices from "./FilterServices/FilterServices";
import ServicesData from "../../public/ServicesData";
import ServicesItems from "./ServicesItems";

export default function ServicesPage() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <FilterServices />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {ServicesData.map((service) => (
          <ServicesItems key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
