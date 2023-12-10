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
        console.log(response.data.data);

        setSelectedContractor(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id, setSelectedContractor]);

  return (
    <div>
      {selectedContractor && (
        <div className="review-details-div">
          {/* <div className="reviews-container">
            <StarRating rating={selectedContractor.contractor.average_rating} />
            <span style={{ fontSize: "small" }} className="count-span">
              {selectedContractor.contractor.count
                ? `(${selectedContractor.contractor.count})`
                : 0}
            </span>
          </div> */}
          <div className="reviews-div">
            <Reviews
              contractor={selectedContractor}
              reviews={selectedContractor.reviews}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ContractorReviewDetails;