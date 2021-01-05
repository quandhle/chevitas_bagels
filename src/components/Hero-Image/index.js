import "./hero-image.css"

export default function HeroImage({headerStyle, imageStyle}) {
  return (
    <header className="hero-image" style={headerStyle}>
      {/* <img src={src} alt="chevitas logo of a cartoon woman holding a bowl of fruit"/> */}
      <div style={imageStyle}></div>
    </header>
  )
}
