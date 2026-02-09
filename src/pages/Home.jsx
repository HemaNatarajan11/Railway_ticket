import React from "react";
import Navbar from "../components/Navbar";
import train from "../assets/train.jpeg"; // your hero image

const Home = () => {
  return (
    <div className="relative w-full">
      <Navbar />

      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <img
          src={train}
          alt="Train"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Hero Text */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Connect with RailConnect
          </h1>
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Book Train Tickets Easily & Travel Comfortably 🚆
          </h2>
          <p className="text-white/90 text-lg mb-6 max-w-xl">
            Search trains, check PNR status, and manage your bookings all in one
            place.
          </p>
        </div>
      </div>

      {/* Services / Features Section */}
      <div className="py-20 px-8 bg-gray-100 ">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
            <div className="text-5xl mb-4">🎫</div>
            <h3 className="text-2xl font-semibold mb-2">Book Tickets</h3>
            <p>Quickly search and book train tickets for any route in India.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
            <div className="text-5xl mb-4">🚆</div>
            <h3 className="text-2xl font-semibold mb-2">Track Trains</h3>
            <p>
              Get live updates about train timings, delays, and platform info.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
            <div className="text-5xl mb-4">📄</div>
            <h3 className="text-2xl font-semibold mb-2">Manage Bookings</h3>
            <p>View, cancel, or modify your bookings easily in one place.</p>
          </div>
        </div>
      </div>

      {/* About / How It Works Section */}
      <div className="py-20 px-8 bg-white text-gray-800">
        <h2 className="text-4xl font-bold text-center mb-8">How It Works</h2>
        <p className="max-w-3xl mx-auto text-center text-lg leading-relaxed">
          RailConnect makes train booking easy and fast. Simply search for your
          train, check availability, book tickets, and get live updates on your
          journey—all in one place.
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 px-8 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p>"Easy to use and fast booking. Highly recommended!"</p>
            <h4 className="mt-4 font-semibold">- Priya S.</h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p>"I love the live train tracking feature. Very helpful."</p>
            <h4 className="mt-4 font-semibold">- Arjun R.</h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p>"A very convenient platform for planning my trips."</p>
            <h4 className="mt-4 font-semibold">- Neha K.</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
