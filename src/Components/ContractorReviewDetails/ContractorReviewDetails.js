import React, { useContext, useEffect } from "react";
import "./ContractorReviewDetails.css";
import { useParams } from "react-router-dom";
import { ContractorsContext } from "../../context/ContractorsContext";
import axios from "../../Api/axios";
import Reviews from "../Reviews/Reviews";

function ContractorReviewDetails() {
  const { id } = useParams();
  const { selectedContractor, setSelectedContractor } =
    useContext(ContractorsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/contractors/${id}`);
        console.log(response.data);
        setSelectedContractor(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="review-details">
      {selectedContractor && (
        <>
          <h1>{selectedContractor.name}</h1>
        </>
      )}
    </div>
  );
}

export default ContractorReviewDetails;
