const mongoose = require("mongoose");

const passengerSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  berth: String,
});

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    trainName: String,
    trainNo: String,
    from: String,
    to: String,
    date: Date,
    time: String,
    class: String,
    fare: Number,
    passengers: [passengerSchema],
    status: {
      type: String,
      default: "Confirmed",
    },
    pnr: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model("Booking", bookingSchema);
