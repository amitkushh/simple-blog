import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className=" flex justify-between items-center h-20 px-20">
      <div>
        <Link to="/">
          <span className="text-3xl font-bold text-[#1a1a1a]">Mett</span>
        </Link>
      </div>
      <nav>
        <ul className="flex justify-center items-center gap-9 text-md font-semibold cursor-pointer uppercase text-[#1a1a1a]">
          <Link to="/contact">
            <li className="hover:text-gray-500">Contact</li>
          </Link>
          <Link to="/feature">
            <li className="hover:text-gray-500">Features</li>
          </Link>
          <Link to="about">
            <li className="hover:text-gray-500">About</li>
          </Link>
          <button className="bg-blue-700 rounded-md px-4 py-2 hover:bg-blue-400 text-white">
            Get Started
          </button>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
