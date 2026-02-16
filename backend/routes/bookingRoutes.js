const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Not authorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

// creating
router.post("/", protect, async (req, res) => {
  try {
    const booking = await Booking.create({
      ...req.body,
      user: req.user,
      pnr: Math.floor(1000000000 + Math.random() * 9000000000).toString(),
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get
router.get("/", protect, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
