import { useState } from "react";
import Home from './Home';
import Menu from './Menu';
import OurStory from "./OurStory";
import Navbar from './Navbar';
import {Button} from '@material-ui/core';

const App = () => {
  const [view, setView] = useState("home")
  const [lang, setLang] = useState("en")

  const viewComponent = lang => {
    switch(view) {
      case "menu":
        return <Menu lang={lang} setView={setView}/>
      case "ourStory":
        return <OurStory lang={lang} setView={setView}/>
      default:
        return <Home lang={lang} setView={setView}/>;
    }
  }

  return (
    <div className="App">
      <header className="logo-wrapper">
        <div className="logo">
          <h1>LOGO</h1>
        </div>
      </header>
      <Navbar lang={lang} setView={setView}/>
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
