import react, { useRef, useEffect } from "react";

function StopWatch() {
    const [hour, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [, ] = useState(0);
  return (
    <div className="main">
      <h1>Stopwatch</h1>
      <div>
        {hour}:{minutes}:{seconds}
      </div>
    </div>
  );
}

export default StopWatch;
