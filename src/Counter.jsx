import React from "react";
import { useState } from "react";

function Counter({ children }) {
  const [counter, setCounter] = useState(children);
  function increase() {
    setCounter(counter + 1);
  }
  function decrease() {
    setCounter(counter - 1);
  }
  return (
    <React.Fragment>
      <button type="button" onClick={decrease} disabled={counter === 0}>
        -
      </button>
      <span> {counter} </span>
      <button type="button" onClick={increase}>
        +
      </button>
    </React.Fragment>
  );
}

export default Counter;
