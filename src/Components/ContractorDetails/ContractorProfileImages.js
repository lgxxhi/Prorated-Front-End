import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ContractorProfileImages = ({ images }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleShowModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setShowModal(false);
  };

  return (
    <div>
      <Carousel>
        {images.map((image, index) => (
          <div key={index} onClick={() => handleShowModal(image)}>
            <img src={image.image_url} alt={`Job ${index + 1}`} />
          </div>
        ))}
      </Carousel>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <img src={selectedImage} alt="Selected Job" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ContractorProfileImages;
