import React, { useState } from "react";
import "./SecondDropdown.css";

function SecondDropdown() {
  const [isActive, setIsActive] = useState(false);
  const [sortOption, setSortOption] = useState("Sort By: Recommended");

  return (
    <div className={!isActive ? "dropdown active" : "dropdown"}>
      <div className="dropdown-btn " onClick={() => setIsActive(!isActive)}>
        <div>{sortOption}</div>
        {isActive ? (
          <i class="bx bxs-up-arrow"></i>
        ) : (
          <i class="bx bxs-down-arrow"></i>
        )}
      </div>
      {isActive && (
        <div className="dropdown-content">
          <div
            className="dropdown-item"
            onClick={() => setSortOption("Sort by: Recommended")}
          >
            <i className="bx bx-star" style={{ color: "#171515" }}></i>
            <span className="option-text">Recommended</span>
          </div>
          <div
            className="dropdown-item"
            onClick={() => setSortOption("Sort by: Most Projects")}
          >
            <i
              className="bx bx-right-top-arrow-circle"
              style={{ color: "#e1306c" }}
            ></i>
            <span className="option-text">Most Projects</span>
          </div>
          <div
            className="dropdown-item"
            onClick={() => setSortOption("Sort by: Latest ")}
          >
            <i className="bx bx-up-arrow" style={{ color: "#0e76a8" }}></i>
            <span className="option-text">Latest</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default SecondDropdown;
