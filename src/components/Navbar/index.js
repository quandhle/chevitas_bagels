import "./navbar.css";
import {messages} from '../messages/messages';
import {Link, NavLink} from "react-router-dom";

const Navbar = ({lang}) => (
  <nav className="navbar">
    <ul>
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
