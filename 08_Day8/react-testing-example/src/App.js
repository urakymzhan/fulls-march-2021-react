import "./App.css";
import {useState} from 'react';
import AsyncComponent from "./AsyncComponent";


function App() {

  const getData = () => new Promise(resolve => setTimeout(() => resolve("Some data"), 1000));

  const [count, setCount] = useState(0);

  return (
    <div className="App" data-test="component-app">
      <h1 data-test="counter-display">display</h1>
      <span data-test="count">{count}</span>

      <button data-test="increment-button" onClick={() => setCount(count+1)}>Increase</button>

      <br/>
      <div>------Async Example ---------</div>
      <br/>
      <AsyncComponent get={getData}/>
    </div>
  );
}

export default App;
