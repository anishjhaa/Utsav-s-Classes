const express = require("express");
const app = express();

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  throw new Error("ACCESS DENIED!");
};

app.get("/api", checkToken, (req, res) => {
  res.send("data");
});

app.get("/err", (req, res) => {
  abcd = abcd;
});

app.use((err, req, res, next) => {
  //   console.log(err);
  console.log("---ERROR---");
  next(err);
});
app.use((err, req, res, next) => {
  //   console.log(err);
  console.log("---ERROR2---");
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
