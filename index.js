const express = require("express");
const https = require("https");
const fs = require("fs");

const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

var router = express.Router();

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);

document.getElementById("mail-btn").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("ji");
  const mailId = document.getElementById(".mail-list");
  const msg = {
    to: mailId, // Change to your recipient
    from: "angad1411@gmail.com", // Change to your verified sender
    subject: "Intimate Express",
    text: "and easy to do anywhere, even with Node.js",
  };

  sgMail
    .send(msg)
    .then(() => {
      alert("Email sent");
    })
    .catch((error) => {
      alert(error);
    });
});

const app = express();
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

const PORT = process.env.PORT || 3000;

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
