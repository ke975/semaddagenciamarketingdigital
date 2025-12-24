import { motion } from "framer-motion";

export function Pricing() {
    const plans = [
        {
            name: "Presencia Digital",
            desc: "Ideal para emprendedores y negocios que inician su transformación digital.",
            isMostPop: false,
            features: [
                "Página web profesional responsiva",
                "Formulario de contacto",
                "Optimización SEO inicial",
                "Integración con redes sociales",
                "Asesoría básica de lanzamiento",
            ],
        },
        {
            name: "Digitalización Empresarial",
            desc: "Perfecto para empresas que buscan optimizar procesos y crecer.",
            isMostPop: true,
            features: [
                "Sitio web avanzado",
                "Automatización de procesos internos",
                "Integración con herramientas digitales",
                "Optimización SEO intermedia",
                "Soporte y acompañamiento técnico",
            ],
        },
        {
            name: "Soluciones a Medida",
            desc: "Para empresas que requieren sistemas personalizados y escalables.",
            isMostPop: false,
            features: [
                "Desarrollo de sistemas a medida",
                "Plataformas web escalables",
                "Gestión de usuarios y roles",
                "Integraciones personalizadas",
                "Asesoría estratégica en tecnología",
            ],
        },
    ];

    return (
        <section className="py-14 bg-gradient-to-br from-indigo-50 via-white to-indigo-100">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <motion.div
                    className="relative max-w-xl mx-auto sm:text-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-indigo-700 text-3xl font-extrabold sm:text-4xl drop-shadow mb-2">
                        Soluciones para cada etapa de tu negocio
                    </h3>
                    <div className="mt-3 max-w-xl mx-auto text-gray-700">
                        <p>
                            En SEMADD desarrollamos soluciones digitales adaptadas a las necesidades reales de tu empresa.
                        </p>
                    </div>
                </motion.div>

                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center">
                    {plans.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className={`relative flex flex-col rounded-3xl border-2 shadow-xl bg-white transition-all duration-300 hover:scale-105 ${
                                item.isMostPop
                                    ? "border-indigo-600 shadow-2xl scale-105 z-10"
                                    : "border-gray-200"
                            }`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: idx * 0.15 }}
                            viewport={{ once: true }}
                        >
                            {item.isMostPop && (
                                <span className="w-36 absolute -top-5 left-1/2 -translate-x-1/2 px-3 py-2 rounded-full border shadow-md bg-indigo-600 text-white text-center text-sm font-semibold tracking-wide">
                                    Más solicitado
                                </span>
                            )}

                            <div className="p-8 space-y-4 border-b">
                                <span className="text-indigo-600 font-bold text-lg tracking-wide">
                                    {item.name}
                                </span>
                                <p className="text-gray-600">{item.desc}</p>

                                <button className="px-4 py-3 rounded-lg w-full font-semibold text-base duration-150 text-white bg-indigo-600 hover:bg-indigo-700 shadow-md transition-all">
                                    Solicitar información
                                </button>
                            </div>

                            <ul className="p-8 space-y-3">
                                <li className="pb-2 text-indigo-700 font-semibold text-base">
                                    Incluye:
                                </li>
                                {item.features.map((featureItem, idx) => (
                                    <motion.li
                                        key={idx}
                                        className="flex items-center gap-3 text-gray-700"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.2 + idx * 0.05 }}
                                        viewport={{ once: true }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-green-500"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        {featureItem}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
