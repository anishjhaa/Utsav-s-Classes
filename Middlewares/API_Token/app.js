const express = require("express");
const app = express();
app.use("api", (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  res.send("ACCESS DENIED!");
});

app.get("/", (req, res) => {
  res.send("Hello, I am root");
});

app.get("/api", (req, res) => {
  res.send("data");
});
app.use("/random", (req, res) => {
  res.send("this is a random page");
});

app.listen(8080, () => {
  console.log("server start");
});
