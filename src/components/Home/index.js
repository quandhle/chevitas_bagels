import "./home.css";
import ContactUs from "../Contact";
import Carousel from '../Carousel';
import HeroImage from "../Hero-Image";
import logo from "../images/chevitas-logo.png";

function Home() {
  const heroStyles = {
    image: {
      backgroundImage: `url(${logo})`,
      backgroundPosition: "center",
      backgroundSize: "contain",
      boxShadow: "0px 0px 50px green",
      width: "var(--component-width)",
      height: "var(--component-height)"
    },
    header: {
      background: `linear-gradient(yellow, white)`,
    }
  }

  return (
    <div className="home">
      <HeroImage heroStyles={heroStyles}/>
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
