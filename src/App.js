import './App.css';
import DateFieldset from './components/DateFieldset';
import OptionsFieldset from './components/OptionsFieldset';

function App() {

  return (
    <>
      <header className="App-header">
          
      </header>
      <main className="App">
        <h1>Roman Date Calculator</h1>
        <form>
          <DateFieldset />
          <OptionsFieldset isAUCDisabled={false} />   {/* replace hard-coded with state  */}
        </form>
      </main>
    </>
  );
}

export default App;
