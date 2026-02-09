import React, { useState } from "react";
import Navbar from "../components/Navbar";
import background from "../assets/background.jpg";

const CancelRefundTrain = () => {
  const [pnr, setPnr] = useState("");
  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [refund, setRefund] = useState(null);

  const handleGetOtp = () => {
    if (!pnr || !mobile) {
      alert("Please enter PNR and Mobile number");
      return;
    }
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otpCode);
    setOtpSent(true);
    alert(`OTP sent: ${otpCode} (demo only)`);
  };

  const handleCalculateRefund = () => {
    if (otp !== generatedOtp) {
      alert("Incorrect OTP. Please try again.");
      return;
    }
    const calculatedRefund = 1000 * 0.9;
    setRefund(calculatedRefund);
    alert(`OTP Verified! Refund calculated: ₹${calculatedRefund}`);
  };

  const handleCancelBooking = () => {
    if (!refund) {
      alert("Verify OTP and calculate refund first.");
      return;
    }
    alert(`Booking cancelled. Refund of ₹${refund} will be processed.`);
    setPnr("");
    setMobile("");
    setOtp("");
    setOtpSent(false);
    setRefund(null);
  };

  return (
    <>
      <Navbar />

      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center pt-[180px] px-4"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* Main Card */}
        <div className="bg-white/50 backdrop-blur-md rounded-2xl shadow-2xl w-full max-w-4xl p-10 space-y-6">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
            Train Cancellation & Refund
          </h2>

          {/* PNR & Mobile Input or OTP */}
          {!otpSent ? (
            <div className="grid gap-4">
              <input
                type="text"
                placeholder="PNR Number"
                value={pnr}
                onChange={(e) => setPnr(e.target.value)}
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              />
              <input
                type="text"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              />
              <button
                onClick={handleGetOtp}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
              >
                Get OTP
              </button>
            </div>
          ) : (
            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-500"
              />
              <button
                onClick={handleCalculateRefund}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
              >
                Verify OTP & Calculate Refund
              </button>
            </div>
          )}

          {/* Refund and Cancel */}
          {refund && (
            <div className="text-center mt-4">
              <p className="mb-4 text-lg text-gray-800">
                Refund Amount:{" "}
                <strong className="text-green-700">₹{refund}</strong>
              </p>
              <button
                onClick={handleCancelBooking}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                Cancel Your Booking
              </button>
            </div>
          )}

          {/* Important Notice */}
          <div className="bg-yellow-100 p-5 rounded-lg shadow-inner">
            <p className="font-semibold text-yellow-800">Important Notice:</p>
            <p className="text-yellow-900">
              RailConnect will never call or ask for personal banking info.
              Beware of scams, and only contact us through official channels.
            </p>
          </div>

          {/* FAQs */}
          <div className="space-y-3">
            <p className="font-semibold text-gray-800 text-lg">FAQs:</p>
            <div className="bg-gray-50 p-4 rounded-lg shadow-inner space-y-2">
              <p>
                <strong>Q:</strong> How much time does RailConnect take to
                initiate refund?
              </p>
              <p>A: Refund is initiated within 24 hours of cancellation.</p>

              <p>
                <strong>Q:</strong> How long for money to reflect in my bank?
              </p>
              <p>
                A: 2-3 days for SBI/Private banks, 5-7 days for others. RY
                Wallet refunds are instant.
              </p>

              <p>
                <strong>Q:</strong> What if money is not reflected?
              </p>
              <p>
                A: Use your refund ID to contact your bank or payment gateway.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CancelRefundTrain;
