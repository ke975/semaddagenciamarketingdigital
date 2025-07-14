// main.jsx o App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Landing} from "./pages/Landing";
import { About } from "./pages/About";
import { Services } from "./pages/Services"
import { Contact } from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
