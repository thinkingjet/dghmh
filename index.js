const express = require("express");
const https = require("https");
const fs = require("fs");

const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

var router = express.Router();

const app = express();
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

const PORT = process.env.PORT || 3000;

let courses = [
  {
    id: "11",
    name: "Learn Reactjs",
    price: 299,
  },
  {
    id: "22",
    name: "Learn Angular",
    price: 320,
  },
  {
    id: "33",
    name: "Learn Vue",
    price: 2999,
  },
];

router.use(function (req, res, next) {
  // .. some logic here .. like any other middleware
  next();
});

router.get("/", function (req, res, next) {
  document.addEventListener("DOMContentLoaded", async function () {
    const data = await fetch(
      "https://getpickuplines.herokuapp.com/lines/random"
    );
    //" https://gnews.io/api/v4/search?q=weather&token=a38e7f1225ce41d278a77b285823c848"
    const json = await data.json();
    console.log(json);
  });
  // ..
});

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/v1/docs", (req, res) => {
  res.send("Hello from docs");
});

app.get("/api/v1/lcoobject", (req, res) => {
  res.send({
    id: "55",
    name: "Learn code online",
    price: 99,
  });
});

app.get("/api/v1/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/v1/mycourse/:courseid", (req, res) => {
  const mycourse = courses.find((course) => course.id === req.params.courseid);
  res.send(mycourse);
});

app.post("/api/v1/addCourse", (req, res) => {
  console.log(req.body);
  courses.push(req.body);
  res.send(true);
});

app.get("/api/v1/coursequery", (req, res) => {
  let location = req.query.location;
  let device = req.query.device;

  res.send({ location, device });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
