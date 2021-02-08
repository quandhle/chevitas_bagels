import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './carousel.css'
import sandwich1 from "../images/san1.jpg";
import sandwich2 from "../images/san2.jpg";
import bagelAndJuice from "../images/bagel-juice.jpg";
import rancheroBagel from "../images/ranchero-bagel.JPG";
import carousel1 from "../images/carousel1.JPG";
import carousel3 from "../images/carousel3.JPG";


const handleDragStart = e => e.preventDefault();

const items = [
	<img src={rancheroBagel} autoWidth onDragStart={handleDragStart} className="image1" alt="bagel and juice" />,
	<img src={bagelAndJuice} onDragStart={handleDragStart} className="image1" alt="bagel"/>,
	<img src={sandwich1} onDragStart={handleDragStart} className="image1" alt="sandwich" />,
	<img src={carousel3} onDragStart={handleDragStart} className="image1" alt="sandwich" />,
	<img src={sandwich2} onDragStart={handleDragStart} className="image1" alt="sandwich" />,
	<img src={carousel1} onDragStart={handleDragStart} className="image1" alt="" />
];

const Carousel = () => {
	return (
		<div className="carousel-wrapper">
			<AliceCarousel touchTracking swipeDelta mouseTracking items={items} />
		</div>
	)
};

export default Carousel;
