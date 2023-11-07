import React, { useState, useEffect } from "react";
import "./ServicesOffered.css";

function ServicesOffered(contractorData) {
  //   console.log(contractorData.contractorData.services_offerred);

  const [services, setServices] = useState(
    contractorData.contractorData.services_offerred
  );
  return (
    <div className="grid-container">
      {services.map((item) => {
        return <div className="grid-item">{item}</div>;
      })}
    </div>
  );
}

export default ServicesOffered;
