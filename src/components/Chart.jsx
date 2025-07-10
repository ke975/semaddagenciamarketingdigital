import React from "react";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2021",
   
    iconBg: "bg-indigo-200",
    iconColor: "text-indigo-600",
    border: "border-indigo-400",
    title: "Nace SEMADD Agencia",
    titleColor: "text-indigo-700",
    desc: "SEMADD surge con la misión de impulsar empresas al mundo digital, combinando creatividad, tecnología y estrategia para lograr resultados reales.",
    tag: "Fundación",
    tagBg: "bg-indigo-100",
    tagColor: "text-indigo-700",
  },
  {
    year: "2022",
    icon: "web",
    iconBg: "bg-sky-200",
    iconColor: "text-sky-600",
    border: "border-sky-400",
    title: "Primeros Proyectos Web",
    titleColor: "text-sky-700",
    desc: "Lanzamos nuestros primeros sitios web empresariales, ayudando a pymes a tener presencia profesional y funcional en internet.",
    images: [
      "https://cdn.flyonui.com/fy-assets/components/timeline/image-2.png",
      "https://cdn.flyonui.com/fy-assets/components/timeline/image-3.png",
      "https://cdn.flyonui.com/fy-assets/components/timeline/image-1.png",
      "https://cdn.flyonui.com/fy-assets/components/timeline/image-4.png",
    ],
    tag: null,
  },
  {
    year: "2023",
  
    iconBg: "bg-pink-200",
    iconColor: "text-pink-600",
    border: "border-pink-400",
    title: "Diseño Creativo",
    titleColor: "text-pink-700",
    desc: "Incorporamos servicios de branding y diseño gráfico, creando identidades visuales únicas para nuestros clientes.",
    designer: {
      img: "https://cdn.flyonui.com/fy-assets/avatar/avatar-6.png",
      name: "Equipo Creativo SEMADD",
      role: "Diseño & Branding",
    },
    tag: "Creatividad",
    tagBg: "bg-pink-100",
    tagColor: "text-pink-700",
  },
  {
    year: "2024",
 
    iconBg: "bg-green-200",
    iconColor: "text-green-600",
    border: "border-green-400",
    title: "Marketing Digital",
    titleColor: "text-green-700",
    desc: "Expandimos nuestros servicios a campañas de marketing digital, SEO y gestión de redes sociales, logrando resultados medibles para nuestros clientes.",
    icons: [
      "https://cdn.flyonui.com/fy-assets/components/card/icon-1.png",
      "https://cdn.flyonui.com/fy-assets/components/card/icon-2.png",
      "https://cdn.flyonui.com/fy-assets/components/card/icon-3.png",
    ],
    tags: [
      { text: "SEO", bg: "bg-green-100", color: "text-green-700" },
      { text: "Ads", bg: "bg-green-100", color: "text-green-700" },
      { text: "Redes Sociales", bg: "bg-green-100", color: "text-green-700" },
    ],
  },
  {
    year: "2025",
  
    iconBg: "bg-purple-200",
    iconColor: "text-purple-600",
    border: "border-purple-400",
    title: "Innovación y Futuro",
    titleColor: "text-purple-700",
    desc: "SEMADD sigue creciendo, apostando por la innovación, nuevas tecnologías y soluciones digitales a medida para empresas de todos los tamaños.",
    tag: "Innovación",
    tagBg: "bg-purple-100",
    tagColor: "text-purple-700",
  },
];

export function ImportanceChart() {
  return (
    <div className="w-full flex justify-center py-12 bg-gradient-to-br from-indigo-100 via-white to-indigo-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        {timeline.map((item, idx) => (
          <motion.div
            key={item.year}
            className={`relative bg-white rounded-2xl shadow-xl p-8 border-l-4 ${item.border} flex flex-col justify-between`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
          >
            <motion.div
              className="flex items-center gap-4 mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              viewport={{ once: true }}
            >
              <span className={`${item.iconBg} flex size-12 items-center justify-center rounded-full shadow-lg`}>
                <span className={`material-icons ${item.iconColor} text-3xl`}>{item.icon}</span>
              </span>
              <div>
                <div className={`font-bold text-lg ${item.titleColor}`}>{item.title}</div>
                <div className="text-xs text-gray-400 font-semibold">{item.year}</div>
              </div>
            </motion.div>
            <div className="mb-4 text-gray-600">{item.desc}</div>
            {/* Extra content per item */}
            {item.images && (
              <div className="flex flex-wrap gap-3 mb-3">
                {item.images.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    alt="proyecto web"
                    className="w-14 rounded-lg shadow"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    viewport={{ once: true }}
                  />
                ))}
              </div>
            )}
            {item.designer && (
              <motion.div
                className="flex items-center gap-2 mb-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <img src={item.designer.img} alt="Diseñador" className="w-9 h-9 rounded-full" />
                <div>
                  <p className="text-sm font-medium">{item.designer.name}</p>
                  <p className="text-xs text-gray-400">{item.designer.role}</p>
                </div>
              </motion.div>
            )}
            {item.icons && (
              <div className="flex flex-wrap gap-3 mb-3">
                {item.icons.map((icon, i) => (
                  <motion.img
                    key={i}
                    src={icon}
                    alt="icon"
                    className="w-9 h-9 rounded-md bg-green-100"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    viewport={{ once: true }}
                  />
                ))}
              </div>
            )}
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {item.tag && (
                <motion.span
                  className={`inline-block px-3 py-1 ${item.tagBg} ${item.tagColor} rounded-full text-xs font-semibold`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  {item.tag}
                </motion.span>
              )}
              {item.tags &&
                item.tags.map((t, i) => (
                  <motion.span
                    key={i}
                    className={`inline-block px-3 py-1 ${t.bg} ${t.color} rounded-full text-xs font-semibold`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {t.text}
                  </motion.span>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}