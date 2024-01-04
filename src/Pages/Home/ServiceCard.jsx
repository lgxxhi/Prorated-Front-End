import "./ServiceCard.scss";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ServiceCard({ data }) {
  const { name, description, image } = data;
  const background = { backgroundImage: `url(${image})` };
  const navigate = useNavigate();

  function navigateToService(e) {
    e.preventDefault();
    console.log(name);
    navigate(`/listings/${name}`);
  }

  return (
    <div
      className="serviceCard"
      style={background}
      onClick={(e) => navigateToService(e)}
    >
      <div className="serviceCard__top">
        <h2 className="serviceCard__top__title">{name}</h2>
        <p className="serviceCard__top__info">{description}</p>
      </div>
    </div>
  );
}
