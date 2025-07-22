import { motion } from "framer-motion";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export function WebEscalable() {
  

  return (
    <>
      <section className="py-24 bg-gray-900 text-white min-h-screen">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-8">
              <img
                src="https://images.icon-icons.com/3559/PNG/512/shirt_online_store_ecommerce_commerce_marketplace_website_shopping_clothing_icon_225154.png"
                alt="Web Avanzada Escalable"
                className="h-36 w-36 object-contain"
              />
            </div>

            <h1 className="text-4xl font-extrabold mb-4">Web Avanzada Escalable</h1>
            <p className="text-gray-400 text-lg mb-6">
             Sistema robusto con facturación, gestión de clientes y más. Totalmente personalizado.
            </p>

            <h2 className="text-xl text-sky-400 font-semibold mb-2">
          Desde US$ 1200
            </h2>

            <h4 className="text-2xl font-semibold text-white mb-2">
              Planes de Pagos
            </h4>
            <p className="text-gray-400 mb-8">
          30% inicial, 40% a la mitad del desarrollo, 30% al finalizar. Se puede financiar hasta 3 cuotas mensuales.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
         
              className="mt-6 inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-6 rounded-full transition"
            >
                <Link to="/" className="flex items-center justify-center">
                   Volver al inicio
                </Link>
           
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
