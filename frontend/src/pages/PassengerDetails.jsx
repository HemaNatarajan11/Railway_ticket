import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const PassengerDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const train = location.state?.train;

  const [passenger, setPassenger] = useState({
    name: "",
    age: "",
    gender: "",
    berth: "",
  });

  const [loading, setLoading] = useState(false);

  if (!train) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-100 pt-[220px] px-6">
          No train selected
        </div>
      </>
    );
  }

  const handleChange = (e) => {
    setPassenger({
      ...passenger,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooking = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          trainName: train.name,
          trainNo: train.trainNo,
          from: train.from,
          to: train.to,
          date: train.date || new Date(),
          time: train.departure,
          class: train.class,
          fare: train.fare,
          passengers: [passenger], // sending array
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Booking failed");
      }

      alert("Booking created successfully!");

      // After successful booking → go to MyBookings
      navigate("/mybookings");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gray-100 pt-[220px] px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Passenger Details
          </h2>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-8">
            <h3 className="text-xl font-semibold text-blue-800">
              {train.name} ({train.trainNo})
            </h3>
            <p className="text-gray-700 mt-1">
              {train.from} → {train.to}
            </p>
            <p className="mt-1 font-semibold">
              Class: {train.class} | Fare: ₹{train.fare}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              name="name"
              type="text"
              placeholder="Passenger Name"
              value={passenger.name}
              onChange={handleChange}
              className="border p-3 rounded"
            />

            <input
              name="age"
              type="number"
              placeholder="Age"
              value={passenger.age}
              onChange={handleChange}
              className="border p-3 rounded"
            />

            <select
              name="gender"
              value={passenger.gender}
              onChange={handleChange}
              className="border p-3 rounded"
            >
              <option value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <select
              name="berth"
              value={passenger.berth}
              onChange={handleChange}
              className="border p-3 rounded"
            >
              <option value="">Berth Preference</option>
              <option>Lower</option>
              <option>Middle</option>
              <option>Upper</option>
              <option>No Preference</option>
            </select>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={handleBooking}
              disabled={loading}
              className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg"
            >
              {loading ? "Booking..." : "Confirm Booking"}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default PassengerDetails;
