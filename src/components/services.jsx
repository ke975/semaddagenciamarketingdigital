import { motion } from "framer-motion";

const posts = [
  // Servicios Web
  {
    title: "Start Web",
    desc: "Sistema web básico con login, formularios, dashboard simple y panel de control.",
    img: "https://cdn-icons-png.flaticon.com/512/3185/3185774.png",
    date: "Desde US$ 400",
    href: "#",
  },
  {
    title: "Pro Web",
    desc: "CRM o ERP básico, con facturación, control de usuarios y reportes exportables.",
    img: "https://cdn-icons-png.flaticon.com/512/9743/9743831.png",
    date: "Desde US$ 850",
    href: "#",
  },
  {
    title: "Web Avanzada Escalable",
    desc: "Sistema modular conectado a API externa, con backups, roles avanzados y permisos.",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    date: "Desde US$ 1200",
    href: "#",
  },
  // Marketing
  {
    title: "Taller: Digitalízate Ya",
    desc: "3 horas de introducción a marketing digital, funnels y herramientas clave.",
    img: "https://cdn-icons-png.flaticon.com/512/10498/10498182.png",
    date: "US$ 25/pax",
    href: "#",
  },
  {
    title: "Asesoría Personalizada",
    desc: "Sesiones 1 a 1 por Zoom o presencial, estrategias, campañas y redes.",
    img: "https://cdn-icons-png.flaticon.com/512/3871/3871730.png",
    date: "US$ 50/hora",
    href: "#",
  },
  {
    title: "Taller para Equipos",
    desc: "Capacitación para empresas de hasta 10 personas con plan de acción digital.",
    img: "https://cdn-icons-png.flaticon.com/512/4020/4020290.png",
    date: "US$ 150",
    href: "#",
  },
  // Branding
  {
    title: "Marca Base",
    desc: "Logo + paleta + tipografía + archivos para RRSS, favicon y firma digital.",
    img: "https://cdn-icons-png.flaticon.com/512/10498/10498183.png",
    date: "US$ 120",
    href: "#",
  },
  {
    title: "Marca Pro",
    desc: "Logo + manual básico + papelería digital + plantilla editable para redes.",
    img: "https://cdn-icons-png.flaticon.com/512/864/864685.png",
    date: "US$ 250",
    href: "#",
  },
  {
    title: "Identidad Total",
    desc: "Investigación, logo, manual completo, papelería, redes, mockups y más.",
    img: "https://cdn-icons-png.flaticon.com/512/10884/10884795.png",
    date: "US$ 400",
    href: "#",
  },
];

export function Services() {
  return (
    <section className="py-32  bg-gradient-to-br from-indigo-100 via-white to-indigo-200">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h1 className="text-4xl font-extrabold text-gray-900">Paquetes y Servicios SEMMAD</h1>
          <p className="text-gray-600 text-lg">
            Soluciones digitales, talleres, asesorías y branding pensadas para crecer.
          </p>
        </div>

        <ul className="grid gap-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((item, idx) => (
            <motion.li
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={idx}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer"
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
                  <span className="inline-block text-indigo-600 font-semibold text-sm tracking-wide">
                    {item.date}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors duration-200">
                    {item.desc}
                  </p>
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
