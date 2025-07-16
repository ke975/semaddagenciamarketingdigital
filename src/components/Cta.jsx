export function Cta() {
  return (
    <section className="py-28 bg-gradient-to-b from-gray-700 via-gray-900 to-gray-800 relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 text-white text-center md:px-8">
        <div className="max-w-2xl mx-auto space-y-6">


          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            Impulsá tu presencia digital con SEMADD
          </h2>

          <p className="text-lg text-gray-300">
            Desarrollo web, branding, marketing digital y estrategias digitales a medida para empresas que quieren destacar online.
          </p>

          {/* Teléfonos en fila */}
          <div className="flex justify-center gap-6 text-base font-medium text-gray-200 pt-2 flex-wrap">
            <a href="tel:50581646729" className="hover:text-indigo-400 underline">
              📞 +505 8164 6729
            </a>
            <a href="tel:++50557669390" className="hover:text-indigo-400 underline">
              📞 +50557669390
            </a>
            <a
              href="https://wa.me/+50581646729"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 underline"
            >
              💬 WhatsApp
            </a>
          </div>

          {/* Botón CTA */}
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
