// const express = require("express");
// const app = express();

// app.use((req, res, next) => {
//   console.log("Hi, I am in middleware");
//   next();
// });

// app.get("/", (req, res) => {
//   res.send("Hello, I am root");
// });

// app.use("/random", (req, res) => {
//   res.send("this is a random page");
// });

// app.listen(8080, () => {
//   console.log("server start");
// });
const express = require("express");
const app = express();

// app.use((req, res, next) => {
//   console.log("Hi, I am in middleware");
//   next();
// });
app.use((req, res, next) => {
  console.log("Hi, I am in middleware");
  return next(); //good practice
  //   console.log("I m after next"); //bad practice jo krna h next se phle kro
});
app.use((req, res, next) => {
  console.log("Hi, I am in 2nd middleware");
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
