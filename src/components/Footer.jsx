import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="flex flex-col gap-3 px-10 py-14 mx-auto md:justify-between md:items-center md:flex-row">
        <div>
          <Link to="/">
            <span className="text-3xl font-bold text-[#1a1a1a]">Mett</span>
          </Link>
          <p className="text-[20px] mt-3">
            This Blog website is for you. you can do anything
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-2xl font-semibold">Pages</span>
          <ul className="flex flex-col  text-md font-semibold cursor-pointer uppercase text-[#1a1a1a] gap-3">
            <Link to="about">
              <li className="hover:text-gray-500">About</li>
            </Link>
            <Link to="/contact">
              <li className="hover:text-gray-500">Contact</li>
            </Link>
            <Link to="/features">
              <li className="hover:text-gray-500">Features</li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-semibold mb-4">Contact Section</span>
          <ul className="flex flex-col  text-md font-semibold uppercase text-[#1a1a1a] gap-3">
            <li>
              <p>+9100000000</p>
            </li>
            <li>
              <p>amit@gmail.com</p>
            </li>
            <li>
              <p>thana chowk</p>
            </li>
          </ul>
        </div>
      </div>
      {/* footer bar */}
      <div className="flex justify-center items-center px-10 border-t-2 border-black py-4">
        <p className="text-lg font-semibold text-center">
          © 2025 Amit Kush. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
