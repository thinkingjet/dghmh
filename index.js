const express = require("express");
var bodyParser = require("body-parser");

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);

var urlencodedParser = bodyParser.urlencoded({ extended: false });

let email;
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  email = req.query.location;
  res.sendFile(__dirname + "/index.html");
});

app.post("/mail", urlencodedParser, function (req, res) {
  const msg = {
    to: req.body.email, // Change to your recipient
    from: "angad1411@gmail.com", // Change to your verified sender
    subject: "Intimate Express",
    text: "and easy to do anywhere, even with Node.js",
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });

  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
