import "./our-story.css";
import Navbar from "./navbar"

function OurStory({setView}) {
  return (
    <div className="our-story">
      <Navbar setView={setView}/>
      <h1>Our Story</h1>
    </div>
  )
}

export default OurStory
