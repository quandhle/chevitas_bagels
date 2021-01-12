import React, { Fragment } from "react";
import { MenuItem } from "@material-ui/core";
import { navbarLabels } from '../messages/navbar';
import { NavLink } from "react-router-dom";

const HamburgerLabels = ({lang, handleClose}) => {
  return (
    <Fragment>
      {Object.keys(navbarLabels)
        .map(label =>
          <NavLink
            key={navbarLabels[label].id}
            exact={navbarLabels[label].id === 'home' ? true : false}
            to={`/${navbarLabels[label].id === 'home' ? '' : navbarLabels[label].id}`}
          >
            <MenuItem onClick={handleClose}>
              {navbarLabels[label].description[lang]}
            </MenuItem>
          </NavLink>
        )
      }
    </Fragment>
  )
}

export default HamburgerLabels
