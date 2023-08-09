import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState();
  const timerId = useRef();

  const length = 2;

  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - minutes * 60);

    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    return minutes + ":" + seconds;
  };

  useEffect(() => {
    setTimerFn();
  }, []);

  const setTimerFn = () => {
    setTimer(length * 60);
    return;
  };

  useEffect(() => {
    timerId.current = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (timer <= 0) {
      clearInterval(timerId.current);
      console.log("end");
    }
  }, [timer]);
  return (
    <div className={formatTime(timer).split(":")[0].includes(1) ? "error" : ""}>
      Timer: {formatTime(timer)}
    </div>
  );
};

export default Timer;
