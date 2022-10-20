const notes = require("../Model/model");

// add a data
const addData = (req, res) => {
  const data = req.body;
  // this is an object and it has a schema to  structure it properly
  const docs = new notes(data);
  docs
    .save()
    .then(res.redirect("/"))
    .catch((err) => {
      console.log(err);
    });
};
// find all and display
const findAll = async (req, res) => {
  const result = await notes.find().sort({ createdAt: -1 });

  res.render("Home", { notes: result });
};

const Takenote = (req, res) => {
  res.render("takenote");
};
// find one and display details
const FindOne = async (req, res) => {
  //req.params is an object

  const id = req.params.id;

  const result = await notes.findById(id);
  res.render("details", { notes: result });
};

// delete document by id
const deleteData = async (req, res) => {
  const id = req.params.id;
  const result = await notes.findByIdAndDelete(id);
  res.json({ redirect: "/" });
};

// render update page
const updatePage = async (req, res) => {
  const id = req.params.id;

  const result = await notes.findById(id);

  res.render("update", { id: id, notes: result });
};

// update document in the db
const change = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  const result = await notes.findByIdAndUpdate(
    id,
    {
      title: data.title,
      subject: data.subject,
      note: data.note,
    },
    { new: true }
  );
  res.redirect("/");
};

// export the handlers

module.exports = {
  addData,
  findAll,
  FindOne,
  deleteData,
  updatePage,
  change,
  Takenote,
};
