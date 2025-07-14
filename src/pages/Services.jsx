import { motion } from "framer-motion";
import { Nav } from "../components/navbar";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

const categorizedPosts = [
  {
    category: "Desarrollo Web",
    items: [
      {
        title: "Start Web",
        desc: "La opción perfecta para comenzar. Creamos una página web moderna, rápida, adaptada a móviles y optimizada para Google.",
        img: "https://cdn-icons-png.flaticon.com/512/3185/3185774.png",
        date: "Desde US$ 400",
        href: "/start-web",
        terms: "50% al inicio y 50% contra entrega. Posibilidad de negociar en 2 cuotas mensuales sin recargo.",
      },
      {
        title: "Pro Web",
        desc: "Este paquete incluye pasarela de pagos, catálogo de productos y todo lo que necesitás para vender online.",
        img: "https://cdn-icons-png.flaticon.com/512/9743/9743831.png",
        date: "Desde US$ 850",
        href: "/pro-web",
        terms: "60% al inicio, 40% en 30 días. Consultar por opciones de financiamiento sin intereses.",
      },
      {
        title: "Web Avanzada Escalable",
        desc: "Sistema robusto con facturación, gestión de clientes y más. Totalmente personalizado.",
        img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        date: "Desde US$ 1200",
        href: "/web-avanzada",
        terms: "30% inicial, 40% a la mitad del desarrollo, 30% al finalizar. Se puede financiar hasta 3 cuotas mensuales.",
      },
    ],
  },
  {
    category: "Talleres y Asesorías",
    items: [
      {
        title: "Taller: Digitalízate Ya",
        desc: "Entendé marketing digital y herramientas clave en solo 3 horas.",
        img: "https://cdn-icons-png.flaticon.com/512/10498/10498182.png",
        date: "US$ 25/pax",
        href: "/taller-digitalizate",
        terms: "Pago único antes del inicio del taller.",
      },
      {
        title: "Asesoría Personalizada",
        desc: "Asesoría 1 a 1 para diseñar campañas, estrategias y presencia online.",
        img: "https://cdn-icons-png.flaticon.com/512/3871/3871730.png",
        date: "US$ 50/hora",
        href: "/asesoria",
        terms: "Se paga por sesión anticipadamente. Paquetes mensuales disponibles con descuento.",
      },
      {
        title: "Taller para Empresas",
        desc: "Capacitación para equipos con herramientas digitales y marketing.",
        img: "https://cdn-icons-png.flaticon.com/512/4020/4020290.png",
        date: "US$ 200",
        href: "/taller-empresas",
        terms: "Pago completo antes del taller. Se puede dividir en 2 cuotas si se programa con anticipación.",
      },
    ],
  },
  {
    category: "Creación de marca (Branding)",
    items: [
      {
        title: "Marca Base",
        desc: "Logo profesional, colores y tipografías coherentes para tu marca.",
        img: "https://cdn-icons-png.flaticon.com/512/10498/10498183.png",
        date: "US$ 120",
        href: "/marca-base",
        terms: "Pago único antes de iniciar. Posibilidad de dividir en 2 cuotas sin recargo.",
      },
      {
        title: "Marca Pro",
        desc: "Logo, papelería digital, manual de uso y plantillas editables.",
        img: "https://cdn-icons-png.flaticon.com/512/864/864685.png",
        date: "US$ 250",
        href: "/marca-pro",
        terms: "50% al inicio, 50% al entregar el manual. Opciones de pago mensual disponibles.",
      },
      {
        title: "Identidad Total",
        desc: "Estudio de mercado, manual completo, redes, tono de voz y más.",
        img: "https://cdn-icons-png.flaticon.com/512/10884/10884795.png",
        date: "US$ 400",
        href: "/identidad-total",
        terms: "30% inicial, resto en hasta 3 cuotas mensuales. Contrato de servicio incluido.",
      },
    ],
  },
];

export function Services() {
  return (
    <div className="bg-gray-900">
      <Nav />

      <section
        className="py-32 pt-24 bg-gradient-to-b from-gray-700 via-gray-900 to-gray-800 overflow-hidden"
        id="services"
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
            <h1 className="text-4xl font-extrabold text-white">Nuestros Servicios</h1>
            <p className="text-gray-300 text-lg">
              En <span className="text-sky-400 font-bold">Semadd</span>, te ayudamos a escalar tu negocio con soluciones digitales creativas y efectivas. Descubrí cómo podemos impulsar tu marca:
            </p>
          </div>

          {categorizedPosts.map((categoryBlock, catIdx) => (
            <div key={catIdx} className="mt-16">
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
                    className="bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer border border-gray-600 hover:border-sky-400"
                  >
                    <Link to={item.href} className="block p-6">
                      <div className="flex justify-center">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="h-36 w-36 object-contain transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                      <div className="mt-6 space-y-2">
                        <span className="inline-block text-sky-400 font-semibold text-sm tracking-wide">
                          {item.date}
                        </span>
                        <h3 className="text-xl font-semibold text-white group-hover:text-sky-400 transition-colors duration-200">
                          {item.title}
                        </h3>
                        <p className="text-white text-sm leading-relaxed group-hover:text-gray-100 transition-colors duration-200">
                          {item.desc}
                        </p>
                        <p className="text-gray-400 text-xs mt-2">
                          <strong>Plazos/Pagos:</strong> {item.terms}
                        </p>
                      </div>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
