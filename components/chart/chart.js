import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const Chart = ({ chartData }) => {
  console.log(chartData);
  // const [data, setdata] = useState({
  //   labels: ["January", "February", "March", "April", "May", "June", "July"],
  //   datasets: [
  //     {
  //       label: "My First dataset",
  //       fill: false,
  //       lineTension: 0.1,
  //       backgroundColor: "rgba(75,192,192,0.4)",
  //       borderColor: "rgba(75,192,192,1)",
  //       borderCapStyle: "butt",
  //       borderDash: [],
  //       borderDashOffset: 0.0,
  //       borderJoinStyle: "miter",
  //       pointBorderColor: "rgba(75,192,192,1)",
  //       pointBackgroundColor: "#fff",
  //       pointBorderWidth: 1,
  //       pointHoverRadius: 5,
  //       pointHoverBackgroundColor: "rgba(75,192,192,1)",
  //       pointHoverBorderColor: "rgba(220,220,220,1)",
  //       pointHoverBorderWidth: 2,
  //       pointRadius: 1,
  //       pointHitRadius: 10,
  //       data: [65, 59, 80, 81, 56, 55, 40],
  //     },
  //   ],
  // });
  // useEffect(() => {
  //   setdata(chartData);
  // }, [chartData]);

  return (
    <>
      <div style={{ width: "50vw", height: "30vh" }}>
        <Line
          key={JSON.stringify(chartData.lables)}
          type="line"
          redraw={true}
          data={chartData}
        />
      </div>
    </>
  );
};
export default Chart;
