import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CountDown = () => {
  const [time, setTime] = useState({
    hours: "",
    minutes: "",
    seconds: "",
  });

  const [isRunning, setIsRunning] = useState(false);

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setTime((prev) => ({ ...prev, [name]: parseInt(value) }));
  };

  const startCountdown = () => {
    if (time.hours > 0 || time.minutes > 0 || time.seconds > 0) {
      setIsRunning(true);
    } else {
      console.log("Please enter a valid time.");
    }
  };

  useEffect(() => {
    if (isRunning) {
      const countdownInterval = setInterval(() => {
        setTime((prev) => {
          const { hours, minutes, seconds } = prev;
          if (hours === 0 && minutes === 0 && seconds === 0) {
            clearInterval(countdownInterval);
            setIsRunning(false);
            return prev;
          }
          let newHours = hours;
          let newMinutes = minutes;
          let newSeconds = seconds;
          if (seconds === 0) {
            if (minutes > 0) {
              newMinutes = minutes - 1;
              newSeconds = 59;
            } else if (hours > 0) {
              newHours = hours - 1;
              newMinutes = 59;
              newSeconds = 59;
            }
          } else {
            newSeconds = seconds - 1;
          }
          return {
            hours: newHours,
            minutes: newMinutes,
            seconds: newSeconds,
          };
        });
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [isRunning]);

  return (
    <Wrapper className="d-flex justify-content-center align-items-center">
      <div>
        <h2>CountDown Timer</h2>
        <div className="d-flex gap-4 text-center mt-3 justify-content-center align-items-center">
          <div>
            <span>Hours</span>
            <input
              type="number"
              placeholder="00"
              name="hours"
              min={0}
              value={time.hours}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <span>Minutes</span>
            <input
              type="number"
              placeholder="00"
              name="minutes"
              min={0}
              value={time.minutes}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <span>Seconds</span>
            <input
              type="number"
              placeholder="00"
              name="seconds"
              min={0}
              value={time.seconds}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center gap-3">
          {isRunning ? (
            <button
              className="btn btn-danger"
              onClick={() => setIsRunning(false)}
            >
              Stop
            </button>
          ) : (
            <button className="btn btn-success" onClick={startCountdown}>
              Start
            </button>
          )}
          <button
            className="btn btn-danger"
            onClick={() => setIsRunning(false)}
          >
            Reset
          </button>
        </div>
        <p className="mt-3">
          {isRunning
            ? `Time Remaining: ${time.hours}:${time.minutes}:${time.seconds}`
            : ""}
        </p>
      </div>
    </Wrapper>
  );
};

export default CountDown;

const Wrapper = styled.section`
  input {
    max-width: 50px;
    border: 0;
    display: block;
    margin: 0 auto 20px;
    font-size: 30px;
    text-align: center;

    &:focus {
      border: 0;
      box-shadow: none;
      outline: 0;
    }
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`;
