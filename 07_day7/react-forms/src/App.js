import "./App.css";
import { useState } from "react";
import MultipHandling from './MultipleHandling';


function App() {
  // const [name, setName] = useState("");
  // const [lastname, setLastName] = useState("");
  // const [message, setMessage] = useState("");

  // const handleNameInput = (event) => {
  //   setName(event.target.value);
  // };
  // const handleLastNameInput = (event) => {
  //   setLastName(event.target.value);
  // };
  // const handleMessageInput = (event) => {
  //   setMessage(event.target.value);
  // };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Forms in React</h1>
      </header>

      {/* <form>
        <input
          type="text"
          placeholder="Name"
          onChange={handleNameInput}
          value={name}
        />
        <input
          type="text"
          placeholder="LastName"
          onChange={handleLastNameInput}
          value={lastname}
        />
        <textarea
          type="text"
          placeholder="Message"
          onChange={handleMessageInput}
          value={message}
        />
      </form> */}

      <p>Multiple Handling</p>
      <p>------------------------------------------------</p>
      <MultipHandling/>
    </div>
  );
}

export default App;
