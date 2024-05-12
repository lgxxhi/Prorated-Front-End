import "./ServiceCard.scss";
import React from "react";

function ServiceCard(props) {
  const { name, description, image } = props.data;
  const background = { backgroundImage: `url(${image})` };

  const handleNavigate = (e) => {
    e.preventDefault();
    props.navigate(`/listings/${name}`);
  };

  return (
    <section style={background} onClick={handleNavigate}>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
}

export { ServiceCard };
