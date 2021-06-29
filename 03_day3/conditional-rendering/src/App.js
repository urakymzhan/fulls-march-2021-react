import './App.css';
import Greeting from './Greeting';

function App() {
  const theme = 'light';
  
  return (
    // ternary example
    <div className={theme === 'dark' ? 'App dark': 'App light'}>
      <header className="App-header">
        <h1>Conditional Rendering</h1>
      </header>

      <Greeting />
    </div>
  );
}

export default App;
