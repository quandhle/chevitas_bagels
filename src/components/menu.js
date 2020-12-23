import React from 'react'
import './menu.css'
import Navbar from "./react-components/navbar"

export default function Menu({setView}) {
	const x = window.matchMedia('(min-width: 376px)');
	if (x.matches) {
		return (
			<>
				{/* <nav className="navbar">
					<h1>This is the navbar</h1>
				</nav> */}
				<Navbar setView={setView}/>
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
			</>
		)
	} else {
			return (
			<>
				{/* <nav className="navbar">
					<h1>This is the navbar</h1>
				</nav> */}
					<Navbar setView={setView}/>
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
			</>
		);
	}
}
