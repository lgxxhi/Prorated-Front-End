import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./ServicesOffered.css";
import { Link } from "react-router-dom";

function ServicesOffered(contractorData) {
  const [services, setServices] = useState(
    contractorData.contractorData.services_offerred.filter(
      (item, index) => index < 8
    )
  );
  return (
    <div>
      <div className="grid-container">
        {services.map((item) => {
          return (
            <div key={uuidv4()} className="grid-item">
              <div className="item">{item}</div>
            </div>
          );
        })}
        {contractorData.contractorData.services_offerred.length > 8 ? (
          <div className="more">And More...</div>
        ) : null}
      </div>
    </div>
  );
}

export default ServicesOffered;
