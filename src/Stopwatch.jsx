import react, { useRef, useEffect, useState } from "react";

function StopWatch() {
  const [score, setScore] = useState(0);
  const [steps, setSteps] = useState(1);
  function changeSteps(e) {
    setSteps(e.target.value);
  }

  function increament() {
    setScore((s) => s + steps);
  }
  function dicreament() {
    setScore((s) => s - steps);
  }

  function reset() {
    setScore(0);
    setSteps(1);
  }
  return (
    <div className="main1">
      <h2 className="head">Counter</h2>
      <p className="counter">{score}</p>
      <button className="dicreament1" onClick={increament}>
        -
      </button>
      <button className="increament1" onClick={dicreament}>
        +
      </button>
      <br />
      <label htmlFor="">Steps:</label>
      <input type="number" value={steps} onChange={changeSteps} />
      <br />
      <button className="reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default StopWatch;
