import React, { useState } from "react";

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
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Counter</h1>
      <h2>{count}</h2>

      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>

      <div style={{ marginTop: "10px" }}>
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

      <button style={{ marginTop: "10px" }} onClick={reset}>
        Reset
      </button>

      <p style={{ marginTop: "10px", color: "gray" }}>
        Min: {minLimit} | Max: {maxLimit}
      </p>
    </div>
  );
}

export default Counter;
