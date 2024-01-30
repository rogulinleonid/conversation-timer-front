import React from "react";
import { useTimer } from "react-timer-hook";

export const Timer = ({ expiryTimestamp }) => {
  const {
    totalSeconds,
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  const onStartClick = () => {
    console.log("start");
    start();
  };

  const onPauseClick = () => {
    console.log(totalSeconds);
    pause();
  };

  return (
    <div style={{ textAlign: "center", color: "#fff" }}>
      <h1>Ваше время</h1>
      <div style={{ fontSize: "100px" }}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? "Вы говорите" : "Говорит кто-то другой"}</p>
      <button style={{ color: "#fff" }} onClick={onStartClick}>
        Start
      </button>
      <button style={{ color: "#fff" }} onClick={onPauseClick}>
        Pause
      </button>
      <button style={{ color: "#fff" }} onClick={resume}>
        Resume
      </button>
      <button
        style={{ color: "#fff" }}
        onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 300);
          restart(time);
        }}
      >
        Restart
      </button>
    </div>
  );
};
