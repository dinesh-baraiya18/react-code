// que 1 = when select first dropdown then change value of other dropdown according to first one
import React, { useEffect, useState } from "react";

const countries = [
  {
    name: "india",
    value: "IN",
    cities: ["delhi", "mumbai"],
  },
  {
    name: "pakistan",
    value: "PAK",
    cities: ["karachi", "lahore"],
  },
  {
    name: "bangadesh",
    value: "BG",
    cities: ["dhaka", "chittagong"],
  },
];

const Que1 = () => {
  const [getCities, setGetCities] = useState("");

  // useEffect(() => {
  //   handleChangeContries();
  // }, []);

  const handleChangeContries = (e) => {
    setGetCities(e.target.value);
  };

  return (
    <div className="container">
      {/* 1st dropdown  */}
      <select onChange={handleChangeContries}>
        {countries.map((item, i) => (
          <option value={item.value} key={i}>
            {item.name}
          </option>
        ))}
      </select>

      {/* 2nd dropdown   */}
      <select>
        {countries.map((item) => {
          if (item.value === getCities) {
            return item.cities.map((item, i) => (
              <option value={item} key={i}>
                {item}
              </option>
            ));
          } else {
            return null;
          }
        })}
      </select>
    </div>
  );
};

export default Que1;
