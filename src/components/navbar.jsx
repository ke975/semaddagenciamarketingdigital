import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Carrousell } from "./Carrousell";
import Logo from "../assets/logobuenoblanco.png";
import { Link } from "react-router-dom";
// Particles background animation
function ParticlesBG() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const colors = ["#0ea5e9", "#e879f9", "#c084fc", "#4f46e5", "#fff"];
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let particles = [];
        let animationId;
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", handleResize);

        const createParticles = () => {
            particles = [];
            for (let i = 0; i < 60; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    r: Math.random() * 2 + 1.5,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    dx: (Math.random() - 0.5) * 0.7,
                    dy: (Math.random() - 0.5) * 0.7,
                    alpha: Math.random() * 0.5 + 0.3
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            for (let p of particles) {
                ctx.save();
                ctx.globalAlpha = p.alpha;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.shadowColor = p.color;
                ctx.shadowBlur = 12;
                ctx.fill();
                ctx.restore();

                p.x += p.dx;
                p.y += p.dy;

                if (p.x < 0 || p.x > width) p.dx *= -1;
                if (p.y < 0 || p.y > height) p.dy *= -1;
            }
            animationId = requestAnimationFrame(draw);
        };

        createParticles();
        draw();

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 1 }}
        />
    );
}
export function Nav() {
    const [state, setState] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const navigation = [
        { title: "Inicio", path: "/"},
        {
            title: "Nosotros",
            dropdown: [
                { title: "Misión y Visión", path: "/about" },
               
            ]
        },
        {
            title: "Servicios",
            dropdown: [
                { title: "Start web", path: "/start-web" },
                { title: "Pro Web", path: "/pro-web" },
                { title: "Web Avanzada Escalable", path: "/web-avanzada" },
                { title: "Taller Digitalizate", path: "/taller-digitalizate" },
                { title: "Asesoría Personalizada", path: "/asesoria" },
                { title: "Taller Para Equipos", path: "/taller-empresas" },
                
            ]
        },
        { title: "Contáctanos", path: "/contact" }
    ];

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".menu-btn") && !target.closest(".dropdown-parent")) setState(false);
            if (!target.closest(".dropdown-parent")) setDropdown(false);
        };
    }, []);

    const Brand = () => (
        <div className="flex items-center gap-4 py-3 md:py-5 ">
            <a href="#" className="flex items-center gap-2">
                <motion.img
                    src={Logo}
                    width={120}
                    height={120}
                    alt="SEMADD logo"
                    className="rounded-xl shadow-lg p-1"
                    initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, type: "spring" }}
                    whileHover={{ scale: 1.08, rotate: 2 }}
                />
            </a>
            <div className="md:hidden">
                <button className="menu-btn text-gray-400 hover:text-gray-300" onClick={() => setState(!state)}>
                    {
                        state ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )
                    }
                </button>
            </div>
        </div>
    );

    return (
    <div className="bg-gray-900 min-h-screen flex flex-col relative overflow-hidden">
  <header className="w-full">
    {/* Solo se muestra en móvil cuando el menú está abierto */}
    <div className={`md:hidden ${state ? "px-4 pb-4" : "hidden"}`}>
      <Brand />
    </div>

    <nav className={`w-full pb-5 md:text-sm ${state ? "absolute z-20 top-0 inset-x-0 bg-gray-800 rounded-xl mx-2 mt-2 md:mx-0 md:mt-0 md:relative md:bg-transparent" : ""}`}>
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-4 md:flex-nowrap md:px-8">
        <Brand />
        <div className={`w-full md:flex md:items-center md:w-auto ${state ? "block mt-4" : "hidden"}`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-4 text-sm w-full md:w-auto">
            {navigation.map((item, idx) => (
              item.dropdown ? (
                <li key={idx} className="relative dropdown-parent text-gray-300 hover:text-gray-400">
                  <button
                    className="flex items-center gap-1 font-semibold w-full md:w-auto"
                    onClick={() => setDropdown(dropdown === idx ? false : idx)}
                    onMouseEnter={() => setDropdown(idx)}
                    onMouseLeave={() => setDropdown(false)}
                  >
                    {item.title}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {dropdown === idx && (
                      <motion.ul
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-lg z-30"
                        onMouseEnter={() => setDropdown(idx)}
                        onMouseLeave={() => setDropdown(false)}
                      >
                        {item.dropdown.map((sub, subIdx) => (
                          <li key={subIdx}>
                            <a href={sub.path} className="block px-4 py-2 text-gray-300 hover:bg-sky-500 hover:text-white rounded transition">
                              {sub.title}
                            </a>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li key={idx} className="text-gray-300 hover:text-sky-400 font-semibold transition">
                  <a href={item.path} className="block w-full md:w-auto">{item.title}</a>
                </li>
              )
            ))}
          </ul>
        </div>
      </div>
    </nav>
  </header>

  {/* Hero Section */}
<section className="relative w-full flex flex-col items-center justify-center px-4">
  <ParticlesBG />

  <div className="relative z-10 w-full max-w-5xl px-4 py-16 md:py-32 text-center flex flex-col items-center">
    
    <motion.img
      src={Logo}
      alt="SEMADD logo"
      className="mb-3 rounded-2xl shadow-2xl p-4 w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px]"
      initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1, type: "spring" }}
      whileHover={{ scale: 1.08, rotate: 2 }}
    />

   

    <motion.p
      className="max-w-2xl text-white text-base sm:text-lg md:text-xl lg:text-2xl mb-10 text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
    >
    </motion.p>

  </div>

  {/* TEXTO PARA VIDEO */}
  <span className="relative z-10 max-w-4xl text-center text-white text-base sm:text-lg md:text-xl leading-relaxed mb-8">
    Digitalizamos y automatizamos tu empresa para que sea más eficiente, competitiva y rentable.
    
    Desarrollamos <strong>software a medida</strong>, <strong>sistemas empresariales</strong>, <strong>aplicaciones móviles</strong> y
    <strong> automatizaciones inteligentes</strong> que eliminan procesos manuales, optimizan la operación
    y convierten tu negocio en una empresa eficiente y rentable.
   
   <br />
    <strong>
      Agenda hoy una asesoría gratuita.
    </strong>
  </span>

  {/* ESPACIO LISTO PARA VIDEO */}
<div className="relative z-10 w-full max-w-6xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl">
  <iframe
    className="w-full h-full"
    src="https://www.youtube.com/embed/epNnZ9UHKOs"
    title="Video SEMADD"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</div>


</section>



</div>

    );
}
