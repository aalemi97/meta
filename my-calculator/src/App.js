import "./App.css";
import { useState, useRef } from "react";

function App() {
  let [result, setResult] = useState(0);
  let [userInput, setUserInput] = useState(0);

  function onInputChange(event) {
    const re = /^[0-9\b.]+$/;
    if (event.target.value === "" || re.test(event.target.value)) {
      setUserInput(Number(event.target.value));
    }
  }
  const actions = [
    "add",
    "subtract",
    "multiply",
    "divide",
    "reset input",
    "reset result",
  ];

  function handleButtonClick(event) {
    const action = event.target.innerText;
    switch (action) {
      case "add":
        add();
        break;
      case "subtract":
        subtract();
        break;
      case "multiply":
        multiply();
        break;
      case "divide":
        divide();
        break;
      case "reset input":
        resetInput();
        break;
      case "reset result":
        resetResult();
        break;
    }
  }

  function add() {
    const newResult = result + userInput;
    setResult(newResult);
  }

  function subtract() {
    const newResult = result - userInput;
    setResult(newResult);
  }

  function multiply() {
    const newResult = result * userInput;
    setResult(newResult);
  }

  function divide() {
    if (userInput == 0) {
      alert("Cannot divide by 0!");
    } else {
      const newResult = result / userInput;
      setResult(newResult);
    }
  }

  function resetInput() {
    setUserInput(0);
  }

  function resetResult() {
    setResult(0);
  }

  return (
    <div className="App">
      <div>
        <h2>Simplest Working Calculator!</h2>
      </div>
      <h3>Result: {result}</h3>
      <input type="number" value={userInput} onChange={onInputChange}></input>
      <div className="action-buttons">
        {actions.map((value, index) => (
          <button key={index} onClick={handleButtonClick}>
            {value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
