import Logo from "../assets/Logo.png"

export function Footer(){
    return(
        <div>
            <footer className="bg-dark text-white pt-5 pb-4">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <h5 className="mb-3"><img src={Logo} width={200} alt="" /></h5>
        <p className="text-justify">Agencia de Marketing, Diseño <br /> y Desarrollo Web Empresarial</p>
        <ul className="list-unstyled">
          <li><a href="#" className="text-white">Sobre Nosotros</a></li>
          <li><a href="#" className="text-white">Servicios</a></li>
          <li><a href="#" className="text-white">Contacto</a></li>
        </ul>
      </div>
      <div className="col-md-4">
        <h5 className="mb-3">Redes Sociales</h5>
        <ul className="list-unstyled">
          <li><a href="https://www.facebook.com/semadd4" className="text-white">Facebook</a></li>
          <li><a href="#" className="text-white">Instagram</a></li>
          <li><a href="#" className="text-white">LinkedIn</a></li>
        </ul>
      </div>
      <div className="col-md-4">
        <h5 className="mb-3">Suscríbete</h5>
        <p>Recibe las últimas noticias y actualizaciones.</p>
        <form action="#" method="post">
          <div className="input-group">
            <input type="email" className="form-control" placeholder="Ingresa tu email" required/>
            <div className="input-group-append">
              <button className="btn btn-light" type="submit">Suscribir</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div className="text-center mt-4">
      <p>&copy; 2025 Semadd. Todos los derechos reservados.</p>
    </div>
  </div>
</footer>

        </div>
    )
}