import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowLeft from "../assets/images/arrowLeft.png";
import arrowRight from "../assets/images/arrowRight.png";

const Slideshow = ({ pictures }) => {
  
  const NextArrow = ({ onClick }) => (
    <div className="arrow next" onClick={onClick}>
      <img src={arrowRight} alt="Next" />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="arrow prev" onClick={onClick}>
      <img src={arrowLeft} alt="Previous" />
    </div>
  );

  const showArrows = pictures.length > 1;

  
  const settings = {
    dots: showArrows,
    infinite: showArrows,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: showArrows ? <NextArrow /> : null,
    prevArrow: showArrows ? <PrevArrow /> : null
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {pictures.map((pic, index) => (
          <div key={index}>
            <img src={pic} alt={`slide-${index + 1}`} className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

Slideshow.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slideshow;