const mongoose = require("mongoose");

const trainSchema = new mongoose.Schema({
  trainNo: { type: String, required: true },
  name: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  departure: String,
  arrival: String,
  duration: String,
  duration: String,
  class: String,
  available: Boolean,
  fare: Number,
});

module.exports = mongoose.model("train", trainSchema);
