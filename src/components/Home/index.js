import "./home.css";
import ContactUs from "../Contact";
import Carousel from '../Carousel';
import HeroImage from "../Hero-Image";
import logo from "../images/chevitas-logo.png";

function Home() {
  const imageStyle = {
    backgroundImage: `url(${logo})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    boxShadow: "0px 0px 50px green",
    width: "var(--component-width)",
    height: "var(--component-height)",
  }

  const headerStyle = {
    background: `linear-gradient(yellow, white)`,
  }

  return (
    <div className="home">
      <HeroImage src={logo} imageStyle={imageStyle} headerStyle={headerStyle}/>
      <Carousel />
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
