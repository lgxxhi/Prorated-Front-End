import React from "react";
import { MdOutlineEditNote } from "react-icons/md";
import "./EditPicModal.css";

function EditPicModal({ profilePic, handleTextChange }) {
  const picModal = document.getElementById("myModal");

  function modalOpen(e) {
    e.preventDefault();
    picModal.style.display = "block";
  }

  function modalClose() {
    picModal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target === picModal) {
      picModal.style.display = "none";
    }
  };

  return (
    <div className="pencil">
      <button onClick={modalOpen} id="myBtn">
        <MdOutlineEditNote /> Edit Photo
      </button>

      <div id="myModal" className="editPicMod">
        <div className="picModContent">
          <button onClick={modalClose} className="close">
            &times;
          </button>
          <h4 className="editProfilePic">Edit Profile Picture</h4>
          <input
            className="editPic"
            type="text"
            id="profile_picture"
            name="profile_picture"
            value={profilePic}
            onChange={handleTextChange}
          />
        </div>
      </div>
    </div>
  );
}

export default EditPicModal;
