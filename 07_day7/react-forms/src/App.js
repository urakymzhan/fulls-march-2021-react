import "./App.css";
import { useState } from "react";
import MultipHandling from "./MultipleHandling";

function App() {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [message, setMessage] = useState("");

  const handleNameInput = (event) => {
    setName(event.target.value);
  };
  const handleLastNameInput = (event) => {
    setLastName(event.target.value);
  };
  const handleMessageInput = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <header className="App-header">
        <h1>Forms in React</h1>
      </header>
      <div className="App">
        <p>SINGLE INPUT HANDLING EXAMPLE</p>
        <p>------------------------------------------------</p>
        <form>
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
        </form>
      </div>
      <MultipHandling />
    </div>
  );
}

export default App;
