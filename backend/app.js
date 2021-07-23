// eslint-disable-next-line no-undef
const express = require("express");
// eslint-disable-next-line no-undef
const mongoose = require("mongoose");
// eslint-disable-next-line no-undef
const userRoutes= require("./routes/userRoutes.js");
require("dotenv/config")

const app = express();

//middleware
app.use("/users", userRoutes);

//Routes
app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/posts", (req, res) => {
  res.send("posts");
});

// connect to database

mongoose.connect(

  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, db) => {
    console.log("connected to database");
  }
);

app.listen(3000);
