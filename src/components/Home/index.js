import "./home.css"
import Map from "./contact"

function Home({setView}) {
  return (
    <div className="home">
      <div className="carousel-wrapper">
        <div className="carousel">
          <span className="material-icons">arrow_back_ios</span>
          <h1>This is where the carousel goes</h1>
          <span className="material-icons">arrow_forward_ios</span>
        </div>
      </div>
      <div className="social-media-wrapper-home">
        <div className="social-media-home">
          <span className="material-icons">facebook</span>
          <span className="material-icons">facebook</span>
          <span className="material-icons">facebook</span>
          <span className="material-icons">facebook</span>
          <span className="material-icons">facebook</span>
          <span className="material-icons">facebook</span>
        </div>
      </div>
      <div className="contact-wrapper">
        <div className="contact-header">
          <h2>Contact</h2>
          <div className="divider"></div>
          <h2>Hours</h2>
          <div className="divider"></div>
          <h2>Location</h2>
        </div>
        <div className="contact-info-wrapper">
          <div className="contact-info">
            <h3>Contact</h3>
            <p>(714) 852-3650</p>
            <p>209 W 4th Street, Santa Ana</p>
          </div>
          <div className="contact-hours">
            <h3>Hours</h3>
            <p>Monday - Sunday</p>
            <p>8am - 3pm</p>
          </div>
        </div>
        <Map/>
      </div>
    </div>
  )
}

export default Home;
