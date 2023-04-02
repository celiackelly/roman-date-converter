import './App.css';
import Card from './components/Card';
import DateForm from './components/DateForm';

function App() {

  return (
    <>
      <header className="App-header">
        Header- Add navigation, etc. here
      </header>
      <main>
        <h1>Roman Date Calculator</h1>
          <Card title="Find the Roman date for">
            <DateForm />
          </Card>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
