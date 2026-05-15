const TechincainModel = require("../models/TechincainModel");
const { response } = require("express");




exports.posttech = async (req, res) => {
  try {
    const data = await TechincainModel.create(req.body);

    res.status(200).send({
      status: true,
      message: "Technician saved",
      response: data
    });
  } catch (err) {
    res.status(400).send({
      status: false,
      message: err.message
    });
  }
};




exports.gettech = async (req, res) => {
  const data = await TechincainModel.find();
  res.send(data);
};


exports.deletetech = async (req, res) => {
  const del = await TechincainModel.deleteOne({
    _id: req.params.id
  });

  res.send(del);
};


exports.updatetech = async (req, res) => {
  const update = await TechincainModel.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );

  res.send(update);
};







