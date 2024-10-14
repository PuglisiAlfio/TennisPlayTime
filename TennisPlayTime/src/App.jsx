import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx'

import './App.css'
import sfondo from "./assets/sfondo.jpg"

function App() {


  return (
    <Router>
      <div className="relative min-h-screen">
        {/* Immagine di sfondo */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
          style={{ backgroundImage: `url(${sfondo})` }}
        ></div>

        {/* Overlay semi-trasparente */}
        <div className="absolute inset-0 bg-black opacity-60 -z-10"></div>

        <Navbar/>
        {/* Aggiungi i tuoi componenti di routing qui */}
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/prenota" element={<Prenota />} />
          <Route path="/profilo" element={<Profilo />} />
          <Route path="/login" element={<Login />} />
        </Routes> */}
      </div>
    </Router>
  );
}

export default App
