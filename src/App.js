import './App.css';
import DateFieldset from './components/DateFieldset';

function App() {
  return (
    <main className="App">
      <header className="App-header">
        <h1>Roman Date Calculator</h1>
      </header>
      <form>
          <DateFieldset />
        </form>
    </main>
  );
}

export default App;
