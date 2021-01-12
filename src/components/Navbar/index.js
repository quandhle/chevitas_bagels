import "./navbar.css";
import React from "react";
import NavLabels from "./nav-labels";
import HamburgerMenu from "./hamburger-menu";

const Navbar = ({ lang }) => {
  return (
    <nav className="navbar">
      <HamburgerMenu lang={lang} />
      <ul>
        <NavLabels lang={lang} />
      </ul>
    </nav>
  )
}

export default Navbar
