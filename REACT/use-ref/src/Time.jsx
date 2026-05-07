import { useRef } from "react";

function Time() {
  const timerRef = useRef();  // useRef is used to store the data that we want to persist across renders without causing a re-render when it changes. In this case, timerRef is used to store the timer id returned by setInterval, allowing us to reference and clear the timer later without triggering a re-render of the component.

  const startTimer = () => {
    timerRef.current = setInterval(() => {             // set interval returns a timer id which is stored in timerRef.current
      console.log("Running...");
    }, 1000);                                       // This will log "Running..." to the console every second until the timer is stopped. The timer can be stopped using the stopTimer function, which clears the interval using the stored timer id in timerRef.current.
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);     // clearinterval uses the timer id stored in timerRef.current to stop the interval from running. This will stop the "Running..." messages from being logged to the console every second.
  };

  return (
    <>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </>
  );
}

export default Time;

//