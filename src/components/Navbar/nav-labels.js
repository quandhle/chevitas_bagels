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
            <h1 className="nav-link">
              {navbarLabels[label].description[lang]}
            </h1>
          </NavLink>
      ))}
    </Fragment>
  )
}

export default NavLabels;
