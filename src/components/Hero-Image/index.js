import "./hero-image.css"
import logo from "../images/chevitas-logo.png"

export default function HeroImage({type}) {
  if (type === "logo") {
    return (
      <header className="hero-image">
        <img src={logo} alt="chevitas logo of a cartoon woman holding a bowl of fruit"/>
      </header>
    )
  }
}
