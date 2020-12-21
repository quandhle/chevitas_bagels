import "./home.css"

function Home() {
  return (
    <div className="home">
      <header className="logo-wrapper">
        <div className="logo">
          <h1>LOGO</h1>
        </div>
      </header>
      <nav className="navbar">
        <h1>This is the navbar</h1>
      </nav>
      <div className="carousel-wrapper">
        <div className="carousel">
          <span class="material-icons">arrow_back_ios</span>
          <h1>This is where the carousel goes</h1>
          <span class="material-icons">arrow_forward_ios</span>
        </div>
      </div>
    </div>
  )
}

export default Home;
