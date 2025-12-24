import { motion } from "framer-motion";

const categorizedPosts = [
  {
    category: "Desarrollo de Software ",
    items: [
      {
        title: "Desarrollo de software y sistemas a medida",
        desc: "Creamos soluciones digitales personalizadas que se adaptan a las necesidades de tu negocio. Desde páginas web profesionales hasta sistemas a medida que optimizan procesos, mejoran la productividad y fortalecen tu presencia digital.",
        img: "https://cdn-icons-png.flaticon.com/512/3185/3185774.png",
        href: "/start-web",
      },
      {
        title: "Automatización de Procesos y flujos de trabajo",
        desc: "Ayudamos a transformar tu negocio mediante la automatización y digitalización de procesos internos. Implementamos herramientas tecnológicas que reducen costos, mejoran el control y aumentan la eficiencia operativa.",
        img: "https://images.icon-icons.com/3559/PNG/512/shirt_online_store_ecommerce_commerce_marketplace_website_shopping_clothing_icon_225154.png",
        href: "/pro-web",
      },
   {
  title: "Web Avanzada y Aplicaciones Móviles",
  desc: "Desarrollamos plataformas web avanzadas y escalables junto con aplicaciones móviles para Android e iOS. Soluciones pensadas para crecer con tu empresa, con alto rendimiento, seguridad, integración con sistemas y una experiencia optimizada en cualquier dispositivo.",
  img: "https://images.icon-icons.com/4260/PNG/512/web_graphic_infographic_website_time_icon_265383.png",
  href: "/web-avanzada",
},

    ],
  },
  {
    category: "Talleres y Asesorías",
    items: [
      {
        title: "Asesoría empresarial en IT y automatización",
        desc: "Brindamos asesoría estratégica para empresarios y emprendedores que desean implementar tecnología y automatización en sus negocios, optimizando recursos, mejorando la toma de decisiones y aumentando su competitividad.",
        img: "https://images.icon-icons.com/3780/PNG/512/presentation_office_meeting_business_discussion_people_conference_communication_user_group_icon_231917.png",
        href: "/taller-digitalizate",
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
          <h1 className="text-4xl font-extrabold text-white">Servicios claves </h1>
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
                    <a  className="block p-6 h-full">
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
