import { Nav } from   "./components/navbar"
import { Banner } from "./components/Banner";
import { Portfolio } from "./components/Portfolio";
import { Footer } from "./components/Footer";
import sectionImage from "./assets/Section.png"; // Importación correcta
import sectionImage1 from "./assets/Section1.png";
import section3 from "./assets/Section3.png"; //
import marketing from "./assets/Logo1.png";
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
<img className=" img-fluid mt-5" src={marketing} alt="" />
</div>


        </div>
      </div>
      <div style={divStyle}></div>
      <div>
        <Portfolio />
      </div>

    <div className>
      <div className="row">
        <div className="col-md-6 mb-5">
        <img   src={sectionImage1} alt="" />
        </div>
        <div className="col-md-6 p-5">
      <h2 className="mt-5">"El marketing digital no solo se trata de vender productos, se trata de contar historias que conecten con tu audiencia."</h2>
      <p>Las redes sociales son la ventana abierta al mundo, y tener una presencia estratégica puede marcar la diferencia. Aprende cómo crear contenido atractivo, gestionar campañas efectivas y construir una comunidad sólida que impulse tu marca. ¡Es hora de destacar en un mercado saturado!</p>

        </div>
        
      </div>
    </div>


      <div style={divStyle1} >

        <div className="d-flex flex-column justify-content-center align-items-center text-white vh-100">
        <h2 className="text-center text-white fs-1 ">Publicidad en Redes Sociales: </h2>
        <p className="text-center text-white fs-4">¿Quieres llegar a tu audiencia de manera precisa y efectiva? Con nuestras estrategias de publicidad en redes sociales,  <br/> podrás crear campañas que no solo aumenten la visibilidad de tu marca, sino que también <br/> conviertan en ventas. Descubre las claves para diseñar anuncios irresistibles y dirigidos a tu público ideal.</p>
        </div>

       
      </div>


      <Footer/>



      
    </>
  );
}

export default App;
