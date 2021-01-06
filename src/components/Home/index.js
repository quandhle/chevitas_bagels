import "./home.css";
import ContactUs from "../Contact";
import Carousel from '../Carousel';
import HeroImage from "../Hero-Image";
import logo from "../images/chevitas-logo.png";
import iconDetails from "../images/icons";
import ChevitasIcon from "../Icon";

function Home() {
  const { doordash, instagram, yelp, facebook, call, grubhub } = iconDetails;
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
          <ChevitasIcon icon={doordash}/>
          <ChevitasIcon icon={instagram} />
          <ChevitasIcon icon={yelp} />
          <ChevitasIcon icon={facebook} />
          <ChevitasIcon icon={call} />
          <ChevitasIcon icon={grubhub} />
        </div>
      </div>
      <ContactUs load="widget"/>
    </div>
  )
}

export default Home;
