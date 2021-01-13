import React, {Fragment} from 'react';
import HeroImage from "../Hero-Image";
import iconDetails from "../images/icons";
import ChevitasIcon from "../Icon";
import {menuItemsArr} from '../messages/menu';
import MenuSection from './menuSection';
import './menu.css';

const Menu = ({
	lang
}) => {
	const x = window.matchMedia('(min-width: 376px)');

	return (
		<Fragment>
			{x.matches && <HeroImage imageText="MENU" page="menu"/>}
			<div className="menu-wrapper">
				<main className="menu">
					<div>
						{menuItemsArr.map((type, i) => <MenuSection lang={lang} type={type}/>)}
					</div>
				</main>
				<div className="social-media-wrapper">
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
