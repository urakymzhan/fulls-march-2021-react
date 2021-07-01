import "./App.css";
import React, { useState, useEffect } from "react";
import SamplePage from "./SamplePage";
import useCount from "./useCount";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  handleClick = () => {
    this.setState({ count: this.state.count + 2 });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increase</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

function App() {
  const { count, setCount } = useCount();

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Hooks</h1>
      </header>
      <div>
        <p> Function Output ------------ </p>
        <button onClick={() => setCount((count) => count + 1)}>Increase</button>
        <p>{count}</p>
        <p>`You clicked {count} times`</p>
      </div>
      {/* <p> Class Output ------------ </p> */}
      {/* <Main/> */}
      {/* <Users/> */}
      <SamplePage />
    </div>
  );
}

function Users() {
  // init a state
  const [users, setUsers] = useState([]);

  // fetch users and update state
  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((allusers) => {
        setUsers(allusers);
      });
  }, [users]);

  return (
    <ul style={{ listStyle: "none" }}>
      {users.map((user) => {
        return (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        );
      })}
    </ul>
  );
}
export default App;
