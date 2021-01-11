import React, {Fragment} from 'react';
import HeroImage from "../Hero-Image";
import iconDetails from "../images/icons";
import ChevitasIcon from "../Icon";
import {menuItemsArr} from '../messages/menu';
import MenuSection from './menuSection';
import './menu.css';

const Menu = ({
	classes,
}) => {
	const x = window.matchMedia('(min-width: 376px)');
	const {grubhub, doordash, call} = iconDetails;

	return (
		<Fragment>
			{x.matches && <HeroImage imageText="MENU" page="menu"/>}
			<div className="menu-wrapper">
				<div className="social-media-wrapper">
					<div className="social-media">
							<ChevitasIcon icon={grubhub}/>
							<ChevitasIcon icon={doordash} />
							<ChevitasIcon icon={call} />
					</div>
				</div>
				<main className="menu">
					<div>
						{menuItemsArr.map((type, i) => i < 3 && <MenuSection type={type}/>)}
					</div>
					{x.matches && <div className="vertical-divider"></div>}
					<div>
						{menuItemsArr.map((type, i) => i >= 3 && <MenuSection type={type}/>)}
					</div>
				</main>
			</div>
		</Fragment>

	)
}

export default Menu;
