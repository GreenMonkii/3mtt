// Objective: The goal of this project is to build a simple Click Counter application using React state.

import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const threshold = 100;
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>Click Counter</h1>
      <p>Current Count: {count}</p>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      {count >= threshold && <p>You've reached the limit!</p>}
    </div>
  );
}

export default App;
