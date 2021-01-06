<<<<<<< HEAD
import "./home.css"
import ContactUs from "../Contact"
import Carousel from '../Carousel'
=======
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
>>>>>>> 5a3e37b4e9c5ea51e21665501f18dd3f67077aec

  return (
    <div className="home">
<<<<<<< HEAD
=======
      <HeroImage heroStyles={heroStyles}/>
>>>>>>> 5a3e37b4e9c5ea51e21665501f18dd3f67077aec
      <Carousel />
      <div className="social-media-wrapper-home">
        <div className="social-media-home">
          <a href="https://www.doordash.com/store/chevita-s-juice---bagels-santa-ana-783486/en-US" target="_blank" rel="noreferrer">
            <img src={doordash} alt="doordash icon"></img>
            </a>
          <a href="https://www.instagram.com/chevitasdtsa/" target="_blank" rel="noreferrer">
            <img src={instagram} alt="instagram icon"></img>
            </a>
          <a href="https://www.yelp.com/biz/chevitas-juice-and-bagel-santa-ana" target="_blank" rel="noreferrer">
            <img src={yelp} alt="yelp icon"></img>
            </a>
          <a href="https://www.facebook.com/ChevitasJB" target="_blank" rel="noreferrer">
            <img src={facebook} alt="facebook icon"></img>
            </a>
          <a href="tel:7148523650" target="_blank" rel="noreferrer">
            <img src={call} alt="call icon"></img>
            </a>
          <a href="https://www.grubhub.com/restaurant/chevitas-juice-and-bagel-209-w-4th-st-santa-ana/1472683" target="_blank" rel="noreferrer">
            <img src={grubhub} alt="grubhub icon"></img>
            </a>
        </div>
      </div>
      <ContactUs load="widget"/>
    </div>
  )
}

export default Home;
