//  master filter

import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const data = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

const Que3 = () => {
  const [list, setList] = useState();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getCategory = [...new Set(data.map((e) => e.category))];
    setCategory(getCategory);
  }, []);

  console.log(list);



  

  return (
    <div className="container">
      <div style={{ maxWidth: "500px", width: "100%", margin: "40px auto" }}>
        <div className="filtered">
          <input type="text" placeholder="search..." />
          <div>
            <input type="checkbox" id="check" />
            <label htmlFor="check">only on stoke</label>
          </div>
        </div>
        <br />
        <br />
        {category.map((cat, i) => (
          <Table key={i} striped bordered hover className="text-center">
            <thead>
              <tr>
                <th>name</th>
                <th>price</th>
              </tr>
              <tr>
                <th colSpan={2}>{cat}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{"item.name"}</td>
                <td>{"item.price"}</td>
              </tr>
            </tbody>
          </Table>
        ))}
      </div>
    </div>
  );
};

export default Que3;
