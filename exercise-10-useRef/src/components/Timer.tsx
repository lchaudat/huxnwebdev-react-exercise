import { useRef, useState } from "react";

const Timer = () => {
  const [timerDisplay, setTimerDisplay] = useState(0);
  const storedTimer = useRef(0);

  const initializeTime = () => {
    if (!storedTimer.current) {
      console.log(timerDisplay);
      storedTimer.current = setInterval(() => {
        setTimerDisplay((prevtimerDisplay) => prevtimerDisplay + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(storedTimer.current);
    storedTimer.current = 0;
  };

  const resetTimer = () => {
    setTimerDisplay(0);
    clearInterval(storedTimer.current);
    storedTimer.current = 0;
  };

  return (
    <div>
      {timerDisplay}
      <button onClick={initializeTime}>Initialize timer</button>
      <button onClick={stopTimer}>Stop timer</button>
      <button onClick={resetTimer}>reset timer</button>
    </div>
  );
};

export default Timer;
