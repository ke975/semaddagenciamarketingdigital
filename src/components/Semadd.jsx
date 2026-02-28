import React from "react";

export function AboutSemadd() {
  return (
    <section className="relative bg-gray-950 text-white py-24 px-6 overflow-hidden">
      
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto text-center">

        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre <span className="text-white">SEMADD</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
          
Digitalizamos y automatizamos tu empresa para que sea más eficiente, competitiva y rentable. Desarrollamos software a medida, sistemas empresariales, aplicaciones móviles y automatizaciones inteligentes que eliminan procesos manuales, optimizan la operación y convierten tu negocio en una empresa eficiente y rentable.
Agenda hoy una asesoría gratuita.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            SEMADD es una empresa de tecnología especializada en la digitalización y automatización de procesos empresariales. Desarrollamos software a medida, sistemas empresariales y aplicaciones móviles, además de brindar asesorías y talleres en tecnologías de la información para fortalecer la competitividad de nuestros clientes.
          </p>

          <p>
            Por eso trabajamos desde la estrategia hasta la ejecución completa,
            creando un ecosistema digital alineado a resultados reales.
          </p>
        </div>

    

        {/* Highlight */}
   

      </div>
    </section>
  );
}