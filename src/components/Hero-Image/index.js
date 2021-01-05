import "./hero-image.css"

export default function HeroImage({heroStyles, imageText}) {
  return (
    <header className="hero-image-wrapper" style={!heroStyles.header ? null: heroStyles.header}>
      <div className="hero-image" style={heroStyles.image}>
        <h1 style={heroStyles.text}>{imageText}</h1>
      </div>
    </header>
  )
}
