import { useState } from "react";
import Home from "./react-components/home"
import Menu from "./menu"

function App() {
  const [view, setView] = useState("home")

  let viewComponent;

  switch(view) {
    case "menu":
      viewComponent = <Menu setView={setView}/>
      break;
    default:
      viewComponent = <Home setView={setView}/>;
      break;
  }

  return (
    <div className="App">
      {viewComponent}
    </div>
  );
}

export default App;
