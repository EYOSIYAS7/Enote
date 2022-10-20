const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const route = require("./routes/route");

const { response } = require("express");

const app = express();

const dbUrl = "mongodb://localhost:27017/Enote";

mongoose
  .connect(dbUrl)
  .then(console.log("connection made"))
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(route);

app.listen(3000, (req, res) => {
  console.log(" listening on port 3000 ");
});
