import "./navbar.css";
import {navbarLabels} from '../messages/navbar';
import {NavLink} from "react-router-dom";

const Navbar = ({lang}) => (
  <nav className="navbar">
    <ul>
      {Object.keys(navbarLabels)
        .map(label => (
          <NavLink
            exact={navbarLabels[label].id == 'home' ? true : false}
            to={`/${navbarLabels[label].id == 'home' ? '' : navbarLabels[label].id}`}
          >
            <li>{navbarLabels[label].description[lang]}</li>
          </NavLink>
      ))}
    </ul>
  </nav>
)

export default Navbar
