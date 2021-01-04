import "./App.css"
import { useState } from "react";
import HeroImage from "./Hero-Image";
import Home from './Home';
import Menu from './Menu';
import OurStory from "./OurStory";
import Navbar from './Navbar';
import Photos from './Photos'
import Contact from "./Contact";
import {Button} from '@material-ui/core';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

const App = () => {
  const [lang, setLang] = useState("en")

  return (
    <Router>
      <div className="App">
        <HeroImage type="logo" />
        <Navbar lang={lang}/>
        <Button
          onClick={() => lang === "en" ? setLang("sp") : setLang("en")}
          color="primary"
          variant="contained"
        >
            Click to change language.
        </Button>
        {/* {viewComponent(lang)} */}
        <Switch>
          <Route
            path="/menu"
            render={props => <Menu lang={lang} {...props} />}
            />
          <Route
            path="/our-story"
            render={props => <OurStory lang={lang} {...props}/>}
            />
          <Route
            path="/photos"
            render={props => <Photos lang={lang} {...props} />}
            />
          <Route
            path="/contact-us"
            render={props => <Contact lang={lang} load="page" {...props} />}
            />
          <Route
            exact path="/"
            render={props => <Home lang={lang} {...props} />}
            />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
