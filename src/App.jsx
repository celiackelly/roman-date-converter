import React from "react";
import Header from "./components/Header";
import Route from "./components/Route";
import About from "./routes/About";
import Home from "./routes/Home";

import "normalize.css";
import "./assets/styles/skeleton.css";
import "./assets/styles/App.css";

import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <img
          id="fasti"
          className="hero"
          src="https://res.cloudinary.com/celiackelly/image/upload/v1682470087/Fasti_Praenestini_Massimo_n3-removebg_j2iadx_26aee5.png"
        ></img>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </main>
      <Footer />
    </>
  );
}

export default App;
