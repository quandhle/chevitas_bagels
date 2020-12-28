import "./navbar.css";
import {messages} from '../messages/messages';

const Navbar = ({
  setView,
  lang = "en"
}) => (
  <nav className="navbar">
    <ul>
      <li onClick={() => setView("home")}>{messages.navBarHome.message[lang]}</li>
      <li onClick={() => setView("menu")}>{messages.navBarMenu.message[lang]}</li>
      <li onClick={() => setView("ourStory")}>{messages.navBarOurStory.message[lang]}</li>
      <li onClick={() => setView("contactUs")}>{messages.navBarContactUs.message[lang]}</li>
      <li onClick={() => setView("photos")}>{messages.navBarPhotos.message[lang]}</li>
    </ul>
  </nav>
)

export default Navbar
