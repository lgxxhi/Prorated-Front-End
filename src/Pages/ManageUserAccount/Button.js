import React from "react";
import "./Button.css";

function Button({ value, className, onHandleClick, id }) {
  return (
    <button
      className={`button ${className}`}
      onClick={() => onHandleClick(id, value)}
    >
      {value}
    </button>
  );
}

Button.defaultProps = {
  className: "button-default",
  onHandleClick: () => {},
};

export default Button;
