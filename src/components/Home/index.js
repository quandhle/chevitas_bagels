import "./home.css";
import ContactUs from "../Contact";
import Carousel from '../Carousel';
import HeroImage from "../Hero-Image";
import iconDetails from "../images/icons";
import ChevitasIcon from "../Icon";

function Home({lang}) {
  const {doordash, instagram, yelp, facebook, call, grubhub, ubereats} = iconDetails;

  return (
    <div className="home">
      <HeroImage page="home"/>
      <Carousel />
      <div className="social-media-wrapper-home">
        <div className="social-media-home">
          <ChevitasIcon icon={doordash}/>
          <ChevitasIcon icon={instagram} />
          <ChevitasIcon icon={yelp} />
          <ChevitasIcon icon={facebook} />
          <ChevitasIcon icon={call} />
          <ChevitasIcon icon={grubhub} />
          <ChevitasIcon icon={ubereats} />
        </div>
      </div>
      <ContactUs load="widget" lang={lang}/>
    </div>
  )
}

export default Home;
