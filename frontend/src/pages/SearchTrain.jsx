import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { searchTrainsAPI } from "../api/trainApi";
import { useNavigate } from "react-router-dom";
import background from "../assets/background.jpg";
import { motion } from "framer-motion";

const SearchTrain = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!from || !to || !date) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);
    setSearched(true);

    const result = await searchTrainsAPI({
      from: from.trim(),
      to: to.trim(),
    });

    setTrains(result);
    setLoading(false);
  };

  const handleBookNow = (train) => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login", {
        state: {
          redirectTo: "/passenger-details",
          train,
        },
      });
    } else {
      navigate("/passenger-details", { state: { train } });
    }
  };

  return (
    <>
      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-cover bg-center pt-[180px] px-4 flex flex-col items-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/60 backdrop-blur-md rounded-2xl shadow-2xl w-full max-w-4xl p-10 mb-10"
        >
          <h2 className="text-3xl font-bold text-center mb-6">Search Trains</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            <input
              type="text"
              placeholder="From Station"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="border p-3 rounded w-full"
            />

            <input
              type="text"
              placeholder="To Station"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="border p-3 rounded w-full"
            />

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border p-3 rounded w-full"
            />

            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 w-full"
            >
              Search
            </button>
          </div>
        </motion.div>

        {/* Results Section */}
        <div className="w-full max-w-6xl space-y-4">
          {loading && (
            <p className="text-center text-lg">Searching trains...</p>
          )}

          {!loading && searched && trains.length === 0 && (
            <p className="text-center text-red-500">
              No trains found for this route
            </p>
          )}

          {!loading &&
            trains.map((train, index) => (
              <motion.div
                key={train._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="bg-white p-6 rounded-lg shadow flex flex-col md:flex-row md:justify-between"
              >
                <div>
                  <h3 className="font-bold text-lg">
                    {train.name} ({train.trainNo})
                  </h3>
                  <p className="text-gray-600 mt-1">
                    {train.from} → {train.to}
                  </p>
                  <p className="text-gray-600">
                    {train.departure} → {train.arrival} • {train.duration}
                  </p>
                  <p className="mt-1">Class: {train.class}</p>
                  <p className="mt-1 font-semibold">Fare: ₹{train.fare}</p>
                </div>

                <div className="mt-4 md:mt-0 flex items-center">
                  {train.available ? (
                    <button
                      onClick={() => handleBookNow(train)}
                      className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
                    >
                      Book Now
                    </button>
                  ) : (
                    <span className="text-red-500 font-semibold">
                      Not Available
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
        </div>
      </motion.div>
    </>
  );
};

export default SearchTrain;
