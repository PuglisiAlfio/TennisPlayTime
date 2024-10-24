import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    totalMatches: 10,
    wins: 7,
    losses: 3,
    winPercentage: '',
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
        <div className="flex items-center">
          {/* Sezione immagine profilo */}
          <div className="flex flex-col items-center pr-6">
            <div className="relative">
              <img
                src={profileImage || "https://via.placeholder.com/150"}
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover shadow-md"
              />
              <label
                htmlFor="profileImage"
                className="absolute bottom-0 right-0 bg-lime-500 text-white p-2 rounded-full cursor-pointer shadow-md"
              >
                <input
                  type="file"
                  id="profileImage"
                  className="hidden"
                  onChange={handleProfileImageChange}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
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
            {!isEditing ? (
              <>
                <h2 className="text-2xl font-semibold mb-2">{user.username}</h2>
                <p>Email: {user.email}</p>
                <p>Telefono: {user.phone || "Non fornito"}</p>
                <button
                  className="mt-4 bg-lime-500 text-white px-4 py-2 rounded-md"
                  onClick={handleEdit}
                >
                  Modifica informazioni
                </button>
              </>
            ) : (
              <div className="space-y-3">
                <input
                  type="text"
                  name="username"
                  value={user.username}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded-md w-full"
                  placeholder="Inserisci username"
                />
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded-md w-full"
                  placeholder="Inserisci email"
                />
                <input
                  type="text"
                  name="phone"
                  value={user.phone}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded-md w-full"
                  placeholder="Numero di telefono"
                />
                <div className="flex space-x-2">
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                    onClick={handleSave}
                  >
                    Salva
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                    onClick={handleCancel}
                  >
                    Annulla
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mt-6 md:mt-0">
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-md"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Sezione Statistiche Partite */}
      <div className="shadow-lg p-6 rounded-lg mb-8">
        <h3 className="text-xl font-bold mb-4">Statistiche Partite</h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="text-center">
            <p className="text-2xl font-semibold">{stats.totalMatches}</p>
            <p className="text-lime-500">Partite Giocate</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-semibold">{stats.wins}</p>
            <p className="text-lime-500">Vittorie</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-semibold">{stats.losses}</p>
            <p className="text-lime-500">Sconfitte</p>
          </div>
          <div className="text-center">
            <p className="text-2xl text-lime-500 font-semibold">{stats.winPercentage}%</p>
            <p className="text-lime-500">Percentuale di Vittoria</p>
          </div>
        </div>
      </div>

      {/* Sezione Storico Partite */}
      <div className="shadow-lg p-6 rounded-lg mb-8">
        <h3 className="text-xl font-bold mb-4">Storico Partite</h3>
        <ul className="space-y-4">
          {pastMatches.map((match) => (
            <li key={match.id} className="flex justify-between items-center">
              <div>
                <p className="font-semibold">{match.opponent}</p>
                <p className="text-gray-500">{match.result}</p>
              </div>
              <p
                className={
                  match.outcome === "Vittoria"
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {match.outcome}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Sezione Prossime Partite */}
      <div className="shadow-lg p-6 rounded-lg mb-8">
        <h3 className="text-xl font-bold mb-4">Prossime Partite</h3>
        <ul className="space-y-4">
          {upcomingMatches.map((match) => (
            <li key={match.id} className="flex justify-between items-center">
              <div>
                <p className="font-semibold">{match.opponent}</p>
                <p className="text-gray-500">{match.date}</p>
              </div>
              <button className="text-red-500 hover:underline">Annulla</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Preferenze e Notifiche */}
      <div className="shadow-lg p-6 rounded-lg mb-8">
        <h3 className="text-xl font-bold mb-4">Preferenze e Notifiche</h3>
        <label className="flex items-center space-x-3">
          <input type="checkbox" className="form-checkbox" />
          <span>Ricevi notifiche via email</span>
        </label>
      </div>
    </div>
  );
}
