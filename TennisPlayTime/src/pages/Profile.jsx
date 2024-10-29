import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SettingsMenu from "../components/SettingsMenu";

export default function Profile() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    profilePicture: "https://via.placeholder.com/150",
  });

  const [stats, setStats] = useState({
    totalMatches: 8,
    wins: 6,
    losses: 2,
    recentWin: {},
    hardestMatch: {},
  });

  const [upcomingMatches, setUpcomingMatches] = useState([]);
  const [pastMatches, setPastMatches] = useState([]);

  const [profileImage, setProfileImage] = useState(null);

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  // Funzione per recuperare i dati dal localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user")) || {};
    const storedStats = JSON.parse(localStorage.getItem("stats")) || {};
    const storedUpcomingMatches =
      JSON.parse(localStorage.getItem("upcomingMatches")) || [];
    const storedPastMatches =
      JSON.parse(localStorage.getItem("pastMatches")) || [];

    setUser(storedUser);
    setStats(storedStats);
    setUpcomingMatches(storedUpcomingMatches);
    setPastMatches(storedPastMatches);
    console.log(storedUser.username);
  }, []);

  const handleEdit = () => setIsEditing(true);

  const handleSave = () => {
    setIsEditing(false);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const handleCancel = () => setIsEditing(false);

  const handleInputChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="container mx-auto p-6">
      {/* Sezione Informazioni Personali */}
      <div className="flex flex-col md:flex-row justify-between shadow-lg p-6 rounded-lg mb-8">
        <div className="flex items-center text-lime-500">
          {/* Immagine del profilo */}
          <div className="flex flex-col items-center pr-6">
            <div className="relative">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover shadow-md"
              />
              <label
                htmlFor="profileImage"
                className="absolute bottom-0 right-0 bg-lime-500 text-white p-2 rounded-full cursor-pointer shadow-md hover:bg-lime-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </label>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">{user.username}</h2>
            <p>Email: esempio@email.com</p>
            <p>Telefono: Non fornito</p>
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <SettingsMenu />
          <div className="mt-6 md:mt-0">
            <button
              className="hover:bg-lime-300 text-lime-300 px-4 py-2 rounded-md transition duration-700 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-gray-800 "
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Sezione Statistiche Partite */}
      <div className="shadow-lg p-6 rounded-lg mb-8 text-lime-500">
        <h3 className="text-xl font-bold mb-4">Statistiche Partite</h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 text-center">
          <div>
            <p className="text-2xl font-semibold text-lime-500">8</p>
            <p className="text-lime-500">Partite Giocate</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-lime-500">6</p>
            <p className="text-lime-500">Vittorie</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-lime-500">2</p>
            <p className="text-lime-500">Sconfitte</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-lime-500">75%</p>
            <p className="text-lime-500">Percentuale di Vittoria</p>
          </div>
        </div>
      </div>

      {/* Sezione Storico Partite */}
      <div className="shadow-lg p-6 rounded-lg mb-8 text-lime-500">
        <h3 className="text-xl font-bold mb-4">Storico Partite</h3>
        <ul className="space-y-4">
          <li className="flex justify-between items-center">
            <div>
              <p className="font-semibold">Avversario 1</p>
              <p className="">6-3, 6-4</p>
            </div>
            <p className="text-green-500">Vittoria</p>
          </li>
          <li className="flex justify-between items-center">
            <div>
              <p className="font-semibold">Avversario 2</p>
              <p className="">4-6, 3-6</p>
            </div>
            <p className="">Sconfitta</p>
          </li>
        </ul>
      </div>

      {/* Sezione Prossime Partite */}
      <div className="shadow-lg p-6 rounded-lg mb-8 text-lime-500">
        <h3 className="text-xl font-bold mb-4">Prossime Partite</h3>
        <ul className="space-y-4">
          <li className="flex justify-between items-center">
            <div>
              <p className="font-semibold">Avversario Futuro</p>
              <p className="">Data: 20 Ottobre 2024</p>
            </div>
            <button className=" hover:underline">Annulla</button>
          </li>
        </ul>
      </div>

      {/* Preferenze e Notifiche */}
      <div className="shadow-lg p-6 rounded-lg mb-8 text-lime-500">
        <h3 className="text-xl font-bold mb-4">Preferenze e Notifiche</h3>
        <label className="flex items-center space-x-3">
          <input type="checkbox" className="form-checkbox" />
          <span>Ricevi notifiche via email</span>
        </label>
      </div>
    </div>
  );
}
