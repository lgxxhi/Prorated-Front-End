import React, { useState } from "react";
import "./StarHoverRating.css";
import { FaStar } from "react-icons/fa";

function StarHoverRating({ rating, setRating }) {
  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
  };
  const styles = {
    button: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      width: 300,
      padding: 10,
    },
  };

  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  // const [ratingComment, setRatingComment] = useState("Select your rating");
  // const [finalRatingComment, setFinalRatingComment] = useState("");

  const handleClick = (value) => {
    setCurrentValue(value);
    setRating(`${value}`);
    // console.log(value);
    // if (value === 1) {
    //   setFinalRatingComment("Not good");
    // } else if (value === 2) {
    //   setFinalRatingComment("Could've been better");
    // } else if (value === 3) {
    //   setFinalRatingComment("OK");
    // } else if (value === 4) {
    //   setFinalRatingComment("Good");
    // } else if (value === 5) {
    //   setFinalRatingComment("Great");
    // }
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
    // if (value === 1) {
    //   setRatingComment("Not good");
    // } else if (value === 2) {
    //   setRatingComment("Could've been better");
    // } else if (value === 3) {
    //   setRatingComment("OK");
    // } else if (value === 4) {
    //   setRatingComment("Good");
    // } else if (value === 5) {
    //   setRatingComment("Great");
    // }
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
    // setRatingComment("Select your rating");
  };

  return (
    <div style={styles.container} className="hover-stars">
      <div className="star-hover-div" style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              style={{
                marginRight: 10,
                cursor: "pointer",
              }}
              color={
                (hoverValue || currentValue) > index
                  ? colors.orange
                  : colors.grey
              }
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
        <h4 style={{ display: "none" }}>{rating}</h4>
        {/* <p>{finalRatingComment ? finalRatingComment : ratingComment}</p> */}
      </div>
    </div>
  );
}

export default StarHoverRating;
