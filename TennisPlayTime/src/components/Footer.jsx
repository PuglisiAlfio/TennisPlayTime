export default function Footer(){
return (
<footer className="bg-gray-800 text-lime-300 py-10">
  <div className="container mx-auto px-4">
    <div className="md:flex md:justify-between">

      {/* Informazioni sulla sede */}
      <div className="mb-8 md:mb-0">
        <h3 className="text-2xl font-bold mb-4">La nostra sede</h3>
        <p>Via dell'Esempio 123, 00100 Roma</p>
        <a
          href="https://www.google.com/maps"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lime-500 hover:text-lime-400 block mt-2"
        >
          Visualizza sulla mappa
        </a>
      </div>

      {/* Collegamenti rapidi */}
      <div className="mb-8 md:mb-0">
        <h3 className="text-2xl font-bold mb-4">Collegamenti utili</h3>
        <ul>
          <li className="mb-2">
            <a href="#" className="hover:text-lime-500">Home</a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-lime-500">Dashboard</a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-lime-500">Prenota</a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-lime-500">Profilo</a>
          </li>
        </ul>
      </div>

      {/* Contatti */}
      <div className="mb-8 md:mb-0">
        <h3 className="text-2xl font-bold mb-4">Contatti</h3>
        <p>Email: <a href="mailto:info@esempio.com" className="text-lime-500 hover:text-lime-400">info@esempio.com</a></p>
        <p>Telefono: <a href="tel:+390000000000" className="text-lime-500 hover:text-lime-400">+39 00 0000 0000</a></p>
        <p>Orari: Lun - Ven: 9:00 - 18:00</p>
      </div>

    </div>

    {/* Sezione inferiore del footer */}
    <div className="border-t border-lime-300 mt-8 pt-4 text-center">
      <p>&copy; 2024 NomeApp. Tutti i diritti riservati.</p>
      <p>
        <a href="#" className="text-lime-500 hover:text-lime-400">Termini e condizioni</a> |
        <a href="#" className="text-lime-500 hover:text-lime-400 ml-2">Privacy</a>
      </p>
    </div>
  </div>
</footer>
)}