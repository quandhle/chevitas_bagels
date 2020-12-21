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
          <i class="fa fa-chevron-left"></i>
          <h1>This is where the carousel goes</h1>
          <i class="fa fa-chevron-right"></i>
        </div>
      </div>
    </div>
  )
}

export default Home;
