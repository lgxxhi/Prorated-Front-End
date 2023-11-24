import React, { useContext, useEffect } from "react";
import "./AddContractorReview.css";
import { useParams } from "react-router-dom";
import { ContractorsContext } from "../../context/ContractorsContext";
import axios from "../../Api/axios";
import Reviews from "../Reviews/Reviews";

function AddContractorReview() {
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
        <div>
          <div>
            <h5>Create Review</h5>
          </div>

          <div className="review-profile">
            <div className="image ">
              <img
                className="profile-img"
                src="https://picsum.photos/200/300"
                alt="#"
              />
            </div>
            <div className="review-contractor-details">
              <h1>{selectedContractor.name}</h1>
              <p className="guidelines">Review Guidelines</p>
            </div>
          </div>
        </div>
      )}
      <div className="hr-tag">
        <hr />
      </div>
      <div>
        <h5>Overall Rating</h5>
      </div>
    </div>
  );
}

export default AddContractorReview;
