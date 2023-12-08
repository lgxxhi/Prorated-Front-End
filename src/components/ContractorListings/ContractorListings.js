import React, { useState, useEffect, useContext } from "react";

import "./ContractorListings.css";
import Filter from "../Filter/Filter";
import ContractorCard from "../ContractorCard/ContractorCard";
import { motion, AnimatePresence } from "framer-motion";
import {
  getAllContractorsByServiceId,
  getServicesResults,
} from "../../Api/Api";
import axios from "../../Api/axios";
import { ContractorsContext } from "../../context/ContractorsContext";
import { useParams } from "react-router-dom";

function ContractorListings(props) {
  // const [services, setServices] = useState([]);
  // const [filtered, setFiltered] = useState([]);
  // const [activeService, setActiveService] = useState("");
  // const { contractors, setContractors } = useContext(ContractorsContext);
  const [loading, setLoading] = useState(true);
  const [dataObj, setDataObj] = useState([]);

  const { q } = useParams();
  console.log("THIS IS Q" + q);

  const fetchResults = async () => {
    try {
      const response = await getServicesResults(q);
      // setContractors(response);
      // console.log(contractors);
      console.log(response);
      setDataObj(response);
      setLoading(false);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // async function fetchResults() {
    //   try
    //     const response = await axios.get(`/contractors`);
    //     setContractors(response.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    fetchResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(services);
  // console.log(filtered);
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
              <span className="service-found"> {q}</span>
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
