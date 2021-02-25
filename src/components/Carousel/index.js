import React from 'react'
import './carousel.css'
import Slider from "react-slick";
import acia from "../images/carousel-images/acai.jpeg"
import chorizo from "../images/carousel-images/chorizo.jpeg"
import clubSand from "../images/carousel-images/clubSand.jpeg"
import green from "../images/carousel-images/green.jpeg"
import melt from "../images/carousel-images/melt.jpeg"
import peach from "../images/carousel-images/peach.jpeg"


const Carousel = () => {
	var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		centerMode: true,
		centerPadding: "15px",
		responsive: [
        {
          breakpoint: 375,
          settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false, arrows: false, }
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 1, slidesToScroll: 2, infinite: false, arrows: false,}
        },
        {
          breakpoint: 1024,
          settings: { slidesToShow: 1, slidesToScroll: 3, infinite: false }
        }
      ]

  };
  return (
    <Slider {...settings}>
			<div class="img-div" id="ad1img">
					<img src={acia} />
			</div>
			<div class="img-div" id="ad1img">
					<img src={chorizo} />
			</div>
			<div class="img-div" id="ad1img">
					<img src={clubSand} />
			</div>
			<div class="img-div" id="ad1img">
					<img src={green} />
			</div>
			<div class="img-div" id="ad1img">
					<img src={melt} />
			</div>
			<div class="img-div" id="ad1img">
					<img src={peach} />
			</div>
    </Slider>
  );
};

export default Carousel;
