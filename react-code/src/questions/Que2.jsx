// Que 2 = this arr do list with delet function and front of checkbox when check after show delet btn

import React, { useState } from "react";
import styled from "styled-components";

const Que2 = () => {
  const arr = ["play cricket", "play video games", " read book"];

  const [list, setList] = useState(arr);
  const [isChecked, setIsChecked] = useState(false);

  const deleteList = (i) => {
    const filterArr = list.filter((item, index) => {
      return index !== i;
    });

    setList(filterArr);
  };

  return (
    <List>
      {list.map((item, index) => {
        return (
          <li key={index}>
            <input
              type="checkbox"
              style={{ marginRight: "10px" }}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            {item}
            <button
              className="btn btn-danger"
              style={{ marginLeft: "20px" }}
              onClick={() => deleteList(index)}
              disabled={!isChecked}
            >
              delete
            </button>
          </li>
        );
      })}
    </List>
  );
};

export default Que2;

const List = styled.ul`
  margin: 30px;
  list-style: none;
`;
