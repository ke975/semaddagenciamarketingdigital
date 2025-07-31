import { motion } from "framer-motion";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export function Asesoria() {
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
                    src="https://images.icon-icons.com/3780/PNG/512/pie_diagram_finance_statistics_report_analytics_business_graph_chart_presentation_icon_231899.png"
                    alt="Asesoría Personalizada"
                    className="h-36 w-36 object-contain drop-shadow-md hover:scale-110 transition-transform"
                  />
                </div>

                <h1 className="text-5xl font-extrabold text-sky-400 mb-4 tracking-tight">
                  Asesoría Personalizada
                </h1>

                <h2 className="text-2xl font-bold text-white mb-2">Precio</h2>
                <p className="text-3xl text-sky-400 font-bold mb-6">US$ 50/hora</p>

                <h4 className="text-xl font-semibold text-white mb-2">
                  Planes de Pago
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Se paga por sesión anticipadamente. Paquetes mensuales disponibles con descuento.
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
                    Este servicio de asesoría personalizada 1 a 1 por Zoom o presencial está diseñado para empresas y emprendedores que desean optimizar sus estrategias de marketing digital. Con <strong>Semadd</strong>, recibirás orientación experta en campañas, posicionamiento y redes sociales, todo adaptado a tus objetivos y al mercado actual. Ideal para quienes buscan resultados concretos con acompañamiento profesional.

                </p>

                <ul className="space-y-4 text-gray-400 text-sm leading-relaxed">
                  <li>✅ Estrategias personalizadas adaptadas a tu negocio.</li>
                  <li>✅ Planificación y optimización de campañas publicitarias.</li>
                  <li>✅ Gestión efectiva de redes sociales.</li>
                  <li>✅ Soporte continuo y seguimiento de resultados.</li>
                  <li>✅ Recomendado para emprendedores y pymes.</li>
                  <li>✅ Modalidad presencial o virtual según disponibilidad.</li>
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
