import React, { useRef } from "react";
import { useNavigation } from "react-router-dom";

const UseRef2 = () => {
  const divRef = useRef();
  const his = useNavigation();
  console.log(his);

  const handleChnageBG = () => {
    divRef.current.style.background = "Red";
  };

  return (
    <div className="m-5 text-center">
      <div
        ref={divRef}
        style={{
          width: "50px",
          height: "50px",
          border: "1px solid #000",
        }}
      ></div>
      <br />
      <button onClick={handleChnageBG}>change BG</button>
    </div>
  );
};

export default UseRef2;
