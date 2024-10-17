import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../users.json";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Controlla se l'utente esiste nel file JSON
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setError("");
      navigate("/homepage"); // Reindirizza alla homepage
    } else {
      setError("Nome utente o password non validi.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-lg rounded-lg p-10 w-96">
        <h2 className="text-3xl font-bold text-center mb-8">Accedi</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700">
              Nome utente
            </label>
            <input
              type="text"
              placeholder="Inserisci nome utente"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-lime-300"
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Inserisci password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-lime-300"
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3 px-4 rounded-md transition duration-300 text-lg"
          >
            Accedi
          </button>
        </form>
        <div className="text-center mt-4">
          <a href="#" className="text-sm text-lime-500 hover:underline">
            Hai dimenticato la password?
          </a>
        </div>
      </div>
    </div>
  );
}
