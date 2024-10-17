import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx'

import './App.css'
import sfondo from "./assets/campotennisaltramonto.jpg"

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
        <div className="absolute inset-0 bg-black opacity-75 -z-10"></div>

        <Navbar/>
        <Routes>
          <Route path="/homepage" element={<Home />} />
          {/* <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/prenota" element={<Prenota />} />
          <Route path="/profilo" element={<Profilo />} />*/}
          <Route path="/" element={<Login />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App
