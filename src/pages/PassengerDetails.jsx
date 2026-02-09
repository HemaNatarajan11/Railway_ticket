import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const PassengerDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const train = location.state?.train;

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

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 pt-[220px] px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Passenger Details
          </h2>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-8">
            <h3 className="text-xl font-semibold text-blue-800">
              {train.name} ({train.trainNo} )
            </h3>
            <p className="text-gray-700 mt-1">
              {train.from} → {train.to}
            </p>
            <p className="text-gray-700 mt-1">
              {train.departure} → {train.arrival} • {train.duration}{" "}
            </p>
            <p className="mt-1 font-semibold">
              Class:{train.class} | Fare :₹{train.fare}
            </p>
          </div>
          {/* Passenger Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Passenger Name"
              className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="number"
              placeholder="Age"
              className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <select className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Berth Preference</option>
              <option>Lower</option>
              <option>Middle</option>
              <option>Upper</option>
              <option>No Preference</option>
            </select>
          </div>

          {/* Action Button */}
          <div className="mt-8 flex justify-end">
            <button
              onClick={() => navigate("/payment", { state: { train } })}
              className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-green-700 transition"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PassengerDetails;
