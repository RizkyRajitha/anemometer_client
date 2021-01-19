const mqtt = require("mqtt");
let client = mqtt.connect("mqtt://broker.mqttdashboard.com", {
  port: 1883,
  path: "/mqtt",
});

client.on("connect", () => {
  console.log("connected");

  setInterval(() => {
    let val = `${Math.floor((Math.random() * 100) % 50)};${Math.floor(
      (Math.random() * 100) % 50
    )};${Math.floor((Math.random() * 100) % 50)}`;
    console.log("published : " + val);
    client.publish("ultralegendpro", val);
  }, 2000);
});

client.on("error", (error) => console.log(error));
console.log(client.connected);
