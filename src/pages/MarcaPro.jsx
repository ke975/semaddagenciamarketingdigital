import { motion } from "framer-motion";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export function MarcaPro() {
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
                    src="https://images.icon-icons.com/2064/PNG/96/paint_colour_graphic_design_icon_124731.png"
                    alt="Marca Pro"
                    className="h-36 w-36 object-contain drop-shadow-md hover:scale-110 transition-transform"
                  />
                </div>

                <h1 className="text-5xl font-extrabold text-sky-400 mb-4 tracking-tight">
                  Marca Pro
                </h1>

                <h2 className="text-2xl font-bold text-white mb-2">Precio</h2>
                <p className="text-3xl text-sky-400 font-bold mb-6">US$ 250</p>

                <h4 className="text-xl font-semibold text-white mb-2">
                  Planes de Pago
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  50% al inicio, 50% al entregar el manual. Opciones de pago mensual disponibles.
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
                   Un paquete profesional que incluye un logo diseñado a la medida, papelería digital completa, un manual de uso detallado y plantillas editables. Todo lo necesario para que tu marca mantenga una imagen consistente y sólida en todos sus canales y comunicaciones.

                </p>

                <ul className="space-y-4 text-gray-400 text-sm leading-relaxed">
                  <li>✅ Diseño de logo avanzado y moderno.</li>
                  <li>✅ Papelería digital para impresión y web.</li>
                  <li>✅ Manual de identidad visual completo.</li>
                  <li>✅ Plantillas editables para redes sociales y documentos.</li>
                  <li>✅ Soporte y asesoría para implementación.</li>
                  <li>✅ Entrega profesional y garantía de satisfacción.</li>
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
