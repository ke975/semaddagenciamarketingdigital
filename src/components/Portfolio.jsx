import CAFTERUA from "../assets/CAFTERUA.jpg";
import Gira from "../assets/GiraTecnicacafe.jpg";
import instagra1 from "../assets/instagra1.png";
import instagram2 from "../assets/instagram2.png";
import chessecake from "../assets/Chessecake1.png";
import Hamburguesa from "../assets/Limondapost.png";
export function Portfolio() {
  return (
    <div className="container">
        <h1 className="text-center mt-5" >Nuestro Portafolio </h1>
      <div className="row mb-5">
        <div className="mt-5 col-md-4">
          <img
            className="img-fluid
                  btn btn-light hover-shadow  "
            src={CAFTERUA}
            alt=""
          />
        </div>
        <div className="mt-5 col-md-4">
          <img className="img-fluid btn btn-light hover-shadow" src={Gira} alt="" />
        </div>
        <div className="mt-5 col-md-4">
          <img className="img-fluid btn btn-light hover-shadow" src={instagra1} alt="" />
        </div>
        <div className="mt-5 col-md-4">
          <img className="img-fluid btn btn-light hover-shadow" src={instagram2} alt="" />
        </div>
        <div className="mt-5 col-md-4">
          <img className="img-fluid btn btn-light hover-shadow" src={chessecake} alt="" />
        </div>
        <div className="mt-5 col-md-4 btn btn-light hover-shadow">
          <img className="img-fluid" src={Hamburguesa} alt="" />
        </div>
      </div>
    </div>
  );
}
