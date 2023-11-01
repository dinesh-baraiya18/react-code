import React from "react";
import useFetch from "./useFetch";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

const Main = () => {
  const { data, loading, error } = useFetch(BASE_URL);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Main;
