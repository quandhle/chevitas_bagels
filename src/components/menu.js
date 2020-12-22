import React from 'react'
import './menu.css'

export default function Menu() {
	return (
		<>
			<nav className="navbar">
				<h1>This is the navbar</h1>
			</nav>
			<div className="social-media-wrapper">
				<div className="social-media">
					<span class="material-icons">facebook</span>
					<span class="material-icons">facebook</span>
					<span class="material-icons">facebook</span>
				</div>
			</div>
			<main className="menu">
				<div className="menu-items-left">
					<h2>SANDWICHES</h2>
					<h2>SALADS</h2>
					<h2>BAGELS</h2>
				</div>
				<div className="vertical-divider"></div>
				<div className="menu-items-right">
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
