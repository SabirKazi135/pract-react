import react, { useRef, useEffect } from "react";

function StopWatch() {
  const [hour, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  return (
    <div className="main">
      <h1>Stopwatch</h1>
      <div>
        {hour}:{minutes}:{seconds}
      </div>
      <button className="start">Start</button>
      <button className="stop">Stop</button>
      <button className="reset">Reset</button>
    </div>
  );
}

export default StopWatch;
