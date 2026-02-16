const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Train = require("./models/Train");

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const trains = [
  {
    trainNo: "12601",
    name: "Chennai Express",
    from: "Chennai",
    to: "Bangalore",
    departure: "06:00",
    arrival: "14:30",
    duration: "8h 30m",
    class: "Sleeper",
    available: true,
    fare: 450,
  },
  {
    trainNo: "12028",
    name: "Shatabdi Express",
    from: "Chennai",
    to: "Bangalore",
    departure: "07:15",
    arrival: "12:45",
    duration: "5h 30m",
    class: "3A",
    available: false,
    fare: 900,
  },
  {
    trainNo: "12639",
    name: "Brindavan Express",
    from: "Chennai",
    to: "Bangalore",
    departure: "17:30",
    arrival: "23:00",
    duration: "5h 30m",
    class: "2A",
    available: true,
    fare: 500,
  },
];

const seedData = async () => {
  await Train.deleteMany();
  await Train.insertMany(trains);
  console.log("Train data inserted");
  process.exit();
};

seedData();
