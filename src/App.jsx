import { Nav } from "./components/navbar";

import { AboutSemadd } from "./components/fanpage";
import { Portfolio } from "./components/Portfolio";
import { Footer } from "./components/Footer";
import {ImportanceChart} from "./components/Chart";
import sectionImage from "./assets/Section.png"; // Importación correcta
import section3 from "./assets/Section3.png"; //
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import {Services} from "./components/services";
import{ Team } from "./components/Team";

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
    
<Nav />




  <AboutSemadd />



      <ImportanceChart />
<Team />


  <Services />





      <div className="container">
        <div className="row">
          


        </div>
      </div>
      <div style={divStyle}></div>


      <div>
        <Portfolio />
      </div>

<Testimonials/>




    <Pricing />
      

        
    




      <Footer/>



      
    </>
  );
}

export default App;
