import React from "react";

const servicios = [
  {
    title: "Marketing Digital",
    desc: "Estrategias personalizadas en redes sociales, Google Ads, email marketing y más para aumentar tu visibilidad y captar clientes.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    authorLogo: "https://cdn.flyonui.com/fy-assets/avatar/avatar-6.png",
    authorName: "Equipo SEMADD",
    date: "2024",
    href: "#",
  },
  {
    title: "Diseño Web",
    desc: "Sitios web modernos, responsivos y optimizados para convertir visitantes en clientes. Experiencia visual y funcional para tu marca.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    authorLogo: "https://cdn.flyonui.com/fy-assets/avatar/avatar-7.png",
    authorName: "Equipo SEMADD",
    date: "2024",
    href: "#",
  },
  {
    title: "Desarrollo de Sistemas de facturación",
    desc: "Desarrollamos sistemas de facturación personalizados y automatizados para tu empresa: gestión de ventas, control de inventario, generación de facturas electrónicas y reportes en tiempo real.",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    authorLogo: "https://cdn.flyonui.com/fy-assets/avatar/avatar-8.png",
    authorName: "Equipo Creativo",
    date: "2024",
    href: "#",
  },
  {
    title: "Desarrollo Web",
    desc: "Desarrollo de sitios y aplicaciones web a medida, seguros, escalables y rápidos. Soluciones tecnológicas para empresas modernas.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    authorLogo: "https://cdn.flyonui.com/fy-assets/avatar/avatar-9.png",
    authorName: "Equipo Dev",
    date: "2024",
    href: "#",
  },
  {
    title: "Consultoría & Estrategia",
    desc: "Asesoría digital, auditoría de presencia online y acompañamiento estratégico para que tu empresa crezca y se adapte al entorno digital.",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    authorLogo: "https://cdn.flyonui.com/fy-assets/avatar/avatar-10.png",
    authorName: "Consultores SEMADD",
    date: "2024",
    href: "#",
  },
];

export function Services() {
  return (
    <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
      <div className="text-center">
        <h1 className="text-3xl text-indigo-700 font-extrabold">
          Nuestros Servicios
        </h1>
        <p className="mt-3 text-gray-500">
          Soluciones digitales integrales para potenciar tu marca y tu negocio.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {servicios.map((item, key) => (
          <article
            className="max-w-md mx-auto mt-4 shadow-lg border rounded-2xl duration-300 hover:shadow-2xl bg-white group"
            key={key}
          >
            <a href={item.href}>
              <img
                src={item.img}
                loading="lazy"
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
              />
              <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                <div className="flex-none w-10 h-10 rounded-full">
                  <img
                    src={item.authorLogo}
                    className="w-full h-full rounded-full"
                    alt={item.authorName}
                  />
                </div>
                <div className="ml-3">
                  <span className="block text-gray-900 font-semibold">{item.authorName}</span>
                  <span className="block text-gray-400 text-sm">{item.date}</span>
                </div>
              </div>
              <div className="pt-3 ml-4 mr-2 mb-3">
                <h3 className="text-xl text-indigo-700 font-bold">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}