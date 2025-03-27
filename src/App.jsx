import { Nav } from   "./components/navbar"
import { Banner } from "./components/Banner";
import { Portfolio } from "./components/Portfolio";
import { Footer } from "./components/Footer";
import sectionImage from "./assets/Section.png"; // Importación correcta
import sectionImage1 from "./assets/Section1.png";
import section3 from "./assets/Section3.png"; //
import Logo1 from "./assets/logo1.png";


const divStyle = {
  backgroundImage: `url(${sectionImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "700px",
  width: "100vw",
};

const divStyle1 = {
  backgroundImage: `url(${section3})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "700px",
  width: "100vw",
};

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <div>
        <Banner />
      </div>

      <div className="container mb-5 mt-5">
        <div className="row">
          
      
<div className="col-md-6">
<h1 className=" ">¿Quienes Somos ?</h1>
<p className="">Semadd es una agencia especializada en soluciones digitales integrales, enfocada en ofrecer servicios de marketing, diseño y desarrollo web para empresas que buscan destacar en el mundo digital. Nuestro equipo de expertos trabaja de la mano con cada cliente para crear estrategias de marketing personalizadas, desarrollar sitios web visualmente atractivos y funcionales, y optimizar la presencia online de las marcas a través de campañas de marketing digital efectivas. En Semadd, entendemos que cada empresa tiene sus propias necesidades y objetivos, por lo que nos aseguramos de brindar soluciones a medida que ayuden a nuestros clientes a crecer y conectar con su público objetivo. Con un enfoque innovador y resultados medibles, estamos comprometidos en ser el socio digital que tu negocio necesita para lograr el éxito.</p>
</div>
<div className="col-md-6">
<img className=" img-fluid mt-5" src={Logo1} alt="" />
</div>


        </div>
      </div>
      <div style={divStyle}></div>
      <div>
        <Portfolio />
      </div>

 

      <div style={divStyle1} >

        <div className="d-flex flex-column justify-content-center align-items-center text-white vh-100">
        <h2 className="text-center text-white fs-1 ">Publicidad en Redes Sociales: </h2>
        <p className="text-center text-white fs-4">¿Quieres llegar a tu audiencia de manera precisa y efectiva? Con nuestras estrategias de publicidad en redes sociales,  <br/> podrás crear campañas que no solo aumenten la visibilidad de tu marca, sino que también <br/> conviertan en ventas. Descubre las claves para diseñar anuncios irresistibles y dirigidos a tu público ideal.</p>
        </div>

       
      </div>


      <div className="container py-5">
  <h2 className="text-center mb-5 fw-bold">Nuestros Planes</h2>
  <div className="row g-4 justify-content-center">

    {/* Redes Sociales */}
    <div className="col-12 col-md-4">
      <div className="card h-100 shadow-lg border-0 rounded-4 text-center">
        <div className="card-header bg-primary text-white py-3 fw-bold fs-5">
          📱 Redes Sociales
        </div>
        <div className="card-body p-4">
          <h3 className="text-dark fw-bold">$120<span className="fs-5 text-muted">/mes</span></h3>
          <p className="text-muted">Expande tu marca con estrategias efectivas de contenido y publicidad.</p>
          <hr />
          <ul className="list-unstyled">
            <li className="mb-2">✅ Creación de contenido</li>
            <li className="mb-2">✅ Gestión de redes</li>
            <li className="mb-2">✅ Publicidad pagada</li>
          </ul>
        </div>
        <div className="card-footer bg-light py-3">
          <small className="text-muted">Soporte 24/7 incluido</small>
        </div>
      </div>
    </div>

    {/* Páginas Web */}
    <div className="col-12 col-md-4">
      <div className="card h-100 shadow-lg border-0 rounded-4 text-center">
        <div className="card-header bg-primary text-white py-3 fw-bold fs-5">
          🌐 Páginas Web
        </div>
        <div className="card-body p-4">
          <h3 className="text-dark fw-bold">$300<span className="fs-5 text-muted"> único pago</span></h3>
          <p className="text-muted">Tu sitio web profesional con diseño moderno y optimización SEO.</p>
          <hr />
          <ul className="list-unstyled">
            <li className="mb-2">✅ Diseño responsive</li>
            <li className="mb-2">✅ SEO optimizado</li>
            <li className="mb-2">✅ Hosting y dominio</li>
          </ul>
        </div>
        <div className="card-footer bg-light py-3">
          <small className="text-muted">Actualizaciones incluidas por 6 meses</small>
        </div>
      </div>
    </div>

    {/* Estrategias de Marketing */}
    <div className="col-12 col-md-4">
      <div className="card h-100 shadow-lg border-0 rounded-4 text-center">
        <div className="card-header bg-primary text-white py-3 fw-bold fs-5">
          📊 Estrategias de Marketing
        </div>
        <div className="card-body p-4">
          <h3 className="text-dark fw-bold">$350<span className="fs-5 text-muted">/mes</span></h3>
          <p className="text-muted">Impulsa tu negocio con estrategias avanzadas y segmentación efectiva.</p>
          <hr />
          <ul className="list-unstyled">
            <li className="mb-2">✅ Análisis de mercado</li>
            <li className="mb-2">✅ Email marketing</li>
            <li className="mb-2">✅ Google Ads & Facebook Ads</li>
          </ul>
        </div>
        <div className="card-footer bg-light py-3">
          <small className="text-muted">Incluye asesoría personalizada</small>
        </div>
      </div>
    </div>

  </div>
</div>



      <Footer/>



      
    </>
  );
}

export default App;
