const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

app.get("/admin", (req, res) => {
  throw new ExpressError(403, "Access is Forbidden");
});

app.get("/api", checkToken, (req, res) => {
  res.send("data");
});

app.get("/err", (req, res) => {
  abcd = abcd;
});

app.use((err, req, res, next) => {
  console.log("--Error--");
  res.send(err);
});

app.get("/", (req, res) => {
  res.send("Hello, I am root");
});
app.use("/random", (req, res) => {
  res.send("this is a random page");
});

app.listen(8080, () => {
  console.log("server start");
});
