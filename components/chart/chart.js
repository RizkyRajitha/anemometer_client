import React from "react";
import { Line } from "react-chartjs-2";
import styles from "./chart.module.css";
const Chart = ({ chartData }) => {
  console.log(chartData);
  return (
    <>
      <div className={styles.chart}>
        <Line
          type="line"
          redraw={true}
          data={chartData}
          responsive={true}
          options={{
            animation: {
              duration: 150,
              easing: "linear",
              // onComplete: () => {
              //   if (shiftCount) {
              //     chart.data.datasets[0].data.splice(0, shiftCount - 1);
              //     chart.data.labels.splice(0, shiftCount - 1);
              //     shiftCount = 1;
              //     chart.scales.x.options.min = chart.data.labels[1];
              //     chart.update();
              //   }
              // },
            },
            scales: {
              yAxes: [
                {
                  time: true,
                  // type: "Speed",
                  display: true,
                  ticks: {
                    beginAtZero: true,
                    min: 0,
                    max: 100,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </>
  );
};
export default Chart;
