import React from "react";
import "./Button.css";

function Button({ value, className, onClick }) {
  return (
    <button className={`button ${className}`} onClick={onClick} >{value}
    </button>
  );
}

Button.defaultProps = {
  className: "button-default",
  onClick: () => {},
};

export default Button;
