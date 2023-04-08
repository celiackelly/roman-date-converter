import React from "react";
import Header from "./components/Header";
import Route from "./components/Route";
import About from "./routes/About";
import Home from "./routes/Home";

import "normalize.css";
import "./App.css";
//make multiple image sizes - this is huge!
import fasti from "./assets/fasti_praenestini.svg";
import fastiPortrait from "./assets/fasti_praenestini_portrait.svg";
import farmerCalendar from "./assets/farmer_calendar.svg";
import fastiAmiternini from "./assets/fasti_amiternini.webp";

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <img id="fasti" src={fastiPortrait}></img> */}
        <img id="fasti" src={fasti}></img>
        {/* <img id="fasti" src={farmerCalendar}></img> */}
        {/* <img id="fasti" src={fastiAmiternini}></img> */}
        <Route path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </main>
      <footer>This is a footer</footer>
    </>
  );
}

export default App;