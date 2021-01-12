import React, { Fragment } from "react";
import { MenuItem } from "@material-ui/core";
import { navbarLabels } from '../messages/navbar';
import { NavLink } from "react-router-dom";

const HamburgerLabels = ({lang, handleClose}) => {
  return (
    <Fragment>
      {Object.keys(navbarLabels)
        .map(label => (
          <MenuItem
            key={navbarLabels[label].id}
            onClick={handleClose}
          >
            <NavLink
              exact={navbarLabels[label].id === 'home' ? true : false}
              to={`/${navbarLabels[label].id === 'home' ? '' : navbarLabels[label].id}`}
            >
              <li onClose={handleClose}>
                {navbarLabels[label].description[lang]}
              </li>
            </NavLink>
          </MenuItem>))
      }
    </Fragment>
  )
}

export default HamburgerLabels
