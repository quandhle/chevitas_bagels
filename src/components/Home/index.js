import "./home.css"
import ContactUs from "../Contact"

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
      <ContactUs load="widget"/>
    </div>
  )
}

export default Home;
