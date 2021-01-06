import {Fragment} from 'react';
import "./our-story.css";
import ourStoryMessages from '../messages/ourStory';
import HeroImage from "../Hero-Image";
import storyImage from '../images/owner-and-store-front.jpg';


const OurStory = ({lang}) => {
  const heroStyles = {
    image: {
      backgroundImage: `url(${storyImage})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "100vh",
      width: "100vw"
    },
    text: {
      color: "white",
      fontSize: "7rem",
      fontFamily: `'Courgette', cursive`,
      textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
      textAlign: "center"
    }
  }

  return (
    <Fragment>
      <HeroImage heroStyles={heroStyles} imageText="Our Story"/>
      <div className="our-story">
        <main>
          <h1>{ourStoryMessages.storyTitle.message[lang]}</h1>
          {Object.keys(ourStoryMessages).map((storyText, i) => i !== 0 && <p key={i}>{ourStoryMessages[storyText].message[lang]}</p>)}
        </main>
      </div>
    </Fragment>
  )
}

export default OurStory
