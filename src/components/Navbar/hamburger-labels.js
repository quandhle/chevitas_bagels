import React, { Fragment } from "react";
import { MenuItem } from "@material-ui/core";
import { navbarLabels } from '../messages/navbar';
import { NavLink } from "react-router-dom";
import {withStyles} from "@material-ui/core/styles";

const HamburgerLabels = ({lang, handleClose}) => {
  return (
    <Fragment>
      {Object.keys(navbarLabels)
        .map(label => {
          const {[label]: {id}} = navbarLabels;

          return (
            <NavLink
              key={id}
              exact={id === 'home' ? true : false}
              to={`/${id === 'home' ? '' : id}`}
            >
              <MenuItem onClick={handleClose}>
                {navbarLabels[label].description[lang]}
              </MenuItem>
            </NavLink>
          )}
        )
      }
    </Fragment>
  )
}

export default HamburgerLabels
