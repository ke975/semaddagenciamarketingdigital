import { Nav } from "../components/navbar";

import { AboutSemadd } from "../components/fanpage";
import { Portfolio } from "../components/Portfolio";
import { Footer } from "../components/Footer";
import {ImportanceChart} from "../components/Chart";
import sectionImage from "../assets/Section.png"; // Importación correcta
import section3 from "../assets/Section3.png"; //

import { Testimonials } from "../components/Testimonials";
import {Services} from "../components/services";
import{ Team } from "../components/Team";
import { WhatsAppFloatingButton } from "../components/whatsap";
import { Cta } from "../components/Cta";
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


export function Landing() {
  return (
    <>
    
<Nav />




  <AboutSemadd />



<Team />


  <Services />





      <div className="container">
        <div className="row">
          


        </div>
      </div>
      <div  className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 min-h-screen flex flex-col relative overflow-hidden"  >

 <Portfolio />

      </div>


      

<Testimonials/>





        
    

<Cta/>


      <Footer/>

    <WhatsAppFloatingButton />

      
    </>
  );
}

