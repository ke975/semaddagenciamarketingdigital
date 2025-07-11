import Logo1 from '../assets/logo1.png'

export function Footer () {

    const footerNavs = [
        {
            label: "Servicios",
            items: [
                { href: "#", name: 'Marketing Digital' },
                { href: "#", name: 'Diseño Web' },
                { href: "#", name: 'Branding' },
                { href: "#", name: 'Desarrollo Web' },
            ],
        },
        {
            label: "Recursos",
            items: [
                { href: "#", name: 'Contacto' },
                { href: "#", name: 'Soporte' },
                { href: "#", name: 'Portafolio' },
                { href: "#", name: 'Precios' },
            ],
        },
        {
            label: "Compañía",
            items: [
                { href: "#", name: 'Sobre SEMADD' },
                { href: "#", name: 'Equipo' },
                { href: "#", name: 'Blog' },
                { href: "#", name: 'Términos y Privacidad' },
            ]
        }
    ]

    return (
        <footer className="text-gray-500 bg-white px-4 py-10 max-w-screen-xl mx-auto md:px-8">
            <div className="gap-6 justify-between md:flex">
                <div className="flex-1">
                    <div className="max-w-xs">
                        <img src={Logo1} className="w-32" alt="Logo Semadd" />
                        <p className="leading-relaxed mt-2 text-[15px]">
                            SEMADD es una agencia digital especializada en marketing, diseño y desarrollo web empresarial. Impulsamos tu marca con creatividad, innovación y soluciones a medida para crecer en el mundo digital.
                        </p>
                    </div>
                    <form 
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <label className="block pt-4 pb-2 font-semibold text-indigo-700">
                            Suscríbete a nuestras novedades
                        </label>
                        <div className="max-w-sm flex items-center border rounded-md p-1">
                            <input 
                                type="email"
                                placeholder="Tu correo electrónico"
                                className="w-full p-2.5 outline-none"
                            />
                            <button
                                className="p-2.5 rounded-md text-white bg-indigo-600 outline-none shadow-md focus:shadow-none sm:px-5"
                            >
                                Suscribirse
                            </button>
                        </div>
                    </form>
                </div>
                <div className="flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
                    {
                        footerNavs.map((item, idx) => (
                            <ul
                                className="space-y-4"
                                key={idx}
                            >
                                <h4 className="text-gray-800 font-medium">
                                    { item.label }
                                </h4>
                                {
                                    item.items.map(((el, idx) => (
                                        <li key={idx}>
                                            <a 
                                                href={el.href}
                                                className="hover:underline hover:text-indigo-600"
                                            >
                                                { el.name }
                                            </a>
                                        </li>
                                    )))
                                }
                            </ul>
                        ))
                    }
                </div>
            </div>
            <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0 text-sm text-gray-600">
                    &copy; {new Date().getFullYear()} SEMADD Agencia Digital. Todos los derechos reservados.
                </div>
                <div className="mt-6 sm:mt-0">
                    <ul className="flex items-center space-x-4">
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <svg className="svg-icon w-6 h-6 text-blue-600" viewBox="0 0 20 20">
                                    <path fill="currentColor" d="M12.267 10.001h2.066l.308-2.393h-2.374V6.45c0-.692.227-1.307 1.308-1.307h1.066V3.13C14.341 3.09 13.57 3 12.7 3c-2.007 0-3.38 1.23-3.38 3.49v1.118H7v2.393h2.32v6.477h2.947v-6.477z"/>
                                </svg>
                            </a>
                        </li>
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <svg className="svg-icon w-6 h-6 text-pink-500" viewBox="0 0 20 20">
                                    <path fill="currentColor" d="M10 6.5A3.5 3.5 0 1 0 10 13.5A3.5 3.5 0 1 0 10 6.5ZM16.5 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10 8A2 2 0 1 1 10 12A2 2 0 1 1 10 8ZM17 10c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7Zm-1.5 0a5.5 5.5 0 1 0-11 0 5.5 5.5 0 1 0 11 0Z"/>
                                </svg>
                            </a>
                        </li>
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="mailto:info@semadd.com">
                                <svg className="svg-icon w-6 h-6 text-indigo-500" viewBox="0 0 20 20">
                                    <path fill="currentColor" d="M2.94 4.94A8 8 0 1 1 17.06 15.06 8 8 0 0 1 2.94 4.94ZM10 18a8 8 0 1 0-8-8 8 8 0 0 0 8 8Zm-3-8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Zm1 0v4h4v-4Z"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}