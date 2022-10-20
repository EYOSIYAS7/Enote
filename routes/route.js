const { Router } = require("express");
const express = require("express");

const rout = express.Router();

const controller = require("../controller/handlers");

rout.post("/order", controller.addData);
rout.get("/", controller.findAll);
rout.get("/see/:id", controller.FindOne);
rout.delete("/delete/:id", controller.deleteData);
rout.get("/takenote", controller.Takenote);
rout.get("/update/:id", controller.updatePage);

rout.post("/change/:id", controller.change);

module.exports = rout;
