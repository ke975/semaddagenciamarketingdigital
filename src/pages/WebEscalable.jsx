import { motion } from "framer-motion";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export function WebEscalable() {
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
                    src="https://images.icon-icons.com/4260/PNG/512/web_graphic_infographic_website_time_icon_265383.png"
                    alt="Web Avanzada Escalable"
                    className="h-36 w-36 object-contain drop-shadow-md hover:scale-110 transition-transform"
                  />
                </div>

                <h1 className="text-5xl font-extrabold text-sky-400 mb-4 tracking-tight">
                  Web Avanzada Escalable
                </h1>

                <h2 className="text-2xl font-bold text-white mb-2">Desde</h2>
                <p className="text-3xl text-sky-400 font-bold mb-6">US$ 1200</p>

                <h4 className="text-xl font-semibold text-white mb-2">
                  Planes de Pago
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  30% inicial, 40% a la mitad del desarrollo, 30% al finalizar. <br />
                  Se puede financiar hasta 3 cuotas mensuales.
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
                  Este plan es ideal para empresas o emprendimientos que necesitan
                  una solución avanzada, con arquitectura escalable, funcionalidades
                  personalizadas y herramientas de gestión integradas.
                </p>

                <ul className="space-y-4 text-gray-400 text-sm leading-relaxed">
                  <li>✅ Facturación electrónica integrada.</li>
                  <li>✅ Gestión de clientes (CRM básico).</li>
                  <li>✅ Panel de administración personalizado.</li>
                  <li>✅ Módulos adicionales a medida: reportes, roles, inventario, etc.</li>
                  <li>✅ Infraestructura preparada para escalar con el crecimiento.</li>
                  <li>✅ Hosting profesional, backups automáticos y alta disponibilidad.</li>
                  <li>✅ Tiempos de entrega estimados: 15-25 días hábiles según requerimientos.</li>
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
