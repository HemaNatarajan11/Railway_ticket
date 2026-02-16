import React from "react";
import Navbar from "../components/Navbar";
import train from "../assets/train.jpeg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative w-full overflow-x-hidden">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <div className="relative h-screen w-full overflow-hidden">
        <motion.img
          src={train}
          alt="Train"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6 }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Connect with RailConnect
          </h1>

          <h2 className="text-white text-3xl md:text-4xl font-semibold mb-4">
            Book Train Tickets Easily & Travel Comfortably 🚆
          </h2>

          <p className="text-white/90 text-lg max-w-xl">
            Search trains, check PNR status, and manage your bookings all in one
            place.
          </p>
        </motion.div>
      </div>

      <div className="py-20 px-8 bg-gray-100">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: "🎫",
              title: "Book Tickets",
              desc: "Quickly search and book train tickets for any route in India.",
            },
            {
              icon: "🚆",
              title: "Track Trains",
              desc: "Get live updates about train timings, delays, and platforms.",
            },
            {
              icon: "📄",
              title: "Manage Bookings",
              desc: "View, cancel, or modify your bookings easily.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="py-20 px-8 bg-white text-gray-800">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-8"
        >
          How It Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center text-lg leading-relaxed"
        >
          RailConnect makes train booking easy and fast. Simply search for your
          train, check availability, book tickets, and get live updates on your
          journey — all in one place.
        </motion.p>
      </div>

      <div className="py-20 px-8 bg-gray-50">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          What Our Users Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              text: "Easy to use and fast booking. Highly recommended!",
              name: "Priya S.",
            },
            {
              text: "Live train tracking is extremely helpful.",
              name: "Arjun R.",
            },
            {
              text: "Very convenient platform for planning trips.",
              name: "Neha K.",
            },
          ].map((user, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-md transition"
            >
              <p>"{user.text}"</p>
              <h4 className="mt-4 font-semibold">- {user.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
