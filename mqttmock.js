let mqtt = require("mqtt");
console.log("buuuuuuuuuuu");
let client = mqtt.connect("mqtt://broker.mqttdashboard.com", {
  port: 8000,
  path: "/mqtt",
});

client.on("connect", function () {
  console.log("connected");
});
