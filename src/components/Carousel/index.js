import React from 'react'
import './carousel.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = e => e.preventDefault();

const items = [
	<img src="/images/bagel-juice.jpg" autoWidth onDragStart={handleDragStart} className="image1" />,
	<img src="/images/ranchero-bagel.jpg" onDragStart={handleDragStart} className="image1" />,
	<img src="/images/san1.jpg" onDragStart={handleDragStart} className="image1" />,
	<img src="/images/carousel3.jpg" onDragStart={handleDragStart} className="image1" />,
	<img src="/images/san2.jpg" onDragStart={handleDragStart} className="image1" />,
	<img src="/images/carousel1.jpg" onDragStart={handleDragStart} className="image1" />
];

const Carousel = () => {
	return (
		<div className="carousel-wrapper">
			<AliceCarousel touchTracking swipeDelta mouseTracking items={items} />
		</div>
	)
};

export default Carousel;
