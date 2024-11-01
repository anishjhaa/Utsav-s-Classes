const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./Models/chat.js");
const methodOverride = require("method-override");

const ExpressError = require("./ExpressError.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method "));

main()
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => console.log("Error connecting to MongoDB:", err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakeWhatsapp");
}

// Home Route
app.get("/", (req, res) => {
  throw new ExpressError(404, "Page not found");
  res.send("Root is working");
});

// Index route
// Chats route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  // console.log(chats);
  // res.send("Working");
  res.render("index.ejs", { chats });
});

// New Route
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

// Create Route
app.post("/chats", async (req, res) => {
  try {
    let { from, to, msg } = req.body;
    let newChat = new Chat({
      from: from,
      to: to,
      msg: msg,
      created_at: new Date(),
    });
    console.log(newChat);
    newChat
      .save()
      .then((res) => {
        console.log("chats saved");
      })
      .catch((err) => {
        console.log("err while saving");
      });
    res.redirect("/chats");
  } catch (err) {
    next(err); //default handler k pass gyi call
  }
});

// Edit Route

app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
});

// NEW - Show Routes
app.get("/chats/:id", async (req, res, next) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  if (!chat) {
    // throw new ExpressError(404, "Chat not found");
    next(new ExpressError(404, "Chat not found"));
  }
  res.render("edit.ejs", { chat });
});

// Update Route
app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { msg: newmsg } = req.body;
  let updatedChat = await Chat.findByIdAndUpdate(
    id,
    { msg: newmsg },
    { runValidators: true, new: true }
  );
  console.log(updatedChat);
  res.redirect("/chats");
});

// Error handling middleware simple(default)
app.use((err, req, res, next) => {
  let { status = 500, message = "Some Error Occurred" } = err;
  res.status(status).send(message);
});

// Delete Route
app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let deletedChat = await Chat.findByIdAndDelete(id);
  console.log(deletedChat);
  res.redirect("/chats");
});

app.listen(3000, () => {
  console.log("Server is running on port 8080");
});
