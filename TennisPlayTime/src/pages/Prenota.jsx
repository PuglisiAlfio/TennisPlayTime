import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import fotocampoblu from '../assets/campotennisdallalto.jpg'
import fotocampoverde from "../assets/campotennisverde.jpg"

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedField, setSelectedField] = useState('');
  const [friends, setFriends] = useState('');

  const handleBooking = (e) => {
    e.preventDefault();
    // Funzione per gestire la prenotazione
    console.log({
      selectedDate,
      selectedTime,
      selectedField,
      friends,
    });
  };

  // Dati sui campi (puoi sostituire i link delle immagini con quelli reali)
  const fields = [
    {
      id: 'Campo 1',
      name: 'Campo 1',
      image: fotocampoblu,
    },
    {
      id: 'Campo 2',
      name: 'Campo 2',
      image: fotocampoverde,
    },
    {
      id: 'Campo Centrale',
      name: 'Campo Centrale',
      image: fotocampoverde,
    },
    {
      id: 'Campo 4',
      name: 'Campo 4',
      image: fotocampoblu,
    },
  ];

  return (
    <div className="p-8 text-lime-400">
      <h1 className="text-4xl font-bold mb-8 text-center">Prenota il tuo campo da tennis</h1>

      <div className="flex flex-col md:flex-row md:space-x-12">
        {/* Form di prenotazione */}
        <div className="w-full md:w-2/3">
          <form onSubmit={handleBooking} className="p-8 rounded-lg shadow-lg">
            {/* Selezione della data */}
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2">Seleziona la data</label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                className="w-full p-2 rounded-md border border-lime-300 focus:outline-none focus:ring focus:ring-lime-300"
                placeholderText="Scegli una data"
              />
            </div>

            {/* Selezione dell'orario */}
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2">Seleziona l'orario</label>
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full p-2 rounded-md border border-lime-300 focus:outline-none focus:ring focus:ring-lime-300"
              >
                <option value="">Scegli un orario</option>
                <option value="08:00">08:00</option>
                <option value="10:00">10:00</option>
                <option value="12:00">12:00</option>
                <option value="14:00">14:00</option>
                <option value="16:00">16:00</option>
                <option value="18:00">18:00</option>
              </select>
            </div>

            {/* Selezione del campo con immagini */}
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-4">Seleziona il campo</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {fields.map((field) => (
                  <div
                    key={field.id}
                    className={`p-4 rounded-md shadow-md border cursor-pointer transition-transform transform hover:scale-105 ${
                      selectedField === field.id ? 'border-lime-500' : 'border-lime-300'
                    }`}
                    onClick={() => setSelectedField(field.id)}
                  >
                    <img src={field.image} alt={field.name} className="w-full h-32 object-cover rounded-md mb-2" />
                    <p className="text-lg font-semibold text-center">{field.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Invita amici */}
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2">Invita amici</label>
              <input
                type="text"
                value={friends}
                onChange={(e) => setFriends(e.target.value)}
                placeholder="Inserisci nomi degli amici"
                className="w-full p-2 rounded-md border border-lime-300 focus:outline-none focus:ring focus:ring-lime-300"
              />
            </div>

            {/* Pulsante di prenotazione */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-lime-500 text-white py-3 px-6 rounded-md shadow-md hover:bg-lime-600 transition duration-300"
              >
                Conferma prenotazione
              </button>
            </div>
          </form>
        </div>

        {/* Sezione di riepilogo */}
        <div className="w-full md:w-1/3 p-6 rounded-lg shadow-lg mt-6 md:mt-0">
          <h2 className="text-4xl font-bold mb-6 text-center">Riepilogo Prenotazione</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Data selezionata:</h3>
              <p className="text-2xl">{selectedDate ? selectedDate.toLocaleDateString() : 'Nessuna data selezionata'}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Orario selezionato:</h3>
              <p className="text-2xl">{selectedTime || 'Nessun orario selezionato'}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Campo selezionato:</h3>
              <p className="text-2xl">{selectedField || 'Nessun campo selezionato'}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Amici invitati:</h3>
              <p className="text-2xl">{friends || 'Nessun amico invitato'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
