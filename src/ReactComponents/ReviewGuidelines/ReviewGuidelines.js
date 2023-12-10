import React from "react";
import "./ReviewGuidelines.css";

function ReviewGuidelines() {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="title-close-btn">
          <button> X </button>
        </div>
        <div className="title">
          <div>CONTINUE?</div>
        </div>
        <div className="body">
          <a>GO!</a>
        </div>

        <div className="guideline-footer">
          <button>Cancel</button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default ReviewGuidelines;
