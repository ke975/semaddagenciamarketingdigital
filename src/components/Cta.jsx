import { FaWhatsapp } from "react-icons/fa";

export function Cta() {
  const phones = [
    { number: "+50581646729", label: "+505 8164 6729" },
    { number: "+50557669390", label: "+505 5766 9390" },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-gray-700 via-gray-900 to-gray-800 relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 text-white text-center md:px-8">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            Impulsá tu presencia digital con <span className="text-indigo-400">SEMADD</span>
          </h2>

          <p className="text-lg text-gray-300">
           Digitalizamos y automatizamos tu empresa para que sea más eficiente, competitiva y rentable.
          </p>

          {/* Teléfonos de contacto */}
          <div className="flex justify-center gap-6 flex-wrap text-base font-medium text-gray-200 pt-4">
            {phones.map((phone, idx) => (
              <a
                key={idx}
                href={`tel:${phone.number}`}
                className="flex items-center gap-2 hover:text-green-400 transition-colors duration-200"
              >
                <FaWhatsapp size={20} className="text-green-400" />
                {phone.label}
              </a>
            ))}

            {/* Botón directo a WhatsApp */}
            <a
              href="https://wa.me/+50557669390"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-green-400 transition-colors duration-200"
            >
              <FaWhatsapp size={20} className="text-green-400" />
              Chat rápido
            </a>
          </div>

          {/* Botón CTA principal */}
          <div className="pt-6">
            <a
              href="https://wa.me/+50557669390"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-lg font-semibold rounded-md shadow-md transition-all duration-200"
            >
              🚀 Empezá ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
