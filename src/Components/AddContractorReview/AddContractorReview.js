import React, { useContext, useEffect, useState } from "react";
import "./AddContractorReview.css";
import { useParams, useNavigate } from "react-router-dom";
import { ContractorsContext } from "../../context/ContractorsContext";
import axios from "../../Api/axios";
import StarHoverRating from "../StarHoverRating/StarHoverRating";
import Reviews from "../Reviews/Reviews";

function AddContractorReview() {
  const { id } = useParams();
  const { selectedContractor, setSelectedContractor } =
    useContext(ContractorsContext);

  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("");

  let navigate = useNavigate();

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

  const handleSumbitReview = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`contractors/${id}/addReview`, {
        name,
        review: reviewText,
        rating,
      });
      navigate(0);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // const [reviewContent, setReviewContent] = useState({
  //   name: "",
  //   review: "",
  //   rating: "Rating",
  // });

  // console.log(reviewContent);

  // const handleChange = (e) => {
  //   setReviewContent({
  //     ...reviewContent,
  //     [e.target.id]: e.target.value,
  //   });
  // };

  // const handleSubmitReview = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const updatedReviewContent = {
  //       ...reviewContent,
  //     };

  //     setReviewContent(updatedReviewContent);

  //     const response = await axios.post(`/contractors/${id}/addReview`, {
  //       ...reviewContent,
  //     });
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="name"
            type="text"
          />
        </div>
        <div>
          <h5>Overall Rating</h5>
          <StarHoverRating setRating={setRating} />
        </div>
        <div>
          <label htmlFor="Review">Review</label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            id="review"
          ></textarea>
          <button type="submit" onClick={handleSumbitReview}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddContractorReview;
