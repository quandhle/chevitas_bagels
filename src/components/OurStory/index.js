import {Fragment} from 'react';
import "./our-story.css";
import ourStoryMessages from '../messages/ourStory';

const OurStory = ({lang}) => (
  <Fragment>
    <div className="our-story">
      <main>
        <h1>{ourStoryMessages.storyTitle.message[lang]}</h1>
        {Object.keys(ourStoryMessages).map((storyText, i) => i !== 0 && <p>{ourStoryMessages[storyText].message[lang]}</p>)}
      </main>
    </div>
  </Fragment>
)

export default OurStory
