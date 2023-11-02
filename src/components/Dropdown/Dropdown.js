import React, { useState, useEffect } from "react";
import "./Dropdown.css";

function Dropdown() {
  const [sortOption, setSortOption] = useState("Sort By: ");
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className={!toggle ? "select-menu active" : "select-menu"}
      onClick={() => setToggle(!toggle)}
    >
      <div className="select-btn">
        <span className="sBtn-text">{sortOption}</span>
        <i class="bx bx-chevron-down"></i>
      </div>
      <ul className="options">
        <li
          className="option"
          onClick={() => setSortOption("Sort by: Recommended")}
        >
          <i class="bx bx-star" style={{ color: "#171515" }}></i>
          <span className="option-text">Recommended</span>
        </li>
        <li
          className="option"
          onClick={() => setSortOption("Sort by: Most Projects")}
        >
          <i
            class="bx bx-right-top-arrow-circle"
            style={{ color: "#e1306c" }}
          ></i>
          <span className="option-text">Most Projects</span>
        </li>
        <li
          className="option"
          onClick={() => setSortOption("Sort by: Latest ")}
        >
          <i class="bx bx-up-arrow" style={{ color: "#0e76a8" }}></i>
          <span className="option-text">Latest</span>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
