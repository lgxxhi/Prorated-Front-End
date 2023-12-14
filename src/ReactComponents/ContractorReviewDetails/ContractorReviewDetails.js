import React, { useContext, useEffect } from "react";
import "./ContractorReviewDetails.scss";
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
        console.log(response.data.data);

        setSelectedContractor(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id, setSelectedContractor]);

  return (
    <div className="reviews-container">
      {selectedContractor && (
        <>
          <Reviews
            contractor={selectedContractor}
            reviews={selectedContractor.reviews}
          />
        </>
      )}
    </div>
  );
}

export default ContractorReviewDetails;
