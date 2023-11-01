import React, { useState } from "react";

const data = [
  {
    name: "abc",
    age: 25,
  },
  {
    name: "edf",
    age: 30,
  },
  {
    name: "xyz",
    age: 20,
  },
  {
    name: "pqr",
    age: 32,
  },
];

const filterData = data.filter((e) => e.age < 26);

// less than 4 resolve and greather than 4 reject

const newPromise = new Promise((resolve, reject) => {
  let num = 5;

  if (num < 4) {
    resolve("value is less than");
  } else {
    reject("value is greater than");
  }
});

newPromise
  .then((result) => {
    console.log("succecss =>" + result);
  })
  .catch((error) => {
    console.log("error =>" + error);
  });

const Que4 = () => {
  return (
    <div className="contaienr">
      {filterData.map(({ name, age }, i) => (
        <div key={i}>
          {i} {name} {age}
        </div>
      ))}
    </div>
  );F
};

export default Que4;
