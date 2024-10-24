import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logotpt.png";

export default function Navbar() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false); // Stato per gestire l'apertura del menu

  // Funzione per gestire il clic dell'icona del menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav className="text-2xl z-10 text-lime-300 bg-transparent">
      <div className="container mx-auto flex justify-between items-center text-lime-300">
        <div className="">
          <Link to="/homepage">
            <img src={logo} alt="LogoTPT" className="h-20 w-auto" />
          </Link>
        </div>

        {/* Menu Icona Hamburger, visibile solo su schermi piccoli */}
        <div className="md:hidden" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        {/* Menu completo, visibile solo su schermi medi e grandi */}
        <ul className="hidden md:flex space-x-0 min-h-full">
          <li className="border-l border-lime-300 h-full flex items-center transition duration-700 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-lime-300 hover:text-gray-800 py-2 px-7">
            <Link to="/homepage" className="block p-2 font-semibold">
              Home
            </Link>
          </li>
          <li className="border-l border-lime-300 h-full flex items-center transition duration-700 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-lime-300 hover:text-gray-800 py-2 px-7">
            <Link to="/dashboard" className="block p-2 font-semibold">
              Dashboard
            </Link>
          </li>
          <li className="border-l border-lime-300 h-full flex items-center transition duration-700 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-lime-300 hover:text-gray-800 py-2 px-7">
            <Link to="/prenota" className="block p-2 font-semibold">
              Prenota
            </Link>
          </li>
          <li className="border-l border-lime-300 border-r h-full flex items-center transition duration-700 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-lime-300 hover:text-gray-800 py-2 px-7">
            <Link to="/profilo" className="block p-2 font-semibold">
              Profilo
            </Link>
          </li>
          {/* <li className="border-l border-lime-300 border-r h-full flex items-center transition duration-700 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-lime-300 hover:text-gray-800 py-2 px-7">
            <Link to="/" className="block p-2 font-semibold">
              Login
            </Link>
          </li> */}
        </ul>
      </div>

      {/* Menu a tendina per schermi piccoli con overlay */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-black z-50 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Chiudi il menu cliccando sull'overlay */}
        {isOpen && (
          <div className="flex justify-end p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-8 w-8 text-lime-300 cursor-pointer"
              onClick={toggleMenu}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        )}

        {/* Menu items */}
        <div className="flex flex-col items-center mt-4 gap-2">
          <Link
            to="/homepage"
            className="w-full h-12 flex items-center justify-center text-lime-300 border-t border-t-lime-300"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className="w-full h-12 flex items-center justify-center text-lime-300 border-t border-t-lime-300"
            onClick={toggleMenu}
          >
            Dashboard
          </Link>
          <Link
            to="/prenota"
            className="w-full h-12 flex items-center justify-center text-lime-300 border-t border-t-lime-300"
            onClick={toggleMenu}
          >
            Prenota
          </Link>
          <Link
            to="/profilo"
            className="w-full h-12 flex items-center justify-center text-lime-300 border-t border-t-lime-300"
            onClick={toggleMenu}
          >
            Profilo
          </Link>
          {/* <Link
            to="/"
            className="w-full h-12 flex items-center justify-center text-lime-300 border-t border-b border-lime-300"
            onClick={toggleMenu}
          >
            Login
          </Link> */}
        </div>
      </div>
    </nav>
  );
}
