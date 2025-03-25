export function Banner() {
  return (
    <div style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1587614313085-5da51cebd8ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "700px",
        width: "100%"
      }}>
        
    
    <div className="container  " >
     <div className="d-flex flex-column justify-content-center align-items-center text-white vh-100">
        <h1 className="fs-1 text-center text-white">SEMADD
         </h1>
         <p className="text-center text-white fs-4"> Agencia de Marketing,Diseño y Desarrollo web Empresarial  </p>

        <p className="text-center text-white fs-5" >En SEMADD, nos enfocamos en crear soluciones de software, diseñar sitios web y ofrecer servicios de marketing digital para ayudar a tu negocio a crecer en las Plataformas digitales.
        </p>
        </div>
       
      </div>
      </div>
    
  );
}
