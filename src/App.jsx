import React from "react";
import "normalize.css";
import "./App.css";
import Header from "./components/Header";
import Route from "./components/Route";
import About from "./routes/About";
import Home from "./routes/Home";

function App() {
  return (
    <>
      <Header />
      <main>
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
