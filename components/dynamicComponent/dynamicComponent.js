import { useEffect, useState } from "react";
import styles from "./dynamicComponent.module.css";
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
        label: "Realtime Data",
        fill: false,
        lineTension: 0.25,
        backgroundColor: "rgba(187,225,250,0.4)",
        borderColor: "rgba(187,225,250,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(187,225,250,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(187,225,250,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 10,
        data: [0, 0, 0, 0, 0],
      },
    ],
  });

  useEffect(() => {
    client.on("connect", function () {
      console.log("connected");
      client.subscribe("ultralegendpro", function (err) {
        if (!err) {
          console.log("successfully susbscribed to topic");
        } else {
          console.log(err);
        }
      });
    });

    client.on("message", function (topic, message) {
      let msg = message.toString();
      console.log(msg);
      let val = msg.split(";");
      console.log(val);
      setchartData((pre) => {
        console.log(pre);
        pre.labels = arrayAdd(
          pre.labels,
          `${new Date().getHours()} ${new Date().getMinutes()} ${new Date().getSeconds()}:${new Date().getMilliseconds()}`
        );
        pre.datasets[0].data = arrayAdd(pre.datasets[0].data, val[0]);
        return pre;
      });
      setspeed(val);
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
