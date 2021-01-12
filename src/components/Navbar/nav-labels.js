import React, {Fragment} from "react";
import { navbarLabels } from '../messages/navbar';
import { NavLink } from "react-router-dom";

const NavLabels = ({lang}) => {
  return (
    <Fragment>
      {Object.keys(navbarLabels)
        .map(label => {
          const { [label]: { id } } = navbarLabels;

          return (
            <NavLink
              key={id}
              exact={id === 'home' ? true : false}
              to={`/${id === 'home' ? '' : id}`}
            >
              <h1 className="nav-link">
                {navbarLabels[label].description[lang]}
              </h1>
            </NavLink>
          )}
        )
      }
    </Fragment>
  )
}

export default NavLabels;
