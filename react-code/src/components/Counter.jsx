import React from "react";
import { useGlobleContext } from "../context/context";

const Counter = () => {
  const { products, loading, error } = useGlobleContext();

  if (loading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>{JSON.stringify(error.message)}</div>;
  }

  return (
    <div>
      {products?.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};

export default Counter;
