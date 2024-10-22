const express = require("express");
const app = express();

// app.use((req, res, next) => {
//   //   console.log(req);
//   //   console.log(req.method);
//   //   console.log(req.method, req.hostname);
//   console.log(req.method, req.hostname, req.path);
//   next();
// });

// logger - morgan
app.use((req, res, next) => {
  req.time = Date.now();
  console.log(req.method, req.hostname, req.path, req.time);
  next();
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
