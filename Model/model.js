const mongoose = require("mongoose");

// Schema is a function to create orderSchema which is an object that controls the structure of the docs
const Schema = mongoose.Schema;

const noteSchema = new Schema(
  {
    title: {
      type: "string",
    },
    subject: {
      type: "string",
    },
    note: {
      type: "string",
    },
  },
  {
    timestamps: true,
  }
);
const notes = mongoose.model("notes", noteSchema);

module.exports = notes;
