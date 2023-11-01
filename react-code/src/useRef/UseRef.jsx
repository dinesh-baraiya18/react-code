import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const num = useRef(0);
  const [inputVal, setInputVal] = useState("");

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  useEffect(() => {
    num.current = num.current + 1;
  });

  return (
    <div className="m-5 text-center">
      <input
        type="text"
        className="form-control mb-5 w-50 mx-auto"
        value={inputVal}
        onChange={handleChange}
      />
      <h2>re render component {num.current}</h2>
    </div>
  );
};

export default UseRef;
