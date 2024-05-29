import React, { useState } from 'react';
import PropTypes from 'prop-types';
import arrowLeft from "../assets/images/arrowLeft.png";
import arrowRight from "../assets/images/arrowRight.png";


const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
  };

  const currentPicture = pictures[currentIndex];
  const numPictures = pictures.length;
  const shouldShowArrows = numPictures > 1;
  const shouldShowIndicator = numPictures > 1;

  return (
    <div className="slider-container">
      {shouldShowArrows && (
        <>
          <div className="arrow prev" onClick={handlePrevClick}>
            <img src={arrowLeft} alt="Previous" />
          </div>
          <div className="arrow next" onClick={handleNextClick}>
            <img src={arrowRight} alt="Next" />
          </div>
        </>
      )}
      <div className="slider-content">
        <img src={currentPicture} alt={`slide-${currentIndex + 1}`} className="slider-image" />
      </div>
      {shouldShowIndicator && (
        <div className="slide-indicator">{`${currentIndex + 1}/${pictures.length}`}</div>
      )}
    </div>
  );
};

Slideshow.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slideshow;