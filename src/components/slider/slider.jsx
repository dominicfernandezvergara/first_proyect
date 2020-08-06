import React from "react";
import Slider from "react-slick";
import "./slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Github : https://github.com/akiran/react-slick
//Slick carousel API : https://react-slick.neostack.com/docs/api/#centerPadding

function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  };
  const sliderItem = (
    <img
      className="slider-img"
      src="https://mooala.wpengine.com/wp-content/uploads/2018/02/USDA-AlwaysOrganicWords.png"
      alt=""
    />
  );

  const sliderItem2 = (
    <img
      className="slider-img"
      src="https://i.pinimg.com/originals/06/55/80/065580938b36e4c049ec033745248216.jpg
          "
      alt=""
    />
  );

  return (
    <div className="slider">
      <Slider {...settings}>
        {sliderItem}
        {sliderItem2}
        {sliderItem2}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
