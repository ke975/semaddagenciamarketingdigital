import { motion } from "framer-motion";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export function ProWeb() {
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
                    src="https://images.icon-icons.com/3559/PNG/512/shirt_online_store_ecommerce_commerce_marketplace_website_shopping_clothing_icon_225154.png"
                    alt="Pro Web"
                    className="h-36 w-36 object-contain drop-shadow-md hover:scale-110 transition-transform"
                  />
                </div>

                <h1 className="text-5xl font-extrabold text-sky-400 mb-4 tracking-tight">
                  Pro Web
                </h1>

                <h2 className="text-2xl font-bold text-white mb-2">Desde</h2>
                <p className="text-3xl text-sky-400 font-bold mb-6">US$ 850</p>

                <h4 className="text-xl font-semibold text-white mb-2">
                  Planes de Pago
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  60% al inicio, 40% en 30 días. <br />
                  Consultar por opciones de financiamiento sin intereses.
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
                  Este servicio es la mejor opción para quienes buscan vender en línea sin complicaciones técnicas. Al contar con una tienda virtual bien diseñada, segura y profesional, tus clientes podrán comprar tus productos o servicios con confianza. Además, <strong>Semadd</strong> se encarga de integrar todas las herramientas necesarias para que tu negocio funcione 24/7, ayudándote a aumentar tus ventas, expandir tu mercado y posicionar tu marca en el entorno digital.

                </p>

                <ul className="space-y-4 text-gray-400 text-sm leading-relaxed">
                  <li>✅ Catálogo de productos autogestionable.</li>
                  <li>✅ Integración con pasarela de pago (MercadoPago, Stripe, PayPal).</li>
                  <li>✅ Página de inicio + tienda + contacto + políticas.</li>
                  <li>✅ Hosting y dominio por 1 año incluidos.</li>
                  <li>✅ Integración con WhatsApp y redes sociales.</li>
                  <li>✅ Certificado SSL y sitio seguro (HTTPS).</li>
                  <li>✅ Entrega en 10-15 días hábiles.</li>
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
