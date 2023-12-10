import React, { useEffect } from "react";

import "./Filter.css";

function Filter({ services, setFiltered, setActiveService, activeService }) {
  useEffect(() => {
    if (activeService === "") {
      setFiltered(services);
      return;
    }
    const filtered = services.filter((service) =>
      service.services_offerred.includes(activeService)
    );
    setFiltered(filtered);
  }, [activeService]);

  return (
    <div className="filter-container">
      <button onClick={() => setActiveService("")}>All</button>
      <button onClick={() => setActiveService("plumbing drain repair")}>
        Plumber
      </button>
      <button onClick={() => setActiveService("handyman cleaning")}>
        Handyman
      </button>
      <button onClick={() => setActiveService("lighting installation")}>
        Elecrtrician
      </button>
    </div>
  );
}

export default Filter;
