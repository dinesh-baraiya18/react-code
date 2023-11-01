import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Progress = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const IntrVal = setInterval(() => {
      setValue((prev) => {
        if (prev < 100) {
          return prev + 1;
        }
        clearInterval(IntrVal);
        return prev;
      });
    }, 30);
    return () => clearInterval(IntrVal);
  }, []);

  return (
    <div className="pogessbar-container">
      <h2 className="mb-3 text-center">Progess Bar</h2>
      <ProgressBar
        className="progressBar"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Loading Progress"
        style={{ "--width": `${value}%` }}
      >
        <span className={value > 50 ? "text-white" : ""}>{value}%</span>
      </ProgressBar>
      {value === 100 && <div className="text-center">SUCCESS</div>}
    </div>
  );
};

export default Progress;

const ProgressBar = styled.div`
  position: relative;
  max-width: 500px;
  width: 100%;
  margin: 40px auto;
  background-color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
  border-radius: 20px;
  overflow: hidden;
  z-index: 1;
  transition: width 0.3s ease-in-out;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: var(--width);
    height: 100%;
    background-color: green;
    z-index: -1;
  }
`;
