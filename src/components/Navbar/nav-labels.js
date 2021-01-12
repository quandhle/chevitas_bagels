import React, {Fragment} from "react";
import { navbarLabels } from '../messages/navbar';
import { NavLink } from "react-router-dom";

const NavLabels = ({lang}) => {
  return (
    <Fragment>
      {Object.keys(navbarLabels)
      .map(label => (
          <NavLink
            key={navbarLabels[label].id}
            exact={navbarLabels[label].id === 'home' ? true : false}
            to={`/${navbarLabels[label].id === 'home' ? '' : navbarLabels[label].id}`}
          >
            <li>
              {navbarLabels[label].description[lang]}
            </li>
          </NavLink>
      ))}
    </Fragment>
  )
}

export default NavLabels;
