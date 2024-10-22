const express = require("express");
const app = express();
// kuch nhi krega load hoga bs cuz middle ware do hi kam kr skta h 1st response bhej skta h and 2nd next middle ware ko call krega
// app.use(() => {
//   console.log("Hi, I am in middleware");
// });
app.use((req, res) => {
  console.log("Hi, I am in middleware");
  res.send("middleware finised"); // har k page)incoming requ  est) pe /random /home sb pe yhi print hoga
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/random", (req, res) => {
  res.send("this is a random page");
});

app.listen(8080, () => {
  console.log("server start");
});
