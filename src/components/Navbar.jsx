import { Link, NavLink } from "react-router-dom";
import { AlignJustify, X } from "lucide-react";

function Navbar() {
  return (
    <header className="flex justify-between items-center h-20 px-10">
      <div>
        <Link to="/">
          <span className="text-3xl font-bold text-[#1a1a1a]">Mett</span>
        </Link>
      </div>
      <nav className="flex justify-center items-center gap-5 ml-8">
        <ul className="hidden md:flex justify-center items-center gap-9 text-md font-semibold cursor-pointer uppercase text-[#1a1a1a]">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${isActive ? "text-blue-800" : "text-black"}`
            }
          >
            <li className="hover:text-gray-500">About</li>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${isActive ? "text-blue-800" : "text-black"}`
            }
          >
            <li className="hover:text-gray-500">Contact</li>
          </NavLink>
          <NavLink
            to="/features"
            className={({ isActive }) =>
              `${isActive ? "text-blue-800" : "text-black"}`
            }
          >
            <li className="hover:text-gray-500">Features</li>
          </NavLink>
        </ul>
        <Link to="/sign-up">
          <button className="bg-gradient-to-t from-[#000957] to-[#344CB7] rounded-md px-4 py-2 hover:from-[#344CB7] hover:to-[#000957]  text-white">
            Get Started
          </button>
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
