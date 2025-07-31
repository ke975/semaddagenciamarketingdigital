import { motion } from "framer-motion";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export function MarcaBase() {
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
                    src="https://images.icon-icons.com/537/PNG/96/paint-brush-2_icon-icons.com_52930.png"
                    alt="Marca Base"
                    className="h-36 w-36 object-contain drop-shadow-md hover:scale-110 transition-transform"
                  />
                </div>

                <h1 className="text-5xl font-extrabold text-sky-400 mb-4 tracking-tight">
                  Marca Base
                </h1>

                <h2 className="text-2xl font-bold text-white mb-2">Precio</h2>
                <p className="text-3xl text-sky-400 font-bold mb-6">US$ 120</p>

                <h4 className="text-xl font-semibold text-white mb-2">
                  Planes de Pago
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Pago único antes de iniciar. Posibilidad de dividir en 2 cuotas sin recargo.
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
                   Este servicio de branding integral está pensado para fortalecer la identidad visual de tu marca desde la base. Incluye el diseño de un logotipo profesional, paleta de colores, selección tipográfica, favicon, firma digital y archivos adaptados para redes sociales. Con <strong>Semadd</strong>, tu marca tendrá una imagen coherente, moderna y lista para destacar en cualquier plataforma.

                </p>

                <ul className="space-y-4 text-gray-400 text-sm leading-relaxed">
                  <li>✅ Diseño profesional y personalizado.</li>
                  <li>✅ Archivos listos para redes sociales y web.</li>
                  <li>✅ Manual básico de uso de marca.</li>
                  <li>✅ Favicon para tu sitio web.</li>
                  <li>✅ Firma digital para correos electrónicos.</li>
                  <li>✅ Entrega rápida y soporte post-entrega.</li>
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
