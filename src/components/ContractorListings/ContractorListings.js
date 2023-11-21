import React, { useState, useEffect } from "react";

import "./ContractorListings.css";
import Filter from "../Filter/Filter";
import ContractorCard from "../ContractorCard/ContractorCard";
import { motion, AnimatePresence } from "framer-motion";
import {
  getAllContractorsByServiceId,
  getServicesResults,
} from "../../Api/Api";

function ContractorListings(contractorData) {
  const [services, setServices] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeService, setActiveService] = useState("");

  const [dataObj, setDataObj] = useState([]);
  const urlParams = new URLSearchParams(window.location.search);

  const fetchResults = async () => {
    try {
      const result = await getServicesResults(urlParams.get("q"));
      setDataObj(result[0]);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setServices(contractorData.contractorData);
    setFiltered(contractorData.contractorData);
    fetchResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(services);
  // console.log(filtered);

  return (
    <div className="container contractor-listings-route">
      <div className="main">
        <div className="main-header">
          <div className="left-main">
            <h2>
              <span className="results-for">Results For</span>
              <span className="service-found"> Contractors</span>
            </h2>
            <p>{filtered.length} services available </p>
          </div>

          <Filter
            services={services}
            setFiltered={setFiltered}
            activeService={activeService}
            setActiveService={setActiveService}
          />
        </div>

        <motion.div layout className="main-content">
          <AnimatePresence>
            {filtered.map((service) => {
              return <ContractorCard key={service.id} service={service} />;
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default ContractorListings;
