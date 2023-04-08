import React from "react";
import "./App.css";
import Route from "./components/Route";
import Header from "./components/Header";
import About from "./routes/About";
import Home from "./routes/Home";
import DateConverter from "./components/DateConverter";

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
