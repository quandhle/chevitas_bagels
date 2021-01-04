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
  const [view, setView] = useState("home")
  const [lang, setLang] = useState("en")

  const viewComponent = lang => {
    switch(view) {
      case "menu":
        return <Menu lang={lang}/>
      case "ourStory":
        return <OurStory lang={lang}/>
      case 'photos':
			  return <Photos lang={lang} />;
      case "contactUs":
        return <Contact lang={lang} load="page"/>
      default:
        return <Home lang={lang}/>;
    }
  }

  return (
    <div className="App">
      {view === "home" && <HeroImage type="logo"/>}
      <Navbar lang={lang} setView={setView} />
      <Button
        onClick={() => lang === "en" ? setLang("sp") : setLang("en")}
        color="primary"
        variant="contained"
      >
          Click to change language.
      </Button>
      {viewComponent(lang)}
    </div>
  );
}

export default App;
