import sectionImage from "../assets/Section.png";
import { useState } from "react";
import Logo from "../assets/Logo.png"; 




import { motion } from "framer-motion";

export function ContactForm(){

    const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mzzvpvqg", { // Reemplazá con tu endpoint
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

    return (
      <>
     <section
     
        className="min-h-screen flex items-center justify-center py-20 px-6"
      >
        <div className="bg-gray-900 bg-opacity-90 p-8 rounded-xl shadow-lg w-full max-w-5xl">
          <motion.h2
            className="text-3xl font-bold text-white mb-10 text-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contáctanos
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-white text-base space-y-6 flex flex-col justify-center">
                <img src={Logo} alt="Logo Semadd" className="w-96x-auto mb-6" />

              <p>
                <strong className="text-sky-400">📞 Teléfono:</strong> +505 8164-6729
              </p>
              <p>
                <strong className="text-sky-400">📞 Alternativo:</strong> +505 8947-6163
              </p>
             
           
              <p>
                ¡Estamos disponibles para responder tus consultas y ayudarte a impulsar tu
                negocio con soluciones digitales a medida!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label className="block text-gray-300 mb-1" htmlFor="name">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-1" htmlFor="email">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="tucorreo@ejemplo.com"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-1" htmlFor="message">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  placeholder="Contanos cómo podemos ayudarte..."
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div className="text-center">
                <motion.button
                  type="submit"
                  className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  Enviar mensaje
                </motion.button>
              </div>

              {status === "success" && (
                <p className="text-green-400 mt-4 text-center">
                  ¡Mensaje enviado con éxito!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 mt-4 text-center">
                  Hubo un error, intentá de nuevo.
                </p>
              )}
            </form>
          </div>
        </div>
    </section>
    </>
    );
    


}




