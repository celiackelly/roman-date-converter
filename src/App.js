import "./App.css";
import DateConverter from "./components/DateConverter";

function App() {
  return (
    <>
      <header className="App-header">Header- Add navigation, etc. here</header>
      <main>
        <h1>Roman Date Converter</h1>
        <DateConverter />
      </main>
      <footer>This is a footer</footer>
    </>
  );
}

export default App;
