import React, { useContext, useEffect, useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";
import { TbTools } from "react-icons/tb";
import StarHoverRating from "../StarHoverRating/StarHoverRating";

import "./DetailsAddContractorReview.scss";

function DetailsAddContractorReview() {
  const [rating, setRating] = useState("");
  return (
    <div className="add_review_section">
      <div className="add_review_section__header">
        <div className="add_review_section__header__image">
          <img alt="#" src="https://picsum.photos/200/300" />
        </div>
        <div className="add_review_section__header__info">
          <div className="add_review_section__header__info__name">
            Malcom Murphy
          </div>

          <div className="add_review_section__header__info__items">
            <div className="add_review_section__header__info__items__icon">
              <MdOutlineLocationOn />
            </div>
            <div>New Jersey</div>

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
          <h3>DATE OF WORK</h3>
          <input type="date" />
        </div>
        <div className="add_review_section__review_input_section__rating">
          <h3>RATING</h3>
          <div className="add_review_section__review_input_section__rating__stars">
            <StarHoverRating setRating={setRating} />
          </div>
        </div>
        <div className="add_review_section__review_input_section__photo_file">
          <h3>UPLOAD PHOTOS</h3>

          <input type="file" />
        </div>
        <div className="add_review_section__review_input_section__review">
          <h3>REVIEW</h3>
          <textarea></textarea>
        </div>
        <div className="add_review_section__review_input_section__submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default DetailsAddContractorReview;
