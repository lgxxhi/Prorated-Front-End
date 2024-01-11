import React, { useState, useRef } from "react";
import "./PhotoDragDrop.css";

function PhotoDragDrop({ handleSumbitReview }) {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  function selectFiles() {
    fileInputRef.current.click();
  }

  function onFilesSelect(event) {
    const files = event.target.files;

    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  }

  function deleteImage(index) {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  }

  function onDragOver(event) {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = "copy";
  }

  function onDragLeave(event) {
    event.preventDefault();
    setIsDragging(false);
  }

  function onDrop(event) {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  }

  for (let i = 0; i < images.length; i++) {
    console.log(images[i].url);
  }

  return (
    <div className="card">
      <div
        className="drag-area"
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        {isDragging ? (
          <span className="select">Drop Images Here</span>
        ) : (
          <div className="div">
            Drag & Drop image here or{" "}
            <span className="select" role="button" onClick={selectFiles}>
              Browse
            </span>
          </div>
        )}

        <input
          name="file"
          type="file"
          className="file"
          multiple
          ref={fileInputRef}
          onChange={onFilesSelect}
        ></input>
      </div>
      <div className="container">
        {images.map((images, index) => (
          <div className="image" key={index}>
            <span className="delete" onClick={() => deleteImage(index)}>
              &times;
            </span>
            <img src={images.url} alt={images.name} />
          </div>
        ))}
      </div>
      {/* <div
        style={{ display: "flex", justifyContent: "center", marginTop: "25px" }}
      >
        <button type="submit" onClick={handleSumbitReview}>
          Submit
        </button>
      </div> */}
    </div>
  );
}

export default PhotoDragDrop;
