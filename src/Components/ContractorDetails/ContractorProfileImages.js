import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ContractorProfileImages.css";

const ContractorProfileImages = ({ images }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleShowModal = (index) => {
    setSelectedImageIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
    setShowModal(false);
  };

  return (
    <div>
      <Carousel>
        {images.map((image, index) => (
          <div
            className="resizeable-div"
            key={index}
            onClick={() => handleShowModal(index)}
          >
            <img
              className="responsive-image"
              src={image.image_url}
              alt={`Job ${index + 1}`}
            />
          </div>
        ))}
      </Carousel>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <img
              src={images[selectedImageIndex].image_url}
              alt="Selected Job"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ContractorProfileImages;
