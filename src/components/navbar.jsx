import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/Logo.png";

// Simple Particles Animation Component
function ParticlesBG() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const colors = [
            "#0ea5e9", // sky-500
            "#e879f9", // fucsia
            "#c084fc", // violeta
            "#4f46e5", // azul oscuro
            "#fff"     // blanco
        ];
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let particles = [];
        let animationId;
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        function handleResize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
        window.addEventListener("resize", handleResize);

        function createParticles() {
            particles = [];
            for (let i = 0; i < 60; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    r: Math.random() * 2 + 1.5,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    dx: (Math.random() - 0.5) * 0.7,
                    dy: (Math.random() - 0.5) * 0.7,
                    alpha: Math.random() * 0.5 + 0.3
                });
            }
        }

        function draw() {
            ctx.clearRect(0, 0, width, height);
            for (let p of particles) {
                ctx.save();
                ctx.globalAlpha = p.alpha;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.shadowColor = p.color;
                ctx.shadowBlur = 12;
                ctx.fill();
                ctx.restore();

                p.x += p.dx;
                p.y += p.dy;

                // Bounce on edges
                if (p.x < 0 || p.x > width) p.dx *= -1;
                if (p.y < 0 || p.y > height) p.dy *= -1;
            }
            animationId = requestAnimationFrame(draw);
        }

        createParticles();
        draw();

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 1 }}
        />
    );
}

export function Nav() {
    const [state, setState] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    // Navegación con dropdown para "Nosotros" y "Servicios"
    const navigation = [
        { title: "Inicio", path: "javascript:void(0)" },
        { 
            title: "Nosotros", 
            dropdown: [
                { title: "Misión", path: "javascript:void(0)" },
                { title: "Visión", path: "javascript:void(0)" }
            ]
        },
        { 
            title: "Servicios", 
            dropdown: [
                { title: "Branding", path: "javascript:void(0)" },
                { title: "Diseño Web", path: "javascript:void(0)" },
                { title: "Gestión de Redes Sociales", path: "javascript:void(0)" },
                { title: "Publicidad Digital", path: "javascript:void(0)" },
                { title: "SEO y SEM", path: "javascript:void(0)" },
                { title: "Email Marketing", path: "javascript:void(0)" },
                { title: "Consultoría", path: "javascript:void(0)" }
            ]
        },
        { title: "Contáctanos", path: "javascript:void(0)" }
    ];

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".menu-btn") && !target.closest(".dropdown-parent")) setState(false);
            if (!target.closest(".dropdown-parent")) setDropdown(false);
        };
    }, []);

    const Brand = () => (
        <div className="flex items-center gap-4 py-3 md:py-5">
            <a href="javascript:void(0)" className="flex items-center gap-2">
                <motion.img
                    src={Logo}
                    width={120}
                    height={120}
                    alt="SEMADD logo"
                    className="rounded-xl shadow-lg  p-1"
                    initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, type: "spring" }}
                    whileHover={{ scale: 1.08, rotate: 2 }}
                />
           
            </a>
            <div className="md:hidden">
                <button className="menu-btn text-gray-400 hover:text-gray-300"
                    onClick={() => setState(!state)}
                >
                    {
                        state ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )
                    }
                </button>
            </div>
        </div>
    );

    return (
        <div className="bg-gray-900 min-h-screen flex flex-col relative overflow-hidden">
            <header>
                <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
                    <Brand />
                </div>
                <nav className={`pb-5 md:text-sm ${state ? "absolute z-20 top-0 inset-x-0 bg-gray-800 rounded-xl mx-2 mt-2 md:mx-0 md:mt-0 md:relative md:bg-transparent" : ""}`}>
                    <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                        <Brand />
                        <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
                            <ul className="flex-1 justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                                {navigation.map((item, idx) => (
                                    item.dropdown ? (
                                        <li key={idx} className="relative dropdown-parent text-gray-300 hover:text-gray-400">
                                            <button
                                                className="flex items-center gap-1 font-semibold"
                                                onClick={() => setDropdown(dropdown === idx ? false : idx)}
                                                onMouseEnter={() => setDropdown(idx)}
                                                onMouseLeave={() => setDropdown(false)}
                                            >
                                                {item.title}
                                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            <AnimatePresence>
                                                {dropdown === idx && (
                                                    <motion.ul
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: 10 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="absolute left-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-lg z-30"
                                                        onMouseEnter={() => setDropdown(idx)}
                                                        onMouseLeave={() => setDropdown(false)}
                                                    >
                                                        {item.dropdown.map((sub, subIdx) => (
                                                            <li key={subIdx}>
                                                                <a href={sub.path} className="block px-4 py-2 text-gray-300 hover:bg-sky-500 hover:text-white rounded transition">
                                                                    {sub.title}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </motion.ul>
                                                )}
                                            </AnimatePresence>
                                        </li>
                                    ) : (
                                        <li key={idx} className="text-gray-300 hover:text-sky-400 font-semibold transition">
                                            <a href={item.path} className="block">
                                                {item.title}
                                            </a>
                                        </li>
                                    )
                                ))}
                                <li>
                                    <a href="javascript:void(0)" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-sky-500 hover:bg-sky-400 active:bg-sky-600 duration-150 rounded-full md:inline-flex shadow">
                                        Get started
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <section className="relative flex-1 flex items-center justify-center w-full">
                <ParticlesBG />
                <div className="relative z-10 w-full max-w-5xl px-4 py-16 md:py-32 text-center flex flex-col items-center justify-center">
                    <motion.img
                        src={Logo}
                        alt="SEMADD logo"
                        className="mx-auto mb-4 rounded-2xl shadow-2xl  p-4"
                        initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, type: "spring" }}
                        whileHover={{ scale: 1.08, rotate: 2 }}
                        width={500}
                        height={500}
                    />
                    <motion.h2
                        className="text-4xl md:text-6xl text-white font-extrabold mx-auto mb-6 drop-shadow-lg"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                    >
                   <span className="text-sky-400"> Bienvenidos a SEMADD</span>
                    </motion.h2>
                    <motion.p
                        className="max-w-2xl mx-auto text-gray-300 text-lg md:text-2xl mb-8"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                    >
                        <span className="text-sky-400 font-semibold">Agencia de Marketing Digital</span> potenciamos empresas y emprendedores con servicios de branding, diseño web, gestión de redes sociales, campañas publicitarias, SEO, email marketing y consultoría.
                    </motion.p>
                    <motion.div
                        className="flex justify-center items-center gap-x-4 text-gray-400 text-sm"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.1, type: "spring" }}
                    >
                        <div className="flex">
                            {/* ...estrellas SVG... */}
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" /></svg>
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" /></svg>
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" /></svg>
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" /></svg>
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" /></svg>
                        </div>
                        <p><span className="text-gray-100">5.0</span> por más de 200 usuarios</p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}