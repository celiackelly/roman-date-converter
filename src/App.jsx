import React from "react";
import "./App.css";
import Route from "./components/Route";
import Header from "./components/Header";
import About from "./components/About";
import DateConverter from "./components/DateConverter";

function App() {
  return (
    <>
      <Header />
      <main>
        <Route path="/">
          <h1>Roman Date Converter</h1>
          <DateConverter />
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
