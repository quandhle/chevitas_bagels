import "./icon.css";

function ChevitasIcon({icon: {href, src, alt}}) {
  return (
    <a className="icon" href={href} target="_blank" rel="noreferrer">
      <img src={src} alt={alt}></img>
    </a>
  )
}

export default ChevitasIcon;
