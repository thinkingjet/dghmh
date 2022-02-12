const express = require("express");

const app = express();

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
