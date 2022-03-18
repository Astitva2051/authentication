const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  mobile: {
    type: Number,
    required: true,
    unique: true,
  },

  birthdate: {
    type: String,
    required: true,
  },

  admin: {
    type: Boolean,
    default: false,
  }
});

module.exports = mongoose.model("user", userSchema);
