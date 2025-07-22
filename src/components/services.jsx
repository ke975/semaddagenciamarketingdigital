import { motion } from "framer-motion";

const categorizedPosts = [
  {
    category: "Desarrollo Web",
    items: [
      {
        title: "Start Web",
        desc: "Página web básica con diseño responsivo, formulario de contacto y SEO inicial. Ideal para emprendedores y Pymes que inician su presencia online.",
        img: "https://cdn-icons-png.flaticon.com/512/3185/3185774.png", // monitor con código
        href: "/start-web ",
      },
      {
        title: "Pro Web",
        desc: "Página web con funcionalidades avanzadas para comercios que desean realizar ventas en línea. Ideal para empresas en crecimiento.",
        img: "https://images.icon-icons.com/3559/PNG/512/shirt_online_store_ecommerce_commerce_marketplace_website_shopping_clothing_icon_225154.png", // carrito e-commerce
        href: "/pro-web",
      },
      {
        title: "Web Avanzada Escalable",
        desc: "Sistema de facturación completo con roles, caja, proveedores, clientes, ventas, finanzas y más. Para empresas que necesitan un sistema personalizado.",
        img: "https://images.icon-icons.com/4260/PNG/512/web_graphic_infographic_website_time_icon_265383.png", // engranaje y red
        href: "/web-avanzada",
      },
    ],
  },
  {
    category: "Talleres y Asesorías",
    items: [
      {
        title: "Taller: Digitalízate Ya",
        desc: "3 horas de introducción a marketing digital, funnels y herramientas clave. Ideal para emprendedores que quieren aprender a vender online.",
        img: "https://images.icon-icons.com/3780/PNG/512/presentation_office_meeting_business_discussion_people_conference_communication_user_group_icon_231917.png", // presentación
        href: "/taller-digitalizate",
      },
      {
        title: "Asesoría Personalizada",
        desc: "Sesiones 1 a 1 por Zoom o presencial. Estrategias de marketing, campañas y redes sociales para empresas y emprendedores.",
        img: "https://images.icon-icons.com/3780/PNG/512/pie_diagram_finance_statistics_report_analytics_business_graph_chart_presentation_icon_231899.png", // asesoría
        href: "/Asesoria",
      },
      {
        title: "Taller para Empresas",
        desc: "Capacitación para empresas con plan de acción digital. Ideal para equipos que quieren implementar estrategias digitales efectivas.",
        img: "https://images.icon-icons.com/2076/PNG/512/business_chart_finance_pie_statistics_icon_127241.png", // junta empresarial
        href: "/taller-empresas",
      },
    ],
  },
  {
    category: "Creación de marca (Branding)",
    items: [
      {
        title: "Marca Base",
        desc: "Logo, paleta de colores, tipografía, archivos para RRSS, favicon y firma digital.",
        img: "https://images.icon-icons.com/537/PNG/96/paint-brush-2_icon-icons.com_52930.png", // branding básico
        href: "/MarcaBase",
      },
      {
        title: "Marca Pro",
        desc: "Logo, manual básico de marca, papelería digital y plantillas editables para redes.",
        img: "https://images.icon-icons.com/2064/PNG/96/paint_colour_graphic_design_icon_124731.png", // papelería
        href: "#",
      },
      {
        title: "Identidad Total",
        desc: "Investigación, logo, manual completo, papelería, redes sociales, mockups y más.",
        img: "https://images.icon-icons.com/537/PNG/96/laptop_icon-icons.com_52935.png", // identidad corporativa
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
                >
                  <article className="bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-700 hover:border-white">
                    <a href={item.href} className="block p-6 h-full">
                      <div className="flex justify-center">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="h-36 w-36 object-contain transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                      <div className="mt-6 space-y-2 text-center">
                        <h3 className="text-xl font-bold text-white group-hover:text-indigo-400">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </a>
                  </article>
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
