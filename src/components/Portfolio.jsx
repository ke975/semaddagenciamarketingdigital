import CAFTERUA from "../assets/CAFTERUA.jpg";
import Gira from "../assets/GiraTecnicacafe.jpg";
import instagra1 from "../assets/instagra1.png";
import instagram2 from "../assets/Instagram2.png";
import chessecake from "../assets/Chessecake1.png";
import Hamburguesa from "../assets/Limondapost.png";

const projects = [
  { img: CAFTERUA, title: "Cafterua", desc: "Branding y redes sociales" },
  { img: Gira, title: "Gira Técnica Café", desc: "Evento empresarial" },
  { img: instagra1, title: "Instagram Creativo", desc: "Diseño de feed" },
  { img: instagram2, title: "Instagram Empresarial", desc: "Gestión de contenido" },
  { img: chessecake, title: "Cheesecake", desc: "Fotografía y diseño" },
  { img: Hamburguesa, title: "Limonada Post", desc: "Campaña de producto" },
];

export function Portfolio() {
  return (
    <section className="py-14 bg-gradient-to-br from-indigo-50 via-white to-indigo-100">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-indigo-700 mb-10 drop-shadow">
          Nuestro Portafolio
        </h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-5 group"
            >
              <div className="overflow-hidden rounded-xl w-full mb-4">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-bold text-indigo-700 mb-1">{p.title}</h3>
              <p className="text-gray-500 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}