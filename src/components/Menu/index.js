import React, {Fragment} from 'react';
import HeroImage from "../Hero-Image";
import iconDetails from "../images/icons";
import ChevitasIcon from "../Icon";
import {menuItemsArr} from '../messages/menu';
import MenuSection from './menuSection';
import './menu.css';
import { orderOnlineMessage } from '../messages/homePage';

const Menu = ({
	lang
}) => {
	const x = window.matchMedia('(min-width: 376px)');

	return (
		<Fragment>
			{x.matches && <HeroImage page="menu"/>}
			<div className="menu-wrapper">
				<h1>Menu</h1>
				<main className="menu">
					<div>
						{menuItemsArr.map((type, i) => <MenuSection lang={lang} type={type}/>)}
					</div>
				</main>
				<div className="social-media-wrapper">
					<h2>{orderOnlineMessage.message[lang]}</h2>
					{Object.keys(orderOnlineMessage).map((orderMessage, i) => i !== 0 && <p key={i}>{orderOnlineMessage[orderMessage].message[lang]}</p>)}
					<div className="social-media">
						{Object.keys(iconDetails).map((icon, i) => (
							i < 3 && <ChevitasIcon icon={iconDetails[icon]}/>
						))}
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default Menu;
