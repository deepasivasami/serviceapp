const { response } = require("express");
const RegisterModel = require("../models/RegisterModel");
const TechnicianModel = require("../models/TechincainModel");

exports.postreg = async (req, res) => {
  try {
    const data = await RegisterModel.create(req.body);

    res.status(200).send({
      status: true,
      message: "user saved",
      response: data
    });
  } catch (err) {
    res.status(400).send({
      status: false,
      message: err.message
    });
  }
};




exports.getreg = async (req, res) => {
  const data = await RegisterModel.find();
  res.send(data);
};


exports.deletereg = async (req, res) => {
  const del = await RegisterModel.deleteOne({
    _id: req.params.id
  });

  res.send(del);
};


exports.updatereg = async (req, res) => {
  const update = await RegisterModel.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );

  res.send(update);
};








exports.loginUsers = async (req, res) => {
  try {
    console.log(req.body);
    const user = await RegisterModel.findOne(req.body)
  const technician = await TechnicianModel.findOne(req.body);

    if (user || technician){
       res.status(200).send({
        status: true,
        message: "user login sucees",
        response: "user || technician"
      })
    }else{
       res.status(400).send({
        status: false,
        message: "not",
        response: user
      })
    }
     


  } catch (err) {
    return res.status(400).send({
      status: false,
      message: err.message
    });
  }
}

