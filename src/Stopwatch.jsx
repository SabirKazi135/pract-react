import { react, useRef, useEffect } from "react";

function StopWatch() {
  const hour = useRef(0);
  const minutes = useRef(0);
  const seconds = useRef(0);
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
