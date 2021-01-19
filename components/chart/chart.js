import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import styles from "./chart.module.css";

const Chart = ({ chartData }) => {
  console.log(chartData);
  return (
    <>
      <div className={styles.chart}>
        <Line type="line" redraw={true} data={chartData} />
      </div>
    </>
  );
};
export default Chart;
