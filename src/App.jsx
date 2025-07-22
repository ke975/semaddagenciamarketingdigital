// main.jsx o App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Landing} from "./pages/Landing";
import { About } from "./pages/About";
import { Services } from "./pages/Services"
import { Contact } from "./pages/Contact";
import { StartWeb } from "./pages/StartWeb";
import { ProWeb } from "./pages/ProWeb";
import { WebEscalable } from "./pages/WebEscalable";
import { TallerDitalizate } from "./pages/TallerDigitalizate";
import { Asesoria } from "./pages/Asesoria";
import { TallerEmpresas } from "./pages/TallerEmpresas";
import { MarcaBase } from "./pages/MarcaBase";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/start-web" element={<StartWeb />} />
        <Route path="/pro-web" element={<ProWeb />} />
        <Route path="/web-avanzada" element={<WebEscalable />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/taller-digitalizate" element={<TallerDitalizate />} />
        <Route path="/asesoria" element={<Asesoria />} />
        <Route path="/taller-empresas" element={<TallerEmpresas />} />
        <Route path="/MarcaBase" element={<MarcaBase />} />
        {/* Agrega más rutas según sea necesario */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
