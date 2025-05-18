import React, { useState } from "react";
import "./Counter.css"; // 👈 Import the CSS

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const minLimit = 0;
  const maxLimit = 100;

  function increment() {
    setCount((prev) => Math.min(prev + step, maxLimit));
  }

  function decrement() {
    setCount((prev) => Math.max(prev - step, minLimit));
  }

  function reset() {
    setCount(0);
    setStep(1);
  }

  function handleStepChange(e) {
    const value = parseInt(e.target.value);
    setStep(isNaN(value) || value <= 0 ? 1 : value);
  }

  return (
    <div className="counter-container">
      <h1>Counter</h1>
      <div className="display">{count}</div>

      <div className="button-group">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>

      <div className="step-input">
        <label>
          Step:{" "}
          <input
            type="number"
            value={step}
            min="1"
            onChange={handleStepChange}
          />
        </label>
      </div>

      <button className="reset-btn" onClick={reset}>
        Reset
      </button>

      <p className="limits">
        Min: {minLimit} | Max: {maxLimit}
      </p>
    </div>
  );
}

export default Counter;
