import "./navbar.css"

function Navbar({setView}) {
  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => setView("home")}>Home</li>
        <li onClick={() => setView("menu")}>Menu</li>
      </ul>
    </nav>
  )
}

export default Navbar
