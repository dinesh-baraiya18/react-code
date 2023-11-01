import React, { useState } from "react";

const Counter = (OriginalComponent) => {
  const enhancedComponent = () => {
    const [num, setNum] = useState(0);

    const handleIncrement = () => {
      setNum(num + 1);
    };
    const handleDecrement = () => {
      if (num > 0) {
        setNum(num - 1);
      }
    };

    const enhancedProps = {
      handleIncrement,
      handleDecrement,
      num,
    };
    return <OriginalComponent {...enhancedProps} />;
  };
  return enhancedComponent;
};

export default Counter;
