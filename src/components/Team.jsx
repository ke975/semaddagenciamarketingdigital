export function Team() {
  const team = [
    {
      avatar:
        "https://scontent.fmga9-2.fna.fbcdn.net/v/t39.30808-6/473187448_122093252990737963_3864691848293211936_n.jpg?...",
      name: "Kevin Omar Castillo Torres",
      title: "Desarrollador Web",
      desc: "Apasionado por la tecnología y el desarrollo de soluciones digitales escalables.",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
    },
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Pedro Antonio Castillo Torres",
      title: "Ingeniero de Software",
      desc: "Especialista en backend, bases de datos y automatización de procesos empresariales.",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-gray-900 text-4xl font-extrabold sm:text-5xl">
          Conocé a nuestro equipo
        </h3>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto text-lg leading-relaxed">
          Profesionales dedicados al desarrollo de soluciones digitales con impacto real en negocios y marcas.
        </p>

        <ul className="mt-16 grid gap-12 sm:grid-cols-2 justify-center">
          {team.map((item, idx) => (
            <li
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col items-center max-w-sm mx-auto"
            >
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-indigo-600 shadow-md">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="mt-6 text-gray-900 font-semibold text-xl">
                {item.name}
              </h4>
              <p className="text-indigo-600 mt-1 font-medium">{item.title}</p>
              <p className="text-gray-700 mt-4 text-center">{item.desc}</p>

              <div className="mt-6 flex space-x-6 text-gray-400">
                <a
                  href={item.twitter}
                  aria-label={`${item.name} Twitter`}
                  className="hover:text-indigo-600 transition-colors duration-200"
                >
                  {/* Twitter Icon */}
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path d="M15.1 43.5c18.11 0 28.017-15.006...z" />
                  </svg>
                </a>
                <a
                  href={item.linkedin}
                  aria-label={`${item.name} LinkedIn`}
                  className="hover:text-indigo-600 transition-colors duration-200"
                >
                  {/* LinkedIn Icon */}
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path d="M44.447 0H3.544C1.584 0 0 1.547...z" />
                  </svg>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
