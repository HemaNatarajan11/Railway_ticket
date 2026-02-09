import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyBooking from "./pages/MyBooking";
import CancelRefund from "./pages/CancelRefund";
import SearchTrain from "./pages/SearchTrain";
import Register from "./pages/Register";
import PassengerDetails from "./pages/PassengerDetails";
import Payment from "./pages/Payment";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mybookings" element={<MyBooking />} />
          <Route path="/cancel" element={<CancelRefund />} />
          <Route path="/search" element={<SearchTrain />} />
          <Route path="/passenger-details" element={<PassengerDetails />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
