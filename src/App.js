import React, { useState } from 'react'
import './App.css';

function App() {
  const initialState = 0

  // State = Informtion/data
  const [count, setCount] = useState(initialState)


  return (
    <div className="counter">
      <h1>React Counter</h1>
      <p className="click_desc">
        You clicked {count} times
      </p>

      <div className="button_container">
        <button onClick={() => setCount(count + 1)}>Add 1</button>
        <button onClick={() => setCount(count + 5)}>Add 5</button>
        <button onClick={() => setCount(initialState)}>Reset</button>
      </div>
    </div>
  );
}

export default App;
