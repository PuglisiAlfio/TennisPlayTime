import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-green-800/50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">TennisPlayTime</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-200 font-semibold">Home</Link>
          </li>
          <li>
            <Link to="/dashboard" className="text-white hover:text-gray-200 font-semibold">Dashboard</Link>
          </li>
          <li>
            <Link to="/booking" className="text-white hover:text-gray-200 font-semibold">Prenota</Link>
          </li>
          <li>
            <Link to="/profile" className="text-white hover:text-gray-200 font-semibold">Profilo</Link>
          </li>
          <li>
            <Link to="/login" className="text-white hover:text-gray-200 font-semibold">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
