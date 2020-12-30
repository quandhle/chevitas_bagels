import "./navbar.css";
import {navbarLabels} from '../messages/navbar';

const Navbar = ({
  setView,
  lang = "en"
}) => (
  <nav className="navbar">
    <ul>
      {Object.keys(navbarLabels).map(label => <li onClick={() => setView(navbarLabels[label].id)}>{navbarLabels[label].message[lang]}</li>)}
    </ul>
  </nav>
)

export default Navbar
