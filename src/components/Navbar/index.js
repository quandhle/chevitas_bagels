import "./navbar.css";
import {navbarLabels} from '../messages/navbar';
// import {messages} from '../messages/messages';
import {NavLink} from "react-router-dom";

const Navbar = ({lang}) => (
  <nav className="navbar">
    <ul>
      {/* {Object.keys(navbarLabels).map(label => <li onClick={() => setView(navbarLabels[label].id)}>{navbarLabels[label].message[lang]}</li>)} */}
      <NavLink exact to="/">
        <li>{navbarLabels.navBarHome.message[lang]}</li>
      </NavLink>
      <NavLink to="/menu">
        <li>{navbarLabels.navBarMenu.message[lang]}</li>
      </NavLink>
      <NavLink to="/our-story">
        <li>{navbarLabels.navBarOurStory.message[lang]}</li>
      </NavLink>
      <NavLink to="/contact-us">
        <li>{navbarLabels.navBarContactUs.message[lang]}</li>
      </NavLink>
      <NavLink to="/photos">
        <li>{navbarLabels.navBarPhotos.message[lang]}</li>
      </NavLink>
    </ul>
  </nav>
)

export default Navbar
