const express = require("express");
const app = express();

app.use("/random", (req, res, next) => {
  console.log("I am only for random path");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello, I am root");
});

app.use("/random", (req, res) => {
  res.send("this is a random page");
});

// 404
app.use((req, res) => {
  //   res.send("Page not found!");
  res.status(404).send("Page not found!");
});

app.listen(8080, () => {
  console.log("server start");
});
