

// const complaintModel = require("../models/complaintModel");

// // CREATE
// exports.postservice = async (req, res) => {
//   try {
//     const data = await complaintModel.create(req.body);
//     res.status(200).send(data);
//   } catch (err) {
//     res.status(400).send(err.message);
//   }
// };

// // GET ALL
// exports.getservice = async (req, res) => {
//   const data = await complaintModel.find();
//   res.send(data);
// };

// // DELETE
// exports.deleteservice = async (req, res) => {
//   const del = await complaintModel.deleteOne({ _id: req.params.id });
//   res.send(del);
// };

// // UPDATE
// exports.updateservice = async (req, res) => {
//   const update = await complaintModel.updateOne(
//     { _id: req.params.id },
//     { $set: req.body }
//   );
//   res.send(update);
// };

// // 🔥 ASSIGN TECHNICIAN
// exports.assignTechnician = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { technicianId, technicianName } = req.body;

//     const update = await complaintModel.findByIdAndUpdate(
//       id,
//       {
//         technicianId,
//         technicianName,
//         status: "Assigned"
//       },
//       { returnDocument: "after" }
//     );

//     res.send(update);
//   } catch (err) {
//     res.status(400).send(err.message);
//   }
// };

// // 🔥 GET TECHNICIAN JOBS
// exports.getTechnicianJobs = async (req, res) => {
//   try {
//     const { techId } = req.params;

//     const data = await complaintModel.find({
//       technicianId: techId
//     });

//     res.send(data);
//   } catch (err) {
//     res.status(400).send(err.message);
//   }
// };


// app.get("/technician-complaints/:techId", async (req, res) => {
//   try {
//     const complaints = await Complaint.find({
//       technicianId: req.params.techId
//     });

//     res.json(complaints);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });









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


exports.assignTechnician = async (req, res) => {

  try {

    const { id } = req.params;

    const {
      technicianId,
      technicianName
    } = req.body;

    const update =
      await complaintModel.findByIdAndUpdate(

        id,

        {
          technicianId,
          technicianName,
          status: "Assigned"
        },

        {
          returnDocument: "after"
        }

      );

    res.send(update);

  }

  catch (err) {

    res.status(400).send(err.message);

  }

};


exports.getTechnicianJobs =
async (req, res) => {

  try {

    const { techId } = req.params;

    const data =
      await complaintModel.find({

        technicianId: techId

      });

    res.send(data);

  }

  catch (err) {

    res.status(400).send(err.message);

  }

};