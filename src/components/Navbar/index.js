import "./navbar.css";
import React from "react";
import NavLabels from "./nav-labels";
import HamburgerMenu from "./hamburger-menu";

const Navbar = ({ lang }) => {
  return (
    <nav className="navbar">
      <div className="nav-menu">
        <HamburgerMenu lang={lang} />
      </div>
      <ul className="nav-list">
        <NavLabels lang={lang} />
      </ul>
    </nav>
  )
}

export default Navbar
