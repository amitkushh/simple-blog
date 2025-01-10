import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="flex flex-col gap-3 px-20 py-14 mx-auto md:justify-between md:items-center md:flex-row">
        <div>
          <Link to="/">
            <span className="text-3xl font-bold text-[#1a1a1a]">Mett</span>
          </Link>
          <p className="text-[20px] max-w-[300px] mt-3">
            This Blog website is for you. you can do anything
          </p>
        </div>
        <div className="pr-24 flex flex-col gap-3">
          <span className="text-2xl font-semibold">Pages</span>
          <ul className="flex flex-col  text-md font-semibold cursor-pointer uppercase text-[#1a1a1a] gap-3">
            <Link to="/contact">
              <li className="hover:text-gray-500">Contact</li>
            </Link>
            <Link to="/feature">
              <li className="hover:text-gray-500">Features</li>
            </Link>
            <Link to="about">
              <li className="hover:text-gray-500">About</li>
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
    </footer>
  );
}

export default Footer;
