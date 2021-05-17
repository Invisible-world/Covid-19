import React, { useState, useEffect } from "react";

import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./chart.module.css";

const Chart = ({ country, datas: { confirmed, recovered, deaths } }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchedDailyData = async () => {
      setData(await fetchDailyData());
    };
    fetchedDailyData();
  }, []);

  const lineChart = data ? (
    <Line
      data={{
        labels: data.map(({ date }) => date),
        datasets: [
          {
            data: data.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: "true",
          },
          {
            data: data.map(({ deaths }) => deaths),
            label: "Death",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: "true",
          },
        ],
      }}
    />
  ) : null;

  const BarChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0,0,255,0.5)",
              "rgba(0,255,0,0.5)",
              "rgba(255,0,0,0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `current state of ${country}` },
      }}
    />
  ) : null;
  console.log(confirmed, recovered, deaths);
  return (
    <div className={styles.container} xs={24} md={12} xl={12}>{country ? BarChart : lineChart}</div>
  );
};

export default Chart;
