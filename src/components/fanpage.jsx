import { useState } from "react";

export function AboutSemadd() {
    const [openIndex, setOpenIndex] = useState(null);

    const reasons = [
        {
            title: "Estrategias Personalizadas",
            content:
                "Cada cliente es único. Creamos estrategias de marketing digital a medida, alineadas a tus objetivos y necesidades específicas.",
        },
        {
            title: "Equipo Multidisciplinario",
            content:
                "Contamos con expertos en branding, diseño web, publicidad, SEO y redes sociales para ofrecerte soluciones integrales.",
        },
        {
            title: "Acompañamiento Cercano",
            content:
                "Te acompañamos en cada paso del proceso, brindando asesoría y soporte continuo para que tu proyecto crezca.",
        },
        {
            title: "Resultados Medibles",
            content:
                "Nos enfocamos en resultados reales y medibles, optimizando campañas y acciones para maximizar tu retorno de inversión.",
        },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Columna izquierda: ícono animado + título */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-4">
                        <div className="flex justify-center lg:justify-start">
                            <svg
                                className="w-16 h-16 text-indigo-600 animate-bounce"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={1.5}
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 18h6m-3 0v3m-4.5-3a5.25 5.25 0 01.228-10.498 6.75 6.75 0 0111.06 5.79c0 1.317-.397 2.544-1.08 3.564A6.018 6.018 0 0115 18h-6z"
                                />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-indigo-700">
                            ¿Por qué elegirnos?
                        </h2>
                        <p className="text-gray-600 max-w-md">
                            Descubrí las razones que nos hacen diferentes y por qué somos la mejor opción para potenciar tu presencia digital.
                        </p>
                    </div>

                    {/* Columna derecha: acordeón */}
                    <div className="space-y-6">
                        {reasons.map((item, idx) => {
                            const isOpen = openIndex === idx;
                            return (
                                <div key={idx} className="border border-indigo-200 rounded-lg shadow bg-white">
                                    <button
                                        className="w-full flex justify-between items-center px-5 py-4 text-left text-indigo-700 font-semibold"
                                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                                    >
                                        <span>{item.title}</span>
                                        <svg
                                            className={`w-5 h-5 transition-transform duration-300 ${
                                                isOpen ? "rotate-180" : ""
                                            }`}
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>
                                    <div
                                        className={`overflow-hidden px-5 transition-all duration-300 text-gray-600 ${
                                            isOpen ? "max-h-40 py-2" : "max-h-0 py-0"
                                        }`}
                                    >
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
