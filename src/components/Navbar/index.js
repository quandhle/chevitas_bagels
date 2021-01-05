import "./navbar.css";
// import {navbarLabels} from '../messages/navbar';
import {messages} from '../messages/messages';
import {NavLink} from "react-router-dom";

const Navbar = ({lang}) => (
  <nav className="navbar">
    <ul>
      {/* {Object.keys(navbarLabels).map(label => <li onClick={() => setView(navbarLabels[label].id)}>{navbarLabels[label].message[lang]}</li>)} */}
      <NavLink exact to="/">
        <li>{messages.navBarHome.message[lang]}</li>
      </NavLink>
      <NavLink to="/menu">
        <li>{messages.navBarMenu.message[lang]}</li>
      </NavLink>
      <NavLink to="/our-story">
        <li>{messages.navBarOurStory.message[lang]}</li>
      </NavLink>
      <NavLink to="/contact-us">
        <li>{messages.navBarContactUs.message[lang]}</li>
      </NavLink>
      <NavLink to="/photos">
        <li>{messages.navBarPhotos.message[lang]}</li>
      </NavLink>
    </ul>
  </nav>
)

export default Navbar
