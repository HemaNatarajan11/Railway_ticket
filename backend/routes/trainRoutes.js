const express = require("express");
const router = express.Router();
const Train = require("../models/Train");

router.get("/", async (req, res) => {
  try {
    const { from, to } = req.query;

    const filter = {};

    if (from) {
      filter.from = { $regex: from, $options: "i" }; // case-insensitive
    }

    if (to) {
      filter.to = { $regex: to, $options: "i" };
    }

    const trains = await Train.find(filter);

    res.json(trains);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
