import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "./home.module.css";
import Footer from "../components/footer/footer";
import SpeedBanner from "../components/speedbanner/speedbanner";
import Chart from "../components/chart/chart";
let mqtt = require("mqtt");

export default function Home() {
  const [speed, setspeed] = useState([0, 0, 0]);
  const [chartData, setchartData] = useState({
    labels: [],
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
        data: [],
      },
    ],
  });

  useEffect(() => {
    let client = mqtt.connect("mqtt://broker.mqttdashboard.com", {
      port: 8000,
      path: "/mqtt",
    });
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
      setspeed(val);
      let date = new Date();
      setchartData((pre) => {
        if (pre.labels.length > 4) {
          let tempLable = pre.labels;
          let tempData = pre.datasets[0].data;

          tempLable = tempLable.slice(1);

          tempLable.push(
            `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`
          );

          tempData = tempData.slice(1);
          tempData.push(val[0]);

          pre.labels = tempLable;
          pre.datasets[0].data = tempData;
          return pre;
        } else {
          console.log(pre);

          let tempLable = pre.labels;
          let tempData = pre.datasets[0].data;

          tempLable.push(
            `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`
          );
          tempData.push(val[0]);
          pre.labels = tempLable;
          pre.datasets[0].data = tempData;
          return pre;
        }
      });
    });
    client.on("error", (err) => console.log(err));
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Rizky Labs</h1>
        <SpeedBanner speed={speed} />
        <div className={styles.main}>
          <div className={styles.secondmainitem}>
            <Chart chartData={chartData} />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

//<div>Icons made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

/**
 *     <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </div>
 */
