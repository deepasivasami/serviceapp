const complaintModel = require("../models/complaintModel");

exports.postservice = async (req, res) => {
  try {
    console.log(req.body); 
    const data = await complaintModel.create(req.body);

    res.status(200).send({
      status: true,
      message: "Complaint saved",
      response: data
    });

  } catch (err) {
    console.log(err);
    res.status(400).send({
      status: false,
      message: err.message
    });
  }
};


exports.getservice = async (req, res) => {
  const data = await complaintModel.find();

  res.send(data);
};

exports.deleteservice = async (req, res) => {
  const del = await complaintModel.deleteOne({
    _id: req.params.id
  });

  res.send(del);
};


exports.updateservice = async (req, res) => {
  const update = await complaintModel.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );

  res.send(update);
};