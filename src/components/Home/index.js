import "./home.css"

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
      <div className="social-media-wrapper">
        <div className="social-media">
          <span className="material-icons">facebook</span>
          <span className="material-icons">facebook</span>
          <span className="material-icons">facebook</span>
          <span className="material-icons">facebook</span>
          <span className="material-icons">facebook</span>
          <span className="material-icons">facebook</span>
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
