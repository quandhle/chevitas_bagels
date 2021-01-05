import React from 'react';
import menuHeaderImage from '../images/menu-photo-1.jpg';
import HeroImage from "../Hero-Image";
import './menu.css';

export default function Menu() {
	const x = window.matchMedia('(min-width: 376px)');
	const heroStyles = {
		image: {
			backgroundImage: `url(${menuHeaderImage})`,
			backgroundPosition: "center",
			backgroundSize: "cover",
			height: "100vh",
			width: "100vw"
		},
		text: {
			color: "white",
			fontSize: "7rem",
			fontFamily: `'Courgette', cursive`,
			textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
		}
	}

	if (x.matches) {
		return (
			<>
				<HeroImage heroStyles={heroStyles} imageText="Menu"/>
				<div className="menu-wrapper">
					<div className="social-media-wrapper">
						<div className="social-media">
							<span className="material-icons">facebook</span>
							<span className="material-icons">facebook</span>
							<span className="material-icons">facebook</span>
						</div>
					</div>
					<main className="menu">
						<div>
							<h2>SANDWICHES</h2>
							<h2>SALADS</h2>
							<h2>BAGELS</h2>
						</div>
						<div className="vertical-divider"></div>
						<div>
							<h2>SMOOTHIES</h2>
							<h2>AGUA FRESCA</h2>
							<h2>SOUPS</h2>
							<h2>JUICES</h2>
							<h2>DRINKS</h2>
							<h2>DESSERTS</h2>
						</div>
					</main>
				</div>
			</>
		)
	} else {
			return (
			<>
					<HeroImage heroStyles={heroStyles} imageText="Menu"/>
				<div className="menu-wrapper">
					<div className="social-media-wrapper">
						<div className="social-media">
								<span className="material-icons">facebook</span>
								<span className="material-icons">facebook</span>
								<span className="material-icons">facebook</span>
						</div>
					</div>
					<main className="menu">
						<div className="menu-items">
							<h2>SANDWICHES</h2>
							<h2>SALADS</h2>
							<h2>BAGELS</h2>
						</div>
						<div className="menu-items">
							<h2>SMOOTHIES</h2>
							<h2>AGUA FRESCA</h2>
							<h2>SOUPS</h2>
							<h2>JUICES</h2>
							<h2>DRINKS</h2>
							<h2>DESSERTS</h2>
						</div>
					</main>
				</div>
			</>
		);
	}
}
