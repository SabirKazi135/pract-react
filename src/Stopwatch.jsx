import react, { useRef, useEffect, useState } from "react";

function StopWatch() {
  const [hour, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const startTime = useRef(null);

  useEffect(() => {
    if (seconds >= 100) {
      setSeconds(0);
      setMinutes((m) => m + 1);
    }
    if (minutes >= 60) {
      setMinutes(0);
      setHours((m) => m + 1);
    }
  }, [seconds]);

  function start() {
    if (startTime !== null) {
      return;
    }
    startTime.current = setInterval(() => {
      setSeconds((c) => c + 1);
    }, 10);
  }

  function stop() {
    clearInterval(startTime.current);
  }

  function reset() {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  }
  return (
    <div className="main">
      <h1>Stopwatch</h1>
      <div>
        {String(hour).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
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
