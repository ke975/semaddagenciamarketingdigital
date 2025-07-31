import { motion } from "framer-motion";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export function StartWeb() {
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
              {/* Columna Izquierda - Imagen y Título */}
              <div className="text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-6">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3185/3185774.png"
                    alt="Start Web"
                    className="h-36 w-36 object-contain drop-shadow-md hover:scale-110 transition-transform"
                  />
                </div>

                <h1 className="text-5xl font-extrabold text-sky-400 mb-4 tracking-tight">
                  Start Web
                </h1>

                <h2 className="text-2xl font-bold text-white mb-2">Desde</h2>
                <p className="text-3xl text-sky-400 font-bold mb-6">US$ 400</p>

                <h4 className="text-xl font-semibold text-white mb-2">
                  Planes de Pago
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  50% al inicio y 50% contra entrega. <br />
                  Posibilidad de negociar en 2 cuotas mensuales sin recargo.
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

              {/* Columna Derecha - Descripción y Detalles */}
              <div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Este servicio es ideal porque combina rapidez, calidad y estrategia. Con una presencia online profesional, tus clientes te encontrarán más fácilmente, generando confianza y aumentando tus oportunidades de venta. Además, contarás con el respaldo de <strong>Semadd, una agencia especializada en Marketing, Diseño y Desarrollo Web Empresarial</strong>, comprometida con el crecimiento digital de tu proyecto.

                </p>

                <ul className="space-y-4 text-gray-400 text-sm leading-relaxed">
                  <li>
                    ✅ Dominio y hosting básico incluido el primer año.
                  </li>
                  <li>
                    ✅ Página de contacto funcional con formulario y ubicación
                    en Google Maps.
                  </li>
                  <li>
                    ✅ Integración con redes sociales y botones de WhatsApp.
                  </li>
                  <li>
                    ✅ Hasta 5 secciones: Inicio, Servicios, Sobre Nosotros,
                    Contacto y Galería.
                  </li>
                  <li>
                    ✅ Panel de administración básico (opcional).
                  </li>
                  <li>
                    ✅ Entrega en 7-10 días hábiles.
                  </li>
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
