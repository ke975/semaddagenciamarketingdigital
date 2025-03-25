import Logo from "../assets/Logo.png"
export function Nav(){
    return (
        <nav class="navbar navbar-expand-lg " style={{ backgroundColor: "#22315E" }}>
  <div class="container">
    <a class="navbar-brand" href="#"><img  src={Logo} alt="Logotipo Semadd" width={200}  /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div class="navbar-nav mx-auto">
        <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
        <a class="nav-link text-white" href="#">Features</a>
        <a class="nav-link text-white" href="#">Pricing</a>
      
      </div>
    </div>
  </div>
</nav>
    )
}