import "./home.css";
import ContactUs from "../Contact";
import Carousel from '../Carousel';
import HeroImage from "../Hero-Image";
import logo from "../images/chevitas-logo.png";
import icons from "../images/icons";

function Home() {
  const {doordash, instagram, yelp, facebook, call, grubhub} = icons;
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
          <img src={doordash} alt="doordash icon"></img>
          <img src={instagram} alt="instagram icon"></img>
          <img src={yelp} alt="yelp icon"></img>
          <img src={facebook} alt="facebook icon"></img>
          <img src={call} alt="call icon"></img>
          <img src={grubhub} alt="grubhub icon"></img>
        </div>
      </div>
      <ContactUs load="widget"/>
    </div>
  )
}

export default Home;
