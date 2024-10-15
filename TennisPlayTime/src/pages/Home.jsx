import servizio from "../assets/servizio.jpg";

export default function Home() {
  return (
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

        <button className="border-l border-lime-300 border-r flex items-center transition duration-500 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-lime-300 hover:text-gray-800 py-4 px-10 font-semibold text-lg rounded-full shadow-md mt-2">
          Prenota ora
        </button>
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
  );
}
