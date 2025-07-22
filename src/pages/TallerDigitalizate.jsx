import { motion } from "framer-motion";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export function TallerDitalizate() {
  

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
                src="https://images.icon-icons.com/3780/PNG/512/presentation_office_meeting_business_discussion_people_conference_communication_user_group_icon_231917.png"
                alt="Start Web"
                className="h-36 w-36 object-contain"
              />
            </div>

            <h1 className="text-4xl font-extrabold mb-4">Taller: Digitalízate Ya</h1>
            <p className="text-gray-400 text-lg mb-6">
           3 horas de introducción a marketing digital, funnels y herramientas clave. Ideal para emprendedores que quieren aprender a vender online.
            </p>

            <h2 className="text-xl text-sky-400 font-semibold mb-2">
        US$ 25/pax
            </h2>

            <h4 className="text-2xl font-semibold text-white mb-2">
              Planes de Pagos
            </h4>
            <p className="text-gray-400 mb-8">
            Pago único antes del inicio del taller.
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
