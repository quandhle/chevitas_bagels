import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './carousel.css'
import carouselImages from "../images/carousel-images"


const handleDragStart = e => e.preventDefault();

const items = carouselImages.map((image, index) => {
  return <img src={image.src} onDragStart={handleDragStart} className="image1" alt={image.alt} />
})

const Carousel = () => {
	return (
		<div className="carousel-wrapper">
			<AliceCarousel touchTracking swipeDelta mouseTracking items={items} />
		</div>
	)
};

export default Carousel;
