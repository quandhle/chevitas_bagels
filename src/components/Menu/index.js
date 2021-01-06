<<<<<<< HEAD
import React from 'react'
import './menu.css';
import {menuCategories} from '../messages/menu';

export default function Menu({lang}) {
=======
import React from 'react';
import menuHeaderImage from '../images/menu-photo-1.jpg';
import HeroImage from "../Hero-Image";
import icons from "../images/icons";
import './menu.css';

export default function Menu() {
>>>>>>> 5a3e37b4e9c5ea51e21665501f18dd3f67077aec
	const x = window.matchMedia('(min-width: 376px)');
	const {grubhub, doordash, call} = icons
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
							<a href="https://www.grubhub.com/restaurant/chevitas-juice-and-bagel-209-w-4th-st-santa-ana/1472683" target="_blank" rel="noreferrer">
								<img src={grubhub} alt="grubhub icon"></img>
								</a>
							<a href="https://www.doordash.com/store/chevita-s-juice---bagels-santa-ana-783486/en-US" target="_blank" rel="noreferrer">
								<img src={doordash} alt="doordash icon"></img>
								</a>
							<a href="tel:7148523650" target="_blank" rel="noreferrer">
								<img src={call} alt="call icon"></img>
								</a>
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
<<<<<<< HEAD
				<main className="menu">
					<div>
						{menuCategories.map((category, i) => i < 3 && <h2>{category.label[lang]} +</h2>)}
						{/* <h2>SANDWICHES</h2>
						<h2>SALADS</h2>
						<h2>BAGELS</h2> */}
					</div>
					<div className="vertical-divider"></div>
					<div>
						{menuCategories.map((category, i) => i >= 3 && <h2>{category.label[lang]} +</h2>)}
						{/* <h2>SMOOTHIES</h2>
						<h2>AGUA FRESCA</h2>
						<h2>SOUPS</h2>
						<h2>JUICES</h2>
						<h2>DRINKS</h2>
						<h2>DESSERTS</h2> */}
					</div>
				</main>
			</div>
=======
			</>
>>>>>>> 5a3e37b4e9c5ea51e21665501f18dd3f67077aec
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
<<<<<<< HEAD
				<main className="menu">
					<div className="menu-items">
						{menuCategories.map((category, i) => i < 3 && <h2>{category.label[lang]} +</h2>)}
					</div>
					<div className="menu-items">
						{menuCategories.map((category, i) => i >= 3 && <h2>{category.label[lang]} +</h2>)}
						{/* <h2>SMOOTHIES</h2>
						<h2>AGUA FRESCA</h2>
						<h2>SOUPS</h2>
						<h2>JUICES</h2>
						<h2>DRINKS</h2>
						<h2>DESSERTS</h2> */}
					</div>
				</main>
			</div>
=======
			</>
>>>>>>> 5a3e37b4e9c5ea51e21665501f18dd3f67077aec
		);
	}
}
