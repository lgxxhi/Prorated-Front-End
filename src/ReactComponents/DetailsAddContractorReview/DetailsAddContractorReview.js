import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ContractorsContext } from "../../context/ContractorsContext";
import { UsersContext } from "../../context/UsersContext";
import axios from "../../Api/axios";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";
import { TbTools } from "react-icons/tb";
import StarHoverRating from "../StarHoverRating/StarHoverRating";
import { getSingleUser } from "../../Api/usersAPI";
import PhotoDragDrop from "../../ReactComponents/PhotoDragDrop/PhotoDragDrop";

import "./DetailsAddContractorReview.scss";

function DetailsAddContractorReview() {
  const { id } = useParams();
  const { selectedContractor, setSelectedContractor } =
    useContext(ContractorsContext);
  const { userData } = useContext(UsersContext);

  let name;
  if (userData) {
    name = userData.username;
  }
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("");

  let navigate = useNavigate();
  console.log(name);

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
  console.log(userData);
  const handleSumbitReview = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `contractors/${id}/user/${userData.id}/addReview`,
        {
          name,
          review: reviewText,
          rating,
        }
      );
      //   navigate(`/profile/${id}`);
      navigate(0);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add_review_section">
      <div className="add_review_section__header">
        <div className="add_review_section__header__image">
          <img
            alt="#"
            src="https://i.pinimg.com/originals/ec/9b/4b/ec9b4bcd102e2db3050bc2f3b1eecc20.jpg"
          />
        </div>
        <div className="add_review_section__header__info">
          <div className="add_review_section__header__info__name">
            {/* {userData.first_name} {userData.last_name} */} {name}
          </div>

          <div className="add_review_section__header__info__items">
            <div className="add_review_section__header__info__items__icon">
              <MdOutlineLocationOn />
            </div>
            <div>Brooklyn</div>

            <div className="add_review_section__header__info__items__info_line">
              |
            </div>

            <div className="add_review_section__header__info__items__icon">
              <MdStarBorder />
            </div>

            <p>
              <strong>1</strong> Review
            </p>

            <div className="add_review_section__header__info__items__info_line">
              |
            </div>
            <div className="add_review_section__header__info__items__icon">
              <TbTools />
            </div>
            <p>
              <strong>1</strong> Project
            </p>
          </div>
        </div>
      </div>
      <form className="add_review_section__review_input_section">
        <div className="add_review_section__review_input_section__date">
          <h4>DATE OF WORK</h4>
          <input type="date" />
        </div>
        <div className="add_review_section__review_input_section__rating">
          <h4>RATING</h4>
          <div className="add_review_section__review_input_section__rating__stars">
            <StarHoverRating rating={rating} setRating={setRating} />
          </div>
        </div>
        <div className="add_review_section__review_input_section__photo_file">
          <h4>UPLOAD PHOTOS</h4>

          {/* <input type="file" /> */}
          {<PhotoDragDrop />}
        </div>
        <div className="add_review_section__review_input_section__review">
          <h4>REVIEW</h4>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            id="review"
          ></textarea>
        </div>
        <div className="add_review_section__review_input_section__submit">
          <button type="submit" onClick={handleSumbitReview}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default DetailsAddContractorReview;
