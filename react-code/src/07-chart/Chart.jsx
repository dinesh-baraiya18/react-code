import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Col, Row } from "react-bootstrap";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BASE_URL = "https://api.coindesk.com/v1/bpi/currentprice.json";

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "First Chart.js",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      backgroundColor: "red",
    },
    {
      label: "Dataset 2",
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      backgroundColor: "blue",
    },
  ],
};

function Chart() {
  const fetchData = async () => {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Row>
      <Col md={8} className="mx-auto mt-5">
        <Bar options={options} data={data} />
      </Col>
    </Row>
  );
}

export default Chart;
