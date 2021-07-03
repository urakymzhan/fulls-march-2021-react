import "./App.css";
import { useState } from "react";

const initialValues = {
  fname: "",
  lastname: " ",
  message: " ",
};

function MultipHandling() {
  // state
  const [values, setValues] = useState(initialValues);

  const handleValues = (event) => {
    // getting name, value from input
    const { name, value } = event.target; // fname, vdfvfvfd, lastname: cfvdfvfdv

    // old way
    // const newValues = Object.assign(values, initialValues);
    // newValues[name] = value;
    // setValues(newValues);

    // setting value dynamically
    setValues((prevValues) => ({
      ...prevValues, // spread opeator [fname]: vdfvfvfd,
      [name]: value, // [fname]: vdfvfvfd,
    }));
  };

  //   console.log(values);

  //   select handlers
  const [color, setColor] = useState("blue");
  const handleColorChange = (event) => {
    console.log(event.target.value);
    setColor(event.target.value);
  };

  //   checkbox handlers
  const [acceptedAgreement, setAcceptedAgreement] = useState(false);
  const handleAcceptAgreement = (e) => {
    console.log(e.target.checked);
      setAcceptedAgreement((acceptedAgreement) => !acceptedAgreement);
    // setAcceptedAgreement(!e.target.checked);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
    //   simple validation
    if (values.fname === '') {
        alert("Please type name!");
    } else if (acceptedAgreement === false) {
        alert("Accept our agreement!");
    } else {
        alert("Form Submitted");
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          name="fname"
          type="text"
          placeholder="Name"
          onChange={handleValues}
          value={values.fname} 
        />
        <input
          name="lastname"
          type="text"
          placeholder="LastName"
          onChange={handleValues}
          value={values.lastname}
        />
        <textarea
          name="message"
          type="text"
          placeholder="Message"
          onChange={handleValues}
          value={values.message}
        />

        <label>Desired color:</label>
        <select value={color} onChange={handleColorChange}>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
        </select>

        <label>I accept the agreement</label>
        <input
          checked={acceptedAgreement}
          onChange={handleAcceptAgreement}
          type="checkbox"
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default MultipHandling;
