import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function AboutSemadd() {
  const [openIndex, setOpenIndex] = useState(null);

  const reasons = [
    {
      title: "Sin plantillas genéricas",
      content:
        "Diseñamos desde cero, adaptado a tu negocio. Nada de moldes repetidos ni soluciones estancadas.",
    },
    {
      title: "100% Personalización",
      content:
        "Tu sitio, tus reglas. Ajustamos funcionalidades, diseño y contenido a lo que realmente necesitás.",
    },
    {
      title: "Escalabilidad real",
      content:
        "Creamos soluciones que crecen con vos desde landing pages hasta sistemas completos de gestión.",
    },
    {
      title: "Velocidad y optimización superior",
      content:
        "Sitios rápidos, seguros y optimizados para buscadores.",
    },
{
  title: "Identidad coherente",
  content:
    "Combinamos diseño web y branding para que todo se vea conectado, profesional y auténtico a tu marca, porque tú lo mereces.",
}
  ];

  return (
    <section
      className="relative pt-24 pb-20 bg-gradient-to-b from-gray-800 via-gray-900 to-black overflow-hidden w-full"
      id="About"
    >
      {/* 🌑 Sombra superior */}
      <div className="absolute top-0 left-0 right-0 h-48 pointer-events-none z-10 bg-gradient-to-b from-black via-transparent to-transparent opacity-30 blur-xl" />

      {/* Contenedor fluid sin max-width */}
      <div className="relative z-20 w-full px-4 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Columna izquierda */}
          <div className="text-white space-y-6 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <motion.svg
                className="w-16 h-16 text-white animate-bounce"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 18h6m-3 0v3m-4.5-3a5.25 5.25 0 01.228-10.498 6.75 6.75 0 0111.06 5.79c0 1.317-.397 2.544-1.08 3.564A6.018 6.018 0 0115 18h-6z"
                />
              </motion.svg>
            </div>
            <h2 className="text-5xl font-bold">¿Por qué elegirnos?</h2>
            <p className="max-w-2xl text-justify mx-auto lg:mx-0 text-gray-30 text-2xl">
              Descubre las razones que nos hacen diferentes y por qué somos la mejor opción para potenciar tu presencia digital.
            </p>
          </div>

          {/* Columna derecha: acordeón */}
          <div className="space-y-6">
            {reasons.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="border border-indigo-400 bg-gray-800/40 backdrop-blur-md rounded-xl overflow-hidden shadow-lg"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full px-5 py-4 flex justify-between items-center text-left text-white font-semibold hover:bg-indigo-800/20 transition"
                  >
                    <span>{item.title}</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-5 py-3 text-gray-200"
                      >
                        <p >{item.content}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
