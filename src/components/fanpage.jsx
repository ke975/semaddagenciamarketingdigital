import { useState } from "react";

export function AboutSemadd() {
    const [openIndex, setOpenIndex] = useState(null);

 const reasons = [
    {
      title: "Sin plantillas genéricas",
      content: "Diseñamos desde cero, adaptado a tu negocio. Nada de moldes repetidos ni soluciones estancadas.",
    },
    {
      title: "100% Personalización",
      content: "Tu sitio, tus reglas. Ajustamos funcionalidades, diseño y contenido a lo que realmente necesitás.",
    },
    {
      title: "Escalabilidad real",
      content: "Creamos soluciones que crecen con vos: desde landing pages hasta sistemas completos de gestión.",
    },
    {
      title: "Velocidad y optimización superior",
      content: "Sitios rápidos, seguros y optimizados para buscadores. No arrastramos código innecesario como muchas plantillas.",
    },
    {
      title: "Identidad coherente",
      content: "Diseño web y branding alineados a tu marca, no un look genérico que cualquiera puede tener.",
    },
  ];
    return (
        <section
            className="relative pt-24 py-16 bg-gradient-to-b from-gray-700 via-gray-900 to-gray-800 overflow-hidden "
            id="About"
        >
            {/* 🌑 Sombra superior muy difusa y amplia */}
            <div
                className="absolute top-0 left-0 right-0 h-48 pointer-events-none z-10"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.15) 70%, transparent 100%)",
                    filter: "blur(20px)",
                }}
            />

            <div className="relative z-20 max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Columna izquierda */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-4">
                        <div className="flex justify-center lg:justify-start">
                            <svg
                                className="w-16 h-16 text-white animate-bounce"
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
                        <h2 className="text-5xl font-bold text-white">
                            ¿Por qué elegirnos?
                        </h2>
                        <p className="text-white max-w-md text-justify">
                            Descubrí las razones que nos hacen diferentes y por qué somos la mejor opción para potenciar tu presencia digital.
                        </p>
                    </div>

                    {/* Columna derecha: acordeón */}
                    <div className="space-y-6">
                        {reasons.map((item, idx) => {
                            const isOpen = openIndex === idx;
                            return (
                                <div key={idx} className="border border-indigo-200 rounded-lg shadow bg-steal-200">
                                    <button
                                        className="w-full flex justify-between items-center px-5 py-4 text-left text-white font-semibold"
                                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                                    >
                                        <span>{item.title}</span>
                                        <svg
                                            className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <div
                                        className={`overflow-hidden px-5 transition-all duration-300 text-white ${
                                            isOpen ? "max-h-40 py-2" : "max-h-0 py-0"
                                        }`}
                                    >
                                        <p >{item.content}</p>
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
