import newlogo from "../assets/newlogo.jpg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 h-[140px] bg-white/60 backdrop-blur-sm px-8 py-3 font-serif">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <img
              src={newlogo}
              alt="railway photo"
              className="w-30 h-30 object-contain rounded-full"
            />
            <h2 className="text-3xl font-bold tracking-wide">RailConnect</h2>
          </div>

          {/* Hamburger Menu */}
          <button
            className="lg:hidden text-3xl text-black ml-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          {/* Menu Items */}
          <div>
            <ul
              className={`
                absolute top-full left-0 w-full  
                flex flex-col gap-5 px-8 py-6 text-2xl
                bg-white text-black
                lg:static lg:w-auto lg:flex-row lg:bg-transparent lg:py-0
                ${isOpen ? "block" : "hidden"} lg:flex
              `}
            >
              <Link to="/" className="hover:text-blue-600">
                <li className="cursor-pointer">Home</li>
              </Link>
              <Link to="/search" className="hover:text-blue-600">
                <li className="cursor-pointer">Search Trains</li>
              </Link>
              <Link to="/mybookings" className="hover:text-blue-600">
                <li className="cursor-pointer">My Bookings</li>
              </Link>
              <Link to="/cancel" className="hover:text-blue-600">
                <li className="cursor-pointer">Cancellation</li>
              </Link>
              <Link to="/login" className="hover:text-blue-600">
                <li className="cursor-pointer">Login</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
