const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
  userName: {
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
    default: "user"
  }
});

module.exports = mongoose.model("Register", RegisterSchema);