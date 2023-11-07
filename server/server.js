const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const route = require("./routes/route");
require("dotenv").config();
const { response } = require("express");

const app = express();

// const dbUrl =
//   "mongodb+srv://eyosiyas:690177@main.p7kphow.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(process.env.mongo_url)
  .then(console.log("connection made"))
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "ejs");
app.set("views", "../client/views");
app.use(express.static("../client/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(route);

app.listen(process.env.PORT || 4000, (req, res) => {
  console.log(" listening on port 4000 ");
});
