import react, { useRef, useEffect, useState } from "react";

function StopWatch() {
  const [hour, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  function start() {}

  function stop() {}

  function reset() {}
  return (
    <div className="main">
      <h1>Stopwatch</h1>
      <div>
        {hour}:{minutes}:{seconds}
      </div>
      <button className="start" onClick={start}>
        Start
      </button>
      <button className="stop" onClick={stop}>
        Stop
      </button>
      <button className="reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default StopWatch;
