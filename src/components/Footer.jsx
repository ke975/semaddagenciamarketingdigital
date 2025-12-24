import Logo from "../assets/logobuenoblanco.png";

const socialLinks = [
  {
    href: "https://facebook.com/semadd4",
    label: "Facebook",
    icon: (
      <svg className="w-6 h-6 text-blue-600" viewBox="0 0 20 20">
        <path fill="currentColor" d="M12.267 10.001h2.066l.308-2.393h-2.374V6.45c0-.692.227-1.307 1.308-1.307h1.066V3.13C14.341 3.09 13.57 3 12.7 3c-2.007 0-3.38 1.23-3.38 3.49v1.118H7v2.393h2.32v6.477h2.947v-6.477z"/>
      </svg>
    )
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: (
      <svg className="w-6 h-6 text-pink-500" viewBox="0 0 20 20">
        <path fill="currentColor" d="M10 6.5A3.5 3.5 0 1 0 10 13.5A3.5 3.5 0 1 0 10 6.5ZM16.5 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10 8A2 2 0 1 1 10 12A2 2 0 1 1 10 8ZM17 10c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7Zm-1.5 0a5.5 5.5 0 1 0-11 0 5.5 5.5 0 1 0 11 0Z"/>
      </svg>
    )
  },
  {
    href: "mailto:info@semadd.com",
    label: "Correo",
    icon: (
      <svg className="w-6 h-6 text-indigo-500" viewBox="0 0 20 20">
        <path fill="currentColor" d="M2.94 4.94A8 8 0 1 1 17.06 15.06 8 8 0 0 1 2.94 4.94ZM10 18a8 8 0 1 0-8-8 8 8 0 0 0 8 8Zm-3-8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Zm1 0v4h4v-4Z"/>
      </svg>
    )
  },
];

const footerNavs = [
  {
    label: "Contáctanos",
    items: [{ href: "/Contact", name: 'Contacto' }],
  },
  {
    label: "Compañía",
    items: [
      { href: "/about", name: 'Sobre SEMADD' },
      { href: "/", name: 'Equipo' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full text-gray-300 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 px-4 py-12 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Logo y descripción */}
        <div>
          <img src={Logo} className="w-36 mb-4" alt="Logo Semadd" />
          <p className="text-[15px] leading-relaxed">
Digitalizamos y automatizamos tu empresa para que sea más eficiente, competitiva y rentable.
Desarrollamos software, sistemas a medida, APPS y automatizaciones que eliminan procesos manuales, optimizan la operación y convierten tu negocio en una empresa eficiente y rentable.          </p>
        </div>

        {/* Columnas de navegación */}
        {footerNavs.map((section, idx) => (
          <div key={idx}>
            <h4 className="text-white font-semibold mb-4">{section.label}</h4>
            <ul className="space-y-3">
              {section.items.map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="hover:underline hover:text-indigo-500">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Redes sociales como columna */}
        <div>
          <h4 className="text-white font-semibold mb-4">Redes Sociales</h4>
          <ul className="space-y-3">
            {socialLinks.map((link, idx) => (
              <li key={idx} className="flex items-center space-x-2">
                {link.icon}
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-indigo-500"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400 px-6">
  <p>&copy; {new Date().getFullYear()} Digitalizamos y automatizamos tu empresa para que sea más eficiente, competitiva y rentable.
Desarrollamos software, sistemas a medida, APPS y automatizaciones que eliminan procesos manuales, optimizan la operación y convierten tu negocio en una empresa eficiente y rentable.</p>
  <p className="mt-2 sm:mt-0">Hecho con 💻 por SEMADD</p>
</div>

    </footer>
  );
}
