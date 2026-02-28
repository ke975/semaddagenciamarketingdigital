import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logobuenoblanco.png";
import Logotipo from "../assets/thinkowell.png";
import { db } from "../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { AboutThinkwell } from "./Thinkwell";
import { AboutSemadd } from "./Semadd";


function ParticlesBG() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const colors = ["#0ea5e9", "#7F0F34", "#7F0F34"];

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < 70; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 2 + 1,
          dx: (Math.random() - 0.5) * 0.6,
          dy: (Math.random() - 0.5) * 0.6,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;
      });

      animationId = requestAnimationFrame(draw);
    };

    createParticles();
    draw();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}

export  function NavLandingpage() {
  const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const nombre = e.target.nombre.value;
    const email = e.target.email.value;
    const telefono = e.target.telefono.value;

    try {
      // 🔥 Guardar en Firestore
      await addDoc(collection(db, "inscripciones"), {
        nombre,
        email,
        telefono,
        estado: "pendiente_pago",
        createdAt: serverTimestamp(),
      });

      setSuccess(true);

      // 💳 Redirigir a Stripe después de guardar
      setTimeout(() => {
        window.location.href = "https://buy.stripe.com/6oUbJ09lfedo8yigEs8bS0o"; 
        // 👆 Reemplaza por tu link real de Stripe
      }, 1500);

    } catch (error) {
      console.error("Error guardando inscripción:", error);
      alert("Hubo un error. Intenta nuevamente.");
      setLoading(false);
    }
  };



  return (
    <div className=" text-white min-h-screen  bg-gradient-to-b from-gray-950 to-[#7c0f34]">

      <ParticlesBG />

      {/* HERO */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">

        <div className="flex flex-col md:flex-row gap-16 mb-12 items-center">
          <motion.img
            src={Logo}
            className="w-52 md:w-72"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.08 }}
          />

          <motion.img
            src={Logotipo}
            className="w-52 md:w-72"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.08 }}
          />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent"
        >
          Curso de Marketing Digital  <br/> + Automatización Inteligente
        </motion.h1>

        <p className="max-w-3xl text-lg md:text-xl text-gray-300 mb-12">
          Formación exclusiva desarrollada por <strong>SEMADD</strong> y <strong>THINKWELL AGENCY</strong>.  
          Aprende Marketing Digital desde cero hasta avanzado con automatización inteligente.
        </p>

            <button
  onClick={() => {
    document.getElementById("formulario").scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="mt-6 px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-purple-600 hover:scale-105 transition-all duration-300 font-semibold shadow-lg"
>
  Reservar mi cupo
</button>
      </section>
      {/* VIDEO SECTION */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2 }}
  className="w-full max-w-5xl mx-auto mt-5 mb-20 px-4"
>
  <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-xl bg-white/5">

    {/* Glow effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-purple-600/20 blur-4xl opacity-40"></div>

    <div className="relative aspect-video">
      <iframe
        className="w-full h-full rounded-3xl"
        src="https://www.youtube.com/embed/hjE_JjHgVR8"
        title="Video Curso SEMADD"
        allowFullScreen
      />
    </div>

  </div>
</motion.div>

      {/* BENEFICIOS */}
      {/* BENEFICIOS PREMIUM */}
<section className="relative z-10 py-28 px-6 bg-gradient-to-b from-gray-950 to-[#7c0f34] " >  
  <div className="max-w-6xl mx-auto text-center mb-16">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-5xl font-bold  bg-clip-text text-white"
    >
      ¿Qué aprenderás en este curso?
    </motion.h2>

    <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
      Domina <strong>Meta Ads</strong> y automatiza todo el proceso usando <strong>n8n</strong> 
      para escalar campañas sin depender de procesos manuales.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

    {[
         {
        title: "Fundamentos Modernos de Meta Ads",
        desc: "Aprende a dominar la publicidad en Facebook e Instagram con estrategias actualizadas, prácticas y enfocadas en resultados reales.",
        
      },
        {
        title: "Estrategia, Oferta y Embudo Inteligente",
        desc: "En este programa descubrirás cómo conectar cada pieza del proceso de venta: desde la definición clara de tu cliente ideal, hasta la creación de una propuesta de valor poderosa y un sistema automatizado que guíe al prospecto paso a paso.",
        
      },
        {
        title: "Ecosistema digital desde cero",
        desc: "En este programa entenderás cómo crear toda la estructura necesaria para que tus campañas no solo generen tráfico, sino resultados reales. Desde la correcta configuración del Business Manager, el píxel y los eventos, hasta la creación de audiencias estratégicas y embudos conectados con publicidad inteligente.",
      
      },
      {
        title: "Automatización de Meta Ads",
        desc: "Conecta Meta Ads con n8n para automatizar leads, reportes y seguimiento en tiempo real.",
        
      },
      {
        title: "Optimización Inteligente",
        desc: "Crea flujos automáticos que optimicen campañas según métricas clave como CTR, CPL y ROAS.",
        
      },
      {
        title: "Escalabilidad Empresarial",
        desc: "Implementa sistemas que permitan escalar campañas sin aumentar tu carga operativa.",
      
      },
    
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: i * 0.2 }}
        whileHover={{ y: -10 }}
        className="relative p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:shadow-sky-500/20 transition-all duration-300"
      >

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-sky-500/10 to-purple-500/10 blur-2xl opacity-40"></div>

        <div className="relative z-10 text-center">
          <div className="text-4xl mb-4"></div>

          <h3 className="text-2xl font-semibold text-white mb-4">
            {item.title}
          </h3>

          <p className="text-gray-400 leading-relaxed">
            {item.desc}
          </p>
        </div>

      </motion.div>
    ))}

  </div>

</section>


<AboutThinkwell/>
<AboutSemadd/>
      {/* PRECIO + FORMULARIO */}
{/* CTA PREMIUM */}
<section className="relative z-10 py-32 px-6 bg-gradient-to-b from-gray-950 to-[#7c0f34] overflow-hidden">

  {/* Glow background */}
  <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-purple-500/10 to-sky-500/10 blur-3xl opacity-40 pointer-events-none"></div>

  <div className="relative max-w-4xl mx-auto text-center">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <span className="inline-block px-4 py-2 mb-6 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300 backdrop-blur-md">
        Colaboración oficial SEMADD × Thinkwell
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">
        Reserva tu cupo ahora
      </h2>

      <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">
        Aprende a automatizar Meta Ads con n8n y crea sistemas que trabajen por ti 24/7.
        Cupos limitados para garantizar acompañamiento personalizado.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative bg-white/5 backdrop-blur-2xl border border-white/10 p-12 rounded-3xl shadow-2xl overflow-hidden"
    >

      {/* Glow card */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-sky-500/10 to-purple-500/10 blur-2xl opacity-30 pointer-events-none"></div>

      {/* FORMULARIO */}
      <div className="relative z-10 max-w-md mx-auto"
        id="formulario">

        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          Inscripción al Curso
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            required
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            required
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            required
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-sky-500 to-purple-600 hover:opacity-90 transition-all font-semibold text-white"
          >
            {loading ? "Procesando..." : "Inscribirme y Pagar"}
          </button>

        </form>

        {success && (
          <p className="text-green-400 text-center mt-4">
            Redirigiendo a pago...
          </p>
        )}

      </div>

    </motion.div>

  </div>
</section>




    </div>
  );
}