import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import background from "../assets/background.jpg";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const statusStyles = {
    Confirmed: "bg-green-100 text-green-700",
    Cancelled: "bg-red-100 text-red-700",
    RAC: "bg-yellow-100 text-yellow-700",
    WL: "bg-gray-200 text-gray-700",
  };

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch("http://localhost:5000/api/bookings", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch bookings");
        }

        setBookings(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  return (
    <>
      <Navbar />

      <div
        className="min-h-screen bg-cover bg-center pt-[180px] px-4 flex flex-col items-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="bg-white/50 backdrop-blur-md rounded-2xl shadow-2xl w-full max-w-4xl p-10 mb-10">
          <h2 className="text-3xl font-bold mb-8">My Bookings</h2>

          {loading && <p>Loading bookings...</p>}

          {!loading && bookings.length === 0 && (
            <div className="bg-white p-10 rounded-xl shadow text-center">
              <p className="text-xl mb-4">🚆 No bookings found</p>
              <Link
                to="/search"
                className="text-blue-600 font-semibold underline"
              >
                Search Trains
              </Link>
            </div>
          )}

          <div className="space-y-6">
            {bookings.map((booking) => (
              <div
                key={booking._id}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-bold">
                      {booking.trainName} ({booking.trainNo})
                    </h3>
                    <p className="text-gray-600">
                      {booking.from} → {booking.to}
                    </p>
                  </div>

                  <span
                    className={`mt-3 md:mt-0 px-4 py-1 rounded-full text-sm font-semibold ${
                      statusStyles[booking.status]
                    }`}
                  >
                    {booking.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
                  <p>
                    <strong>PNR:</strong> {booking.pnr}
                  </p>
                  <p>
                    <strong>Date:</strong>{" "}
                    {new Date(booking.date).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>Time:</strong> {booking.time}
                  </p>
                  <p>
                    <strong>Class:</strong> {booking.class}
                  </p>
                  <p>
                    <strong>Fare:</strong> ₹{booking.fare}
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold mb-2">Passengers</h4>
                  <ul className="space-y-1 text-gray-700">
                    {booking.passengers.map((p, i) => (
                      <li key={i}>
                        {p.name} ({p.age}, {p.gender}) – Berth: {p.berth}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBookings;
