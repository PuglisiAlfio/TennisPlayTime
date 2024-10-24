import React from "react";
import { Link } from "react-router-dom";

import pastMatches from "../pastMatches.json"

export default function Dashboard() {
  const upcomingMatches = [
    {
      id: 1,
      date: "2024-10-25",
      opponent: "Giovanni Rossi",
      location: "Campo Centrale",
      avatar: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      date: "2024-11-05",
      opponent: "Mario Bianchi",
      location: "Sport Club",
      avatar: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="p-8 text-lime-400">
      <h1 className="text-6xl font-bold mb-8 text-center">Le tue Partite</h1>

      {/* Sezione per prenotare un nuovo match */}
      <div className="flex justify-center mb-10">
        <Link to="/prenota">
          <button className="bg-lime-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-lime-600 transition duration-300">
            Prenota un nuovo match
          </button>
        </Link>
      </div>

      {/* Prossime partite */}
      <div className="mb-12">
        <h2 className="text-6xl font-semibold mb-4">Prossime partite</h2>
        {upcomingMatches.length === 0 ? (
          <p className="text-lg">Non c'è nessuna partita programmata.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingMatches.map((match) => (
              <div
                key={match.id}
                className="bg-gray-800 border border-lime-300 p-6 rounded-md shadow-lg flex items-center space-x-4"
              >
                {/* Immagine dell'avversario */}
                <img
                  src={match.avatar}
                  alt={`Avatar di ${match.opponent}`}
                  className="w-16 h-16 rounded-full border-2 border-lime-300 object-cover"
                />
                {/* Dettagli della partita */}
                <div>
                  <p className="text-lg font-semibold text-white">
                    Data: {match.date}
                  </p>
                  <p className="text-white">Avversario: {match.opponent}</p>
                  <p className="text-white">Luogo: {match.location}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Partite Passate */}
      <div className="mb-12">
        <h2 className="text-6xl font-semibold mb-8">Partite Passate</h2>
        {pastMatches.length === 0 ? (
          <p className="text-lg">Non ci sono partite passate registrate.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {pastMatches.map((match) => (
              <div
                key={match.id}
                className={`p-6 rounded-md shadow-lg flex items-center space-x-4 ${
                  match.outcome === "Vittoria" ? "bg-green-800" : "bg-red-800"
                } border-lime-300`}
              >
                {/* Immagine dell'avversario */}
                <img
                  src={match.avatar}
                  alt={`Avatar di ${match.opponent}`}
                  className="w-16 h-16 rounded-full border-2 border-lime-300 object-cover"
                />
                {/* Dettagli della partita */}
                <div>
                  <p className="text-lg font-semibold text-white">
                    Data: {match.date}
                  </p>
                  <p className="text-white">Avversario: {match.opponent}</p>
                  <p className="text-white">Risultato: {match.result}</p>
                  <p
                    className={`text-white font-bold ${
                      match.outcome === "Vittoria"
                        ? "text-lime-400"
                        : "text-red-300"
                    }`}
                  >
                    {match.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
