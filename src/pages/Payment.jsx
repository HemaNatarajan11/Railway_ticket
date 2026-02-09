import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const train = location.state?.train;

  const [method, setMethod] = useState("upi");

  if (!train) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-100 pt-[220px] px-6 text-center">
          No payment details found
        </div>
      </>
    );
  }

  const handlePayment = () => {
    alert("Payment Successful ✅\nBooking Confirmed 🎉");
    navigate("/mybookings");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 pt-[220px] px-6 pb-24">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Payment</h2>

          {/* Train details */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-8">
            <h3 className="text-xl font-semibold text-blue-800">
              {train.name} ({train.trainNo})
            </h3>
            <p className="text-gray-700 mt-1">
              {train.from} → {train.to}
            </p>
            <p className="text-gray-700">
              {train.departure} → {train.arrival} • {train.duration}
            </p>
            <p className="mt-2 font-semibold">
              Class: {train.class} | Fare: ₹{train.fare}
            </p>
          </div>

          {/* Payment Methods */}
          <h3 className="text-xl font-semibold mb-4">Choose Payment Method</h3>

          <div className="space-y-4">
            <label className="flex items-center gap-3 border p-4 rounded cursor-pointer">
              <input
                type="radio"
                name="payment"
                checked={method === "upi"}
                onChange={() => setMethod("upi")}
              />
              UPI (Google Pay / PhonePe / Paytm)
            </label>

            <label className="flex items-center gap-3 border p-4 rounded cursor-pointer">
              <input
                type="radio"
                name="payment"
                checked={method === "card"}
                onChange={() => setMethod("card")}
              />
              Credit / Debit Card
            </label>

            <label className="flex items-center gap-3 border p-4 rounded cursor-pointer">
              <input
                type="radio"
                name="payment"
                checked={method === "netbanking"}
                onChange={() => setMethod("netbanking")}
              />
              Net Banking
            </label>
          </div>

          {/* Pay Button */}
          <div className="mt-10 flex justify-end">
            <button
              onClick={handlePayment}
              className="bg-green-600 text-white px-10 py-3 rounded-lg text-lg hover:bg-green-700 transition"
            >
              Pay ₹{train.fare}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
