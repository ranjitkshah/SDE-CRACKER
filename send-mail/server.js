const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sendGrid = require("@sendgrid/mail");
const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 2000;
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/api", (req, res) => {
  res.send("api is running");
});

app.post("/api/email", (req, res, next) => {
  console.log(req.body);

  sendGrid.setApiKey(
    "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"
  );
  const msg = {
    to: "Ranjitmaheshshah@gmail.com",
    from: "devkumar5436@gmail.com",
    subject: "SdeCracker:"+req.body.subject,
    html:`<p> <strong> email-ID : </strong> ${req.body.email}
        <br>
        <strong> subject :</strong> ${req.body.subject}
        <br>
        <strong> message :</strong> ${req.body.message}
    </p>
    `
  };

  sendGrid
    .send(msg)
    .then((result) => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      console.log("error: ", err);
      res.status(401).json({
        success: false,
      });
    });
});

app.listen(port, () => {
  console.log("server is running");
});
