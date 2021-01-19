const mqtt = require("mqtt");
export let client = mqtt.connect("mqtt://broker.mqttdashboard.com", {
  port: 8000,
  path: "/mqtt",
});
