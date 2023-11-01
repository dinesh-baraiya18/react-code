import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPost, increment } from "./redux/features/counterSlice";

const base_url = "https://jsonplaceholder.typicode.com/posts";

const ReduxCounter = () => {
  const [input, setInput] = useState(0);
  const dispatch = useDispatch();

  const { num, data, pending, error } = useSelector((state) => state.data);

  const handlePlus = () => {
    dispatch(increment(input));
  };
  useEffect(() => {
    dispatch(getPost(base_url));
  }, []);

  if (pending) {
    return <h1>Loading....</h1>;
  }
  if (error) {
    return <p>error is {error}</p>;
  }
  console.log(pending);
  console.log(data);
  return (
    <div>
      Counter with RTK
      <h1>{num}</h1>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handlePlus}>plus</button>
    </div>
  );
};

export default ReduxCounter;
