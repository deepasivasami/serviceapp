// const complaintModel = require("../models/complaintModel");

// exports.postservice = async (req, res) => {
//   try {
//     console.log(req.body); 
//     const data = await complaintModel.create(req.body);

//     res.status(200).send({
//       status: true,
//       message: "Complaint saved",
//       response: data
//     });

//   } catch (err) {
//     console.log(err);
//     res.status(400).send({
//       status: false,
//       message: err.message
//     });
//   }
// };


// exports.getservice = async (req, res) => {
//   const data = await complaintModel.find();

//   res.send(data);
// };

// exports.deleteservice = async (req, res) => {
//   const del = await complaintModel.deleteOne({
//     _id: req.params.id
//   });

//   res.send(del);
// };


// exports.updateservice = async (req, res) => {
//   const update = await complaintModel.updateOne(
//     { _id: req.params.id },
//     { $set: req.body }
//   );

//   res.send(update);
// };



// exports.assignTechnician = async (req, res) => {
//   try {
//     const { id } = req.params; 
//     const { technicianId, technicianName } = req.body; 

//     const update = await complaintModel.findByIdAndUpdate(
//   id,
//   {
//     technicianId: technicianId,
//     technicianName: technicianName,
//     status: "Assigned"
//   },
//   { returnDocument: "after" }   
// );

//     res.status(200).send({
//       status: true,
//       message: "Technician assigned successfully",
//       response: update
//     });

//   } catch (err) {
//     res.status(400).send({ status: false, message: err.message });
//   }
// };



// exports.getTechnicianJobs = async (req, res) => {
//   try {
//     const { techId } = req.params;

//     const data = await complaintModel.find({
//       technicianId: techId
//     });

//     res.status(200).send(data);
//   } catch (err) {
//     res.status(400).send({ status: false, message: err.message });
//   }
// };




const complaintModel = require("../models/complaintModel");

// CREATE
exports.postservice = async (req, res) => {
  try {
    const data = await complaintModel.create(req.body);
    res.status(200).send(data);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

// GET ALL
exports.getservice = async (req, res) => {
  const data = await complaintModel.find();
  res.send(data);
};

// DELETE
exports.deleteservice = async (req, res) => {
  const del = await complaintModel.deleteOne({ _id: req.params.id });
  res.send(del);
};

// UPDATE
exports.updateservice = async (req, res) => {
  const update = await complaintModel.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(update);
};

// 🔥 ASSIGN TECHNICIAN
exports.assignTechnician = async (req, res) => {
  try {
    const { id } = req.params;
    const { technicianId, technicianName } = req.body;

    const update = await complaintModel.findByIdAndUpdate(
      id,
      {
        technicianId,
        technicianName,
        status: "Assigned"
      },
      { returnDocument: "after" }
    );

    res.send(update);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

// 🔥 GET TECHNICIAN JOBS
exports.getTechnicianJobs = async (req, res) => {
  try {
    const { techId } = req.params;

    const data = await complaintModel.find({
      technicianId: techId
    });

    res.send(data);
  } catch (err) {
    res.status(400).send(err.message);
  }
};