"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var port = 8080;
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var latest = {
    chart: {
        data: [
            {
                label: "Apple",
                value: 1
            },
            {
                label: "Orange",
                value: 5
            },
            {
                label: "Bannanas",
                value: 2
            },
            {
                label: "Pineapples",
                value: 10
            }
        ],
        axisInfo: {
            x: {
                label: "Fruit"
            },
            y: {
                label: "Count"
            }
        }
    },
    scatter: {
        data: [
            { x: 14.2, y: 215 },
            { x: 16.4, y: 325 },
            { x: 11.9, y: 185 },
            { x: 15.2, y: 332 },
            { x: 18.5, y: 406 },
            { x: 22.1, y: 522 },
            { x: 19.4, y: 412 },
            { x: 25.1, y: 614 },
            { x: 23.4, y: 544 },
            { x: 18.1, y: 421 },
            { x: 22.6, y: 445 },
            { x: 17.2, y: 408 }
        ],
        axisInfo: {
            y: {
                label: "Ice Cream Sales ($)"
            },
            x: {
                label: "Temp (o)C"
            }
        }
    }
};
setInterval(function () {
    latest = {
        chart: {
            data: [
                {
                    label: "Apple",
                    value: getRandomInt(1, 10)
                },
                {
                    label: "Orange",
                    value: getRandomInt(1, 12)
                },
                {
                    label: "Bannanas",
                    value: getRandomInt(1, 10)
                },
                {
                    label: "Pineapples",
                    value: getRandomInt(1, 10)
                }
            ],
            axisInfo: {
                x: {
                    label: "Fruit"
                },
                y: {
                    label: "Count"
                }
            }
        },
        scatter: {
            data: [
                { x: 14.2, y: getRandomInt(200, 215) },
                { x: 16.4, y: getRandomInt(220, 325) },
                { x: 11.9, y: getRandomInt(230, 300) },
                { x: 15.2, y: getRandomInt(240, 332) },
                { x: 18.5, y: getRandomInt(250, 406) },
                { x: 22.1, y: getRandomInt(260, 522) },
                { x: 19.4, y: getRandomInt(270, 412) },
                { x: 25.1, y: getRandomInt(280, 614) },
                { x: 23.4, y: getRandomInt(290, 544) },
                { x: 18.1, y: getRandomInt(300, 421) },
                { x: 22.6, y: getRandomInt(310, 445) },
                { x: 17.2, y: getRandomInt(320, 408) }
            ],
            axisInfo: {
                y: {
                    label: "Ice Cream Sales ($)"
                },
                x: {
                    label: "Temp (o)C"
                }
            }
        }
    };
}, 1000);
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.get("/", function (req, res) {
    res.json(latest);
});
app.post("/", function (req, res) {
    latest = req.body;
    res.send("OK!");
});
app.listen(port);
console.log("listen on port " + port);
