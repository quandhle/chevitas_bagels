import "./home.css"
import Navbar from "./navbar"

function Home() {
  return (
    <div className="home">
      <header className="logo-wrapper">
        <div className="logo">
          <h1>LOGO</h1>
        </div>
      </header>
      <Navbar/>
      <div className="carousel-wrapper">
        <div className="carousel">
          <span class="material-icons">arrow_back_ios</span>
          <h1>This is where the carousel goes</h1>
          <span class="material-icons">arrow_forward_ios</span>
        </div>
      </div>
      <div className="social-media-wrapper">
        <div className="social-media">
          <span class="material-icons">facebook</span>
          <span class="material-icons">facebook</span>
          <span class="material-icons">facebook</span>
          <span class="material-icons">facebook</span>
          <span class="material-icons">facebook</span>
          <span class="material-icons">facebook</span>
        </div>
      </div>
      <div className="contact-wrapper">
        <div className="contact">
          <h1>This is the contact section</h1>
        </div>
      </div>
    </div>
  )
}

export default Home;
