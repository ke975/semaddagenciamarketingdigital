import { motion } from "framer-motion";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export function TallerEmpresas() {
  return (
    <>
      <section className="py-24 min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/60 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-gray-700"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Columna Izquierda */}
              <div className="text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-6">
                  <img
                    src="https://images.icon-icons.com/2076/PNG/512/business_chart_finance_pie_statistics_icon_127241.png"
                    alt="Taller para Empresas"
                    className="h-36 w-36 object-contain drop-shadow-md hover:scale-110 transition-transform"
                  />
                </div>

                <h1 className="text-5xl font-extrabold text-sky-400 mb-4 tracking-tight">
                  Taller para Empresas
                </h1>

                <h2 className="text-2xl font-bold text-white mb-2">Precio</h2>
                <p className="text-3xl text-sky-400 font-bold mb-6">US$ 200</p>

                <h4 className="text-xl font-semibold text-white mb-2">
                  Planes de Pago
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Pago completo antes del taller. Se puede dividir en 2 cuotas si se programa con anticipación.
                </p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8"
                >
                  <Link
                    to="/"
                    className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition"
                  >
                    Volver al inicio
                  </Link>
                </motion.div>
              </div>

              {/* Columna Derecha */}
              <div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                   Esta capacitación está pensada para empresas que desean potenciar las habilidades digitales de sus equipos. Con enfoque práctico y personalizado, <strong>Semadd</strong> brinda formación en herramientas de marketing, productividad y estrategia digital, adaptadas a las necesidades específicas del negocio. Ideal para mejorar procesos, aumentar el rendimiento y fortalecer la presencia online de forma profesional.

                </p>

                <ul className="space-y-4 text-gray-400 text-sm leading-relaxed">
                  <li>✅ Uso efectivo de herramientas digitales para empresas.</li>
                  <li>✅ Estrategias avanzadas de marketing y ventas.</li>
                  <li>✅ Optimización de procesos internos.</li>
                  <li>✅ Capacitación práctica y orientada a resultados.</li>
                  <li>✅ Soporte y seguimiento post-taller.</li>
                  <li>✅ Ideal para equipos y departamentos comerciales.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
