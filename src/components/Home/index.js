import "./home.css";
import ContactUs from "../Contact";
import Carousel from '../Carousel';
import HeroImage from "../Hero-Image";
import logo from "../images/chevitas-logo.png";
import instagramIcon from "../images/instagram-icon.svg";
import yelpIcon from "../images/yelp-icon.svg";
import facebookIcon from "../images/facebook-icon.svg";
import callIcon from "../images/call-icon.svg";
import grubhubIcon from "../images/grubhub-icon.svg";

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
          <img src={instagramIcon} alt="instagram icon"></img>
          <img src={yelpIcon} alt="yelp icon"></img>
          <img src={facebookIcon} alt="facebook icon"></img>
          <img src={callIcon} alt="phone call icon"></img>
          <img src={grubhubIcon} alt="grubhub icon"></img>
        </div>
      </div>
      <ContactUs load="widget"/>
    </div>
  )
}

export default Home;
