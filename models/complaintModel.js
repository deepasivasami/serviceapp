

const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name cannot be empty"],
    trim: true
  },
phone: {
  type: String,
  required: [true, "Phone number cannot be empty"]
},

  device:{
     type: String,
    },
  model:{
     type: String,
    },
  problem:{
     type: String
    },
  serviceType:{
     type: String
    },
  address: {
     type: String
    },
  location: {
     type: String
    },
  image: {
     type: String
    },
  status: {
    type: String,
    default: "Pending"
  }
}, { timestamps: true });

module.exports = mongoose.model("Complaint", complaintSchema);