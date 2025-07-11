import React from "react";
import { motion } from "framer-motion";

const timeline = [
  // ... tu contenido original aquí
];

export function ImportanceChart() {
  return (
    <section
      id="About"
      className="w-full flex flex-col items-center py-16 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-950 relative overflow-hidden"
    >
      {/* Misión y Visión */}
      <div className="max-w-4xl px-6 mb-12 text-center space-y-8">
        <motion.h2
          className="text-4xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Nuestra Esencia
        </motion.h2>

        {["Misión", "Visión"].map((section, i) => (
          <motion.div
            key={section}
            className="bg--steal-200 shadow-lg rounded-xl p-6 border-l-4 border-indigo-400 text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-2">{section}</h3>
            <p className="text-white">
              {section === "Misión"
                ? "Impulsar el crecimiento de marcas y negocios en el entorno digital, combinando creatividad, estrategia e innovación. En SEMADD, trabajamos para ofrecer soluciones personalizadas que conecten con las personas y generen resultados reales y medibles, acompañando a nuestros clientes en cada etapa de su transformación digital."
                : "Ser una agencia referente en Latinoamérica en soluciones digitales integrales, destacándonos por la calidad humana, la innovación constante y el impacto positivo que generamos en cada proyecto. Aspiramos a construir relaciones duraderas con nuestros clientes, evolucionando juntos en un mundo digital en constante cambio."}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Línea de tiempo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl px-4">
        {timeline.map((item, idx) => (
          <motion.article
            key={item.year}
            className={`relative bg-white rounded-2xl shadow-xl p-8 border-l-4 ${item.border} flex flex-col justify-between`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            aria-labelledby={`timeline-title-${idx}`}
          >
            <motion.header
              className="flex items-center gap-4 mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              viewport={{ once: true }}
            >
              <span
                className={`${item.iconBg} flex w-12 h-12 items-center justify-center rounded-full shadow-lg`}
                aria-hidden="true"
              >
                <span className={`material-icons ${item.iconColor} text-3xl`}>
                  {item.icon}
                </span>
              </span>
              <div>
                <h4 id={`timeline-title-${idx}`} className={`font-bold text-lg ${item.titleColor}`}>
                  {item.title}
                </h4>
                <time className="text-xs text-gray-400 font-semibold">{item.year}</time>
              </div>
            </motion.header>

            <p className="mb-4 text-gray-600">{item.desc}</p>

            {/* Images */}
            {item.images && (
              <div className="flex flex-wrap gap-3 mb-3">
                {item.images.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    alt={`Proyecto relacionado: imagen ${i + 1}`}
                    className="w-14 rounded-lg shadow"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    viewport={{ once: true }}
                    loading="lazy"
                  />
                ))}
              </div>
            )}

            {/* Designer */}
            {item.designer && (
              <motion.div
                className="flex items-center gap-2 mb-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <img
                  src={item.designer.img}
                  alt={`Foto de ${item.designer.name}`}
                  className="w-9 h-9 rounded-full"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-medium">{item.designer.name}</p>
                  <p className="text-xs text-gray-400">{item.designer.role}</p>
                </div>
              </motion.div>
            )}

            {/* Icons */}
            {item.icons && (
              <div className="flex flex-wrap gap-3 mb-3">
                {item.icons.map((icon, i) => (
                  <motion.img
                    key={i}
                    src={icon}
                    alt="Icono tecnológico"
                    className="w-9 h-9 rounded-md bg-green-100"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    viewport={{ once: true }}
                    loading="lazy"
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
          </motion.article>
        ))}
      </div>
    </section>
  );
}
