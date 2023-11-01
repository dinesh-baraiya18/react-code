import React, { useState } from "react";

const UseMemo2 = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    const timeOutFun = setTimeout(() => {
      for (let i = 1; i < 9999; i++) {
        console.log(i);
      }
    }, 0);
    setCount(count + 1);
    return () => clearTimeout(timeOutFun);
  };

  return (
    <>
      <div>
        a<h1>counter: {count}</h1>
        <button onClick={handleClick}>click </button>
      </div>
    </>
  );
};

export default UseMemo2;
