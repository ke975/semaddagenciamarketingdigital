import { motion } from "framer-motion";

export function Testimonials() {
    const testimonials = [
        {
            name: "Casa de la Piñata",
            title: "Emprendimiento de eventos",
            quote:
                "Gracias a SEMADD logramos digitalizar nuestro negocio y aumentar nuestras ventas en redes sociales. El equipo siempre estuvo atento y nos ayudó a crear una imagen profesional. ¡Recomendados!",
        },
        {
            name: "Tecnogiras Nicaragua",
            title: "Organización de eventos tecnológicos",
            quote:
                "“SEMADD nos apoyó en el diseño de nuestra página web y en la implementación de campañas de marketing digital. Gracias a su trabajo, logramos ampliar nuestro alcance y llegar a más empresas y profesionales. Destacamos su excelente servicio, compromiso y atención personalizada durante todo el proceso.”.",
        },
        {
            name: "SERINSA",
            title: "Empresa de servicios para microempresas",
            quote:
                "“La capacitación brindada por el equipo fue de gran valor para nuestro personal administrativo. Los contenidos fueron claros, prácticos y directamente aplicables a nuestras funciones diarias. Gracias a esta formación, hemos logrado optimizar procesos, mejorar la organización interna y fortalecer las competencias digitales de nuestro equipo. Sin duda, una experiencia positiva que recomendamos a otras empresas que buscan capacitar a su talento humano.”.",
        },
    ];

    return (
        <section className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800  h-max  flex flex-col relative overflow-hidden" id="testimonios">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h3 className="text-4xl font-extrabold text-white sm:text-5xl mt-10">Lo que dicen nuestros clientes</h3>
                    <p className="mt-4 text-white">
                        Empresas y emprendedores que confiaron en <span className="text-sky-500 font-semibold">SEMADD</span> para potenciar su presencia digital.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-white border border-gray-200 rounded-2xl p-6 shadow hover:shadow-xl transition"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                        >
                            <div className="text-sky-500 mb-4">
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M7.17 6A6 6 0 003 12v6h6v-6H6.14a4 4 0 014-4V6H7.17zM17.17 6A6 6 0 0013 12v6h6v-6h-2.14a4 4 0 014-4V6h-3.69z" />
                                </svg>
                            </div>
                            <blockquote className="text-gray-800 text-lg font-medium mb-4">
                                “{item.quote}”
                            </blockquote>
                            <div className="mt-4 border-t pt-4">
                                <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                                <p className="text-sm text-gray-500">{item.title}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Fondo decorativo */}
            <div
                className="absolute top-0 left-0 w-full h-[400px] pointer-events-none"
                style={{
                    background:
                        "linear-gradient(152.92deg, rgba(56,189,248,0.15) 4.54%, rgba(168,85,247,0.13) 77.55%)",
                }}
            ></div>
        </section>
    );
}
