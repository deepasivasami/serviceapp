





// const mongoose = require("mongoose");

// const complaintSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   phone: { type: String, required: true },
//   device: String,
//   model: String,
//   problem: String,
//   serviceType: String,
//   address: String,
//   location: String,
//   image: String,

//   technicianId: String,
//   technicianName: String,

//   status: {
//     type: String,
//     default: "Pending"
//   }

// }, { timestamps: true });

// module.exports = mongoose.model("Complaint", complaintSchema);





// const mongoose = require("mongoose");

// const complaintSchema = new mongoose.Schema({
//   name: String,
//   phone: String,
//   device: String,
//   model: String,
//   problem: String,
//   address: String,
//   location: String,
//   image: String,

//   technicianId: String,
//   technicianName: String,
//   status: {
//     type: String,
//     default: "Pending"
//   }
// });

// module.exports = mongoose.model("Complaint", complaintSchema);









// const mongoose = require("mongoose");

// const complaintSchema = new mongoose.Schema({

//   name: String,
//   phone: String,
//   device: String,
//   model: String,
//   problem: String,
//   address: String,
//   location: String,
//   image: String,

//   technicianId: String,
//   technicianName: String,

//   status: {
//     type: String,
//     default: "Pending"
//   }

// });

// module.exports =
// mongoose.model("Complaint", complaintSchema);



const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({

  name: String,
  phone: String,
  device: String,
  model: String,
  problem: String,
  address: String,
  location: String,
  image: String,

  serviceType: String,

  technicianId: String,
  technicianName: String,

  status: {
    type: String,
    default: "Pending"
  }

});

module.exports =
mongoose.model("Complaint", complaintSchema);