import React, { Fragment } from "react";
import { MenuItem } from "@material-ui/core";
import { navbarLabels } from '../messages/navbar';
import { NavLink } from "react-router-dom";

const HamburgerLabels = ({lang, handleClose}) => {
  return (
    <Fragment>
      {Object.keys(navbarLabels)
        .map(label => {
          const {[label]: {id, description}} = navbarLabels;

          return (
            <NavLink
              key={id}
              exact={id === 'home' ? true : false}
              to={`/${id === 'home' ? '' : id}`}
            >
              <MenuItem onClick={handleClose}>
                {description[lang]}
              </MenuItem>
            </NavLink>
          )}
        )
      }
    </Fragment>
  )
}

export default HamburgerLabels
