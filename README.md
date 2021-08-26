# vscp-demo-mqtt-web

:warning: This is work in progress.

This project holds samples for VSCP MQTT over websocket using a web browser and the [VSCP demo server](https://github.com/grodansparadis/vscp/wiki/Demo). To use it clone the project on your computer and open the html file in your web browser.

The excellent [MQTT.js](https://github.com/mqttjs/MQTT.js) code is used as the engine for the samples. 

It is recommended that you open the development tools window in your browser to be able to spot errors (this is a demo after all...).

## index.html
Contains links to all files bellow

## simple.html
This file connects using websockets to the VSCP demo server and subscribe to the topic topic _vscp/#_ and display the real time events received. 

## gauge1.html
This file connects using websockets to the VSCP demo server and show the live temperature in our fridge in a Google gauge.

## gauge2.html
This file connects using websockets to the VSCP demo server and show the live temperature in our fridge in a bernii/gauge.js gauge.