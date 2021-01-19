import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "./dynamicComponent.module.css";
// import Footer from "../footer/footer";
import SpeedBanner from "../speedbanner/speedbanner";
import Chart from "../chart/chart";
import { client } from "../../lib/mqttHandler";
import { arrayAdd } from "../../lib/chartPropsHandle";

export default function DynamicComponent() {
  const [speed, setspeed] = useState([0, 0, 0]);
  const [chartData, setchartData] = useState({
    labels: ["0", "0", "0", "0", "0"],
    datasets: [
      {
        label: "My First dataset",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0, 10, 0, 10, 0],
      },
    ],
  });

  useEffect(() => {
    client.on("connect", function () {
      console.log("connected");
      client.subscribe("ultralegendpro", function (err) {
        if (!err) {
          console.log("successfully susbscribed to topic");
        }
        console.log(err);
      });
    });

    client.on("message", function (topic, message) {
      // message is Buffer
      let msg = message.toString();
      console.log(msg);
      let val = msg.split(";");
      console.log(val);
      setchartData((pre) => {
        console.log(pre);
        pre.labels = arrayAdd(pre.labels, new Date().getMilliseconds());
        pre.datasets[0].data = arrayAdd(pre.datasets[0].data, val[0]);
        return pre;
        // pre.labels = arrayAdd(pre.labels, new Date().getMilliseconds());
      });
      setspeed(val);
      let date = new Date();
    });
    client.on("error", (err) => console.log(err));
  }, []);

  return (
    <>
      <SpeedBanner speed={speed} />
      <div className={styles.main}>
        <div className={styles.secondmainitem}>
          <Chart chartData={chartData} />
        </div>
      </div>
    </>
  );
}
