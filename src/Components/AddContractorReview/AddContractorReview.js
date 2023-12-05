import React, { useContext, useEffect, useState } from "react";
import "./AddContractorReview.css";
import { useParams, useNavigate } from "react-router-dom";
import { ContractorsContext } from "../../context/ContractorsContext";
import { UsersContext } from "../../context/UsersContext";
import axios from "../../Api/axios";
import StarHoverRating from "../StarHoverRating/StarHoverRating";
import PhotoDragDrop from "../PhotoDragDrop/PhotoDragDrop";
import StarRating from "../StarRating/StarRating";

function AddContractorReview() {
  const { id } = useParams();
  const { selectedContractor, setSelectedContractor } =
    useContext(ContractorsContext);
  const { userData } = useContext(UsersContext);
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("");

  let navigate = useNavigate();

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
  }, []);
  console.log(userData);
  const handleSumbitReview = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`contractors/${id}/addReview`, {
        name,
        review: reviewText,
        rating,
      });
      navigate(`/profile/${id}`);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="review-details">
      {selectedContractor && (
        <div>
          <div style={{ marginBottom: "10px" }}>
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
              <h1 style={{ fontSize: "30px" }}>
                {selectedContractor.contractor.name}
              </h1>
              <button className="guidelines open-modal-btn">
                Review Guidelines
              </button>

              <div style={{ display: "flex", alignItems: "center" }}>
                <StarRating
                  rating={selectedContractor.contractor.average_rating}
                />
                <span style={{ fontSize: "small" }} className="count-span">
                  {selectedContractor.contractor.count
                    ? `(${selectedContractor.contractor.count})`
                    : 0}
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="hr-tag">
        <hr style={{ marginBottom: "10px" }} />
      </div>
      <form>
        <div>
          {/* <label htmlFor="name">Name</label> */}
          <input
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="Full name"
            type="text"
            required=""
          />
        </div>
        <div className="hr-tag">
          <hr style={{ marginTop: "10px", marginBottom: "9px" }} />
        </div>
        <div>
          <h5 style={{ marginBottom: "2px" }}>Overall Rating</h5>
          <StarHoverRating setRating={setRating} />
        </div>
        <div className="hr-tag">
          <hr style={{ marginTop: "13px", marginBottom: "10px" }} />
        </div>
        <div>
          <h5 style={{ marginBottom: "10px" }}>Add a Written Review</h5>
          <textarea
            className="review-input"
            style={{ width: "100%", height: "200px" }}
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            id="review"
          ></textarea>
        </div>
        <div>
          <h5>Add Photos</h5>
          <div>
            <PhotoDragDrop handleSumbitReview={handleSumbitReview} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddContractorReview;
