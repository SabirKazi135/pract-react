import react, { useRef, useEffect, useState } from "react";

function StopWatch() {
  const [score, setScore] = useState(0);
  return (
    <div className="main1">
      <h2 className="head">Counter</h2>
      <p className="counter">{score}</p>
    </div>
  );
}

export default StopWatch;
