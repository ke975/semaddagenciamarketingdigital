

const projects = [
  { img: "https://impro.usercontent.one/appid/oneComWsb/domain/tecnogirasnicaragua.com/media/tecnogirasnicaragua.com/onewebmedia/WhatsApp_Image_2024-02-05_at_19.32.20-removebg-preview.png?etag=%222b29e-65c2dade%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=468%2B126", title: "Tecnogiras Nicaragua ", desc: "Creación de Pagina web" },
  { img: "https://serinsa.biz/img/favicon/favicon-96x96.png", title: "Serinsa", desc: "Capacitacón a Personal Administrativo" },
  { img: "https://scontent.fmga9-1.fna.fbcdn.net/v/t39.30808-6/557593683_122152735220760341_6560378225851952846_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=I658DIedt-8Q7kNvwHvRYVl&_nc_oc=AdlbmR91buygw2IcrXoF1O1aTil2hEzC_5lxroH5UWGvKm79Vcz6WspXscRTSy2wK1Q&_nc_zt=23&_nc_ht=scontent.fmga9-1.fna&_nc_gid=vDbneG5Fbz6WxaKURzuLew&oh=00_Afk7nZp3KjXC0TCndTEOBMGN14m2szeq5fdeRfKsPoLjow&oe=6951F6C8", title: "UNAN-MANAGUA", desc: "Capacitacón de Automatización de Procesos con N8N, a Estudiantes del Cur-Estelí" },
  { img: "https://scontent.fmga9-1.fna.fbcdn.net/v/t39.30808-6/492131894_122121418136760341_4556150933123482635_n.jpg?stp=dst-jpegr_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=0dEe5WCdyDgQ7kNvwGwgkK8&_nc_oc=AdlWNjJcav0Oy3DA4lOIxw1ZJDf_d9v011lGb81-ARVyqfMFJOf7WctW55bUedIHveE&_nc_zt=23&se=-1&_nc_ht=scontent.fmga9-1.fna&_nc_gid=Ds0fhnKzBoNHpQxJ9xJQdQ&oh=00_Afkt97v7hWvSoJYn9CtWHEngYZLJmluY2O4cMh_7-TtFgQ&oe=695204EE", title: "Capacitacón de  Presencia Digital ", desc: " Capacitaciona a Emprendedores de la Ciudad de Estelí" },

];

export function Portfolio() {
  return (
    <section className="py-14 ">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-10 drop-shadow">
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