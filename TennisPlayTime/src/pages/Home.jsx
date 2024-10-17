import { Link } from "react-router-dom";

import servizio from "../assets/servizio.jpg";

export default function Home() {
  return (
    <>
      <main>
        <div className="md:flex lg:h-screen items-center mt-2">
          <div className="md:w-1/2 flex flex-col items-center justify-center m-8 rounded-r-3xl p-8 text-lime-300 h-auto md:h-3/4 shadow-lg">
            <div className="flex flex-col justify-center items-center text-center gap-8 w-full">
              <h1 className="text-6xl font-bold leading-tight mb-4">
                Prenota la tua partita ora!
              </h1>
              <p className="text-2xl mb-6">
                Trova compagni di gioco e campi liberi con un semplice clic.
              </p>
            </div>
            <Link to="/prenota">
              <button className="border-l border-lime-300 border-r flex items-center transition duration-500 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-lime-300 hover:text-gray-800 py-6 px-14 font-semibold text-xl rounded-full shadow-md mt-4 mx-auto">
                Prenota ora
              </button>
            </Link>
          </div>

          <div className="w-full md:w-1/2 hidden md:block">
            <img
              src={servizio}
              alt="Tennis match"
              className="h-full object-cover rounded-l-3xl"
            />
          </div>

          {/* Immagine visibile solo su schermi piccoli */}
          <div className="md:hidden w-full flex justify-center mt-4">
            <img
              src={servizio}
              alt="Tennis match"
              className="h-64 object-cover rounded-3xl"
            />
          </div>
        </div>
      </main>
      <section>
        <div className="text-lime-400 p-8 text-center my-32">
          <h2 className="text-6xl font-bold mb-6">
            Perché usare la nostra app?
          </h2>
          <div className="md:flex justify-center space-x-8">
            <div className="mb-6 md:mb-0 md:w-1/3">
              <h3 className="text-2xl font-semibold">
                Trova compagni di gioco
              </h3>
              <p className="mt-2">
                Unisciti a giocatori vicino a te con il nostro sistema di
                matchmaking intelligente.
              </p>
            </div>
            <div className="mb-6 md:mb-0 md:w-1/3">
              <h3 className="text-2xl font-semibold">Prenotazioni semplici</h3>
              <p className="mt-2">
                Prenota in pochi clic il tuo campo preferito, senza stress.
              </p>
            </div>
            <div className="mb-6 md:mb-0 md:w-1/3">
              <h3 className="text-2xl font-semibold">
                Accesso ai migliori campi
              </h3>
              <p className="mt-2">
                Scopri i campi migliori nelle vicinanze e prenotali subito.
              </p>
            </div>
          </div>
          <Link to="/prenota">
              <button className="border-l border-lime-300 border-r flex items-center transition duration-500 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-lime-300 hover:text-gray-800 py-6 px-14 font-semibold text-xl rounded-full shadow-md mt-4 mx-auto">
                Prenota ora
              </button>
            </Link>
        </div>
      </section>
      <section>
        <div className="p-8 text-lime-400 text-center my-32">
          <h2 className="text-6xl font-bold mb-6">
            Cosa dicono i nostri utenti
          </h2>
          <div className="md:flex justify-center space-x-8">
            <div className="mb-6 md:mb-0">
              <p className="italic">
                "Un'app fantastica, ho trovato tanti amici con cui giocare!"
              </p>
              <p className="mt-2 text-sm">- Mario R.</p>
            </div>
            <div className="mb-6 md:mb-0">
              <p className="italic">
                "Prenotare un campo non è mai stato così semplice!"
              </p>
              <p className="mt-2 text-sm">- Giulia S.</p>
            </div>
            <div className="mb-6 md:mb-0">
              <p className="italic">
                "Perfetta per chi vuole giocare a tennis senza pensieri!"
              </p>
              <p className="mt-2 text-sm">- Luca F.</p>
            </div>
          </div>
          <Link to="/prenota">
              <button className="border-l border-lime-300 border-r flex items-center transition duration-500 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-lime-300 hover:text-gray-800 py-6 px-14 font-semibold text-xl rounded-full shadow-md mt-4 mx-auto">
                Prenota ora
              </button>
            </Link>
        </div>
      </section>
      <section>
        <div className="p-8 text-center my-32">
          <h2 className="text-6xl font-bold text-lime-400 mb-4">
            Iscriviti alla nostra Newsletter
          </h2>
          <p className="text-lime-400 mb-6">
            Ricevi aggiornamenti su nuovi campi e tornei disponibili nella tua
            zona.
          </p>
          <form className="flex justify-center h-12">
            <input
              type="email"
              placeholder="Inserisci la tua email"
              className="p-2 w-96 border border-lime-300 rounded-l-md focus:outline-none"
            />
            <button className="bg-lime-500 text-white py-2 px-4 rounded-r-md">
              Iscriviti
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
