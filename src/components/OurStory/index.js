import {Fragment} from 'react';
import "./our-story.css";
import ourStoryMessages from '../messages/ourStory';
import HeroImage from "../Hero-Image";
import storyImage from '../images/owner-and-store-front.jpg';


const OurStory = ({lang}) => (
  <Fragment>
    <HeroImage imageText="Our Story"/>
    <div className="our-story">
      <main>
        <h1>{ourStoryMessages.storyTitle.message[lang]}</h1>
        {Object.keys(ourStoryMessages).map((storyText, i) => i !== 0 && <p key={i}>{ourStoryMessages[storyText].message[lang]}</p>)}
      </main>
    </div>
  </Fragment>
)

export default OurStory
