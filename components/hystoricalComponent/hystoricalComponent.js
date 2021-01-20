import { useEffect, useState } from "react";
import styles from "./hystoricalComponent.module.css";
import Chart from "../chart/chart";

const API =
  process.env.NODE_ENV === "production"
    ? "http://localhost:3001"
    : "http://localhost:3001";
    
console.log(process.env.NODE_ENV);

export default function HystoricalComponent() {
  const [chartData, setchartData] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = (interval = "week") => {
    fetch(`${API}/getdatalast${interval}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let lables = data.data.map((ele) => ele.date);
        let maxes = data.data.map((ele) => ele.maxs);
        let avarages = data.data.map((ele) => ele.avarage);

        console.log(lables);
        console.log(maxes);
        let dataset = {
          labels: lables,
          datasets: [
            {
              label: "Max",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(15,76,117,0.4)",
              borderColor: "rgba(15,76,117,1)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgba(15,76,117,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(15,76,117,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: maxes,
            },
            {
              label: "Avarage",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(187,225,250,1,0.4)",
              borderColor: "rgba(187,225,250,1)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgba(187,225,250,1,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(187,225,250,1,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: avarages,
            },
          ],
        };

        setchartData(dataset);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.secondmainitem}>
          <div className={styles.buttongroup}>
            <button className={styles.button} onClick={(e) => getData("week")}>
              Last Week
            </button>
            <button className={styles.button} onClick={(e) => getData("month")}>
              Last Month
            </button>
            <button className={styles.button} onClick={(e) => getData("day")}>
              Last 24 Hours
            </button>
          </div>

          <Chart chartData={chartData} />
        </div>
      </div>
    </>
  );
}
