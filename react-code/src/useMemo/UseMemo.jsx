import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [inputVal, setInputVal] = useState("");

  const handlePlus = () => {
    setCount((prev) => prev + 1);
  };

  const slowFun = useMemo(() => {
    let num = 20;
    console.log("slow fun called");
    return num;
  }, [count]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={handlePlus}>INCR</button>
      <br />
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <h2>{inputVal}</h2>
      <br />
      {slowFun}
    </div>
  );
};

export default UseMemo;
