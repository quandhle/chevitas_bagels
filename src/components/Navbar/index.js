import "./navbar.css";
import {messages} from '../messages/messages';
import {Link} from "react-router-dom";

const Navbar = ({
  setView,
  lang = "en"
}) => (
  <nav className="navbar">
    <ul>
      {/* <li onClick={() => setView("home")}>{messages.navBarHome.message[lang]}</li>
      <li onClick={() => setView("menu")}>{messages.navBarMenu.message[lang]}</li>
      <li onClick={() => setView("ourStory")}>{messages.navBarOurStory.message[lang]}</li>
      <li onClick={() => setView("contactUs")}>{messages.navBarContactUs.message[lang]}</li>
      <li onClick={() => setView("photos")}>{messages.navBarPhotos.message[lang]}</li> */}
      <Link to="/">
        <li>{messages.navBarHome.message[lang]}</li>
      </Link>
      <Link to="/menu">
        <li>{messages.navBarMenu.message[lang]}</li>
      </Link>
      <Link to="/our-story">
        <li>{messages.navBarOurStory.message[lang]}</li>
      </Link>
      <Link to="/contact-us">
        <li>{messages.navBarContactUs.message[lang]}</li>
      </Link>
      <Link to="/photos">
        <li>{messages.navBarPhotos.message[lang]}</li>
      </Link>
    </ul>
  </nav>
)

export default Navbar
