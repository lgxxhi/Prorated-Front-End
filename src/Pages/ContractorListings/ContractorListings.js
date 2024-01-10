import React, { useState, useEffect } from "react";
import "./ContractorListings.css";
import ContractorCard from "./Components/ContractorCard";
import { motion, AnimatePresence } from "framer-motion";
import { getServicesResults } from "../../Api/Api";
import { useParams } from "react-router-dom";

function ContractorListings(props) {
  const [loading, setLoading] = useState(true);
  const [dataObj, setDataObj] = useState([]);

  const { q } = useParams();

  const fetchResults = async () => {
    try {
      const response = await getServicesResults(q);
      setDataObj(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container contractor-listings-route">
      <div className="main">
        <div className="main-header">
          <div className="left-main">
            <h2>
              <span className="results-for">Results For</span>
              <span className="service-found" style={{ color: "#4A6BFE" }}>
                {" "}
                {q}
              </span>
            </h2>
            <p>{dataObj.length} services available </p>
          </div>

          {/* <Filter
            services={services}
            setFiltered={setFiltered}
            activeService={activeService}
            setActiveService={setActiveService}
          /> */}
        </div>

        <motion.div layout className="main-content">
          <AnimatePresence>
            {dataObj.map((contractor) => {
              return (
                <ContractorCard key={contractor.id} contractor={contractor} />
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default ContractorListings;
