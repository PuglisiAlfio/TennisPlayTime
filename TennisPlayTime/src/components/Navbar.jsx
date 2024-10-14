import { Link } from "react-router-dom";

import logo from "../assets/logotpt.png";

export default function Navbar() {
  return (
    <nav className="text-2xl z-10">
      <div className="container mx-auto flex justify-between items-center text-lime-300">
        <div className="">
          <Link to="/">
            <img src={logo} alt="LogoTPT" className="h-20 w-auto" />
          </Link>
        </div>
        <ul className="flex space-x-0 min-h-full">
          <li className="border-l border-gray-400 h-full flex items-center transition duration-700 hover:bg-lime-300 hover:text-gray-800 py-2 px-7">
            <Link to="/" className="block p-2 font-semibold">
              Home
            </Link>
          </li>
          <li className="border-l border-gray-400 h-full flex items-center transition duration-700 hover:bg-lime-300 hover:text-gray-800 py-2 px-7">
            <Link to="/dashboard" className="block p-2 font-semibold">
              Dashboard
            </Link>
          </li>
          <li className="border-l border-gray-400 h-full flex items-center transition duration-700 hover:bg-lime-300 hover:text-gray-800 py-2 px-7">
            <Link to="/prenota" className="block p-2 font-semibold">
              Prenota
            </Link>
          </li>
          <li className="border-l border-gray-400 h-full flex items-center transition duration-700 hover:bg-lime-300 hover:text-gray-800 py-2 px-7">
            <Link to="/profilo" className="block p-2 font-semibold">
              Profilo
            </Link>
          </li>
          <li className="border-l border-gray-400 border-r h-full flex items-center transition duration-700 hover:bg-lime-300 hover:text-gray-800 py-2 px-7">
            <Link to="/login" className="block p-2 font-semibold">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
