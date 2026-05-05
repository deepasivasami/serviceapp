const mongoose = require("mongoose");

const TechnicianSchema = new mongoose.Schema({
 name: {
  type: String,
  required: [true, "Name cannot be empty"],
    trim: true
  },

  phone: {
    type: String,
    required: [true, "Phone number cannot be empty"],
    unique: true
  },

  password: {
    type: String,
    required: [true, "Password cannot be empty"]
  },

  address: {
    type: String
  },

  role: {
    type: String,
    enum: ["user", "admin", "technician"],
    default: "technician"
  }
});

module.exports = mongoose.model("Technician", TechnicianSchema);