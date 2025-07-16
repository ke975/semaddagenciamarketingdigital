import { motion } from "framer-motion";



const categorizedPosts = [
  {
    category: "Desarrollo Web",
    items: [
      {
        title: "Start Web",
        desc: "Pagina web básica con diseño responsivo, formulario de contacto y SEO inicial.",
        img: "https://cdn-icons-png.flaticon.com/512/3185/3185774.png",
      
        href: "#",
      },
      {
        title: "Pro Web",
        desc: "pagina web con funcionalidades avanzadas para comercios que desean realizar ventas en linea a traves de pasarelas de pagos.",
        img: "https://cdn-icons-png.flaticon.com/512/9743/9743831.png",
        
        href: "#",
      },
      {
        title: "Web Avanzada Escalable",
        desc: "Sistema de facturación con roles avanzados, permisos, modulo de caja, proveedores, clientes, ventas, finanzas y mucho más.",
        img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        
        href: "#",
      },
    ],
  },
  {
    category: "Talleres y Asesorías",
    items: [
      {
        title: "Taller: Digitalízate Ya",
        desc: "3 horas de introducción a marketing digital, funnels y herramientas clave.",
        img: "https://cdn-icons-png.flaticon.com/512/10498/10498182.png",
      
        href: "#",
      },
      {
        title: "Asesoría Personalizada",
        desc: "Sesiones 1 a 1 por Zoom o presencial, estrategias de marketing digital, campañas y redes sociales.",
        img: "https://cdn-icons-png.flaticon.com/512/3871/3871730.png",
        
        href: "#",
      },
      {
        title: "Taller para Empresas",
        desc: "Capacitación para empresas de hasta 10 personas con plan de acción digital.",
        img: "https://cdn-icons-png.flaticon.com/512/4020/4020290.png",
      
        href: "#",
      },
    ],
  },
  {
    category: "Creación de marca (Branding)",
    items: [
      {
        title: "Marca Base",
        desc: "Logo + paleta + tipografía + archivos para RRSS, favicon y firma digital.",
        img: "https://cdn-icons-png.flaticon.com/512/10498/10498183.png",
        
        href: "#",
      },
      {
        title: "Marca Pro",
        desc: "Logo + manual de marca básico + papelería digital + plantilla editable para redes.",
        img: "https://cdn-icons-png.flaticon.com/512/864/864685.png",
        
        href: "#",
      },
      {
        title: "Identidad Total",
        desc: "Investigación, logo, manual de marca completo, papelería, redes, mockups y más.",
        img: "https://cdn-icons-png.flaticon.com/512/10884/10884795.png",
        
        href: "#",
      },
    ],
  },
];

export function Services() {
  return (
    <section
      className="py-32 relative pt-24 bg-gradient-to-b from-gray-700 via-gray-900 to-gray-800 overflow-hidden"
      id="services"
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h1 className="text-4xl font-extrabold text-white">Servicios</h1>
        </div>

        {categorizedPosts.map((categoryBlock, catIdx) => (
          <div key={catIdx} className="mt-20">
            <h2 className="text-2xl text-white font-bold mb-8 border-b border-gray-600 pb-2">
              {categoryBlock.category}
            </h2>

            <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {categoryBlock.items.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-steal-200 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer border border-gray-200 hover:border-white"
                >
                  <a href={item.href} className="block p-6">
                    <div className="flex justify-center">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="h-40 w-40 object-contain transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="mt-6 space-y-2">
                      <span className="inline-block text-white font-semibold text-sm tracking-wide">
                        {item.date}
                      </span>
                      <h3 className="text-xl font-semibold text-white group-hover:text-white transition-colors duration-200">
                        {item.title}
                      </h3>
                      <p className="text-white text-sm leading-relaxed group-hover:text-white transition-colors duration-200">
                        {item.desc}
                      </p>
                    </div>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
