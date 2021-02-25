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
		centerPadding: "1px",
		responsive: [
        {
          breakpoint: 375,
          settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false, arrows: false, }
        },
        {
          breakpoint: 858,
          settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false, arrows: false,}
        },
        {
          breakpoint: 1024,
          settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
        }
      ]

  };
  return (
    <Slider {...settings}>
			<div class="img-div" id="ad1img">
					<img src={acia} alt="acia"/>
			</div>
			<div class="img-div" id="ad1img">
					<img src={chorizo} alt="chorizo" />
			</div>
			<div class="img-div" id="ad1img">
					<img src={clubSand} alt="club sandwich" />
			</div>
			<div class="img-div" id="ad1img">
					<img src={green} alt="green soothie" />
			</div>
			<div class="img-div" id="ad1img">
					<img src={melt} alt="bagel melt" />
			</div>
			<div class="img-div" id="ad1img">
					<img src={peach} alt="peach smoothie" />
			</div>
    </Slider>
  );
};

export default Carousel;
