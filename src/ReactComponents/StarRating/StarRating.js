import React from "react";
import "./StarRating.css";

function StarRating({ rating }) {
  //   const stars = [];

  let rounded = Math.round(rating / 0.5) * 0.5;
  const stars = [];

  for (let i = rounded; i >= 1; i--) {
    stars.push(<i className="bx bxs-star" style={{ color: "gold" }}></i>);
    if (i === 1.5) {
      stars.push(
        <i className="bx bxs-star-half" style={{ color: "gold" }}></i>
      );
    }
  }
  for (let i = 5 - rounded; i >= 1; i--) {
    stars.push(<i className="bx bx-star" style={{ color: "gold" }}></i>);
  }

  console.log(rating);

  return <div>{stars}</div>;
}

export default StarRating;
