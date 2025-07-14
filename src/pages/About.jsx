import { Nav } from "../components/navbar";
import { Footer } from "../components/Footer";
import {ImportanceChart} from "../components/Chart";
import sectionImage from "../assets/Section.png"; // Importación correcta
import section3 from "../assets/Section3.png"; //


import { WhatsAppFloatingButton } from "../components/whatsap";

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


export function About() {
  return (
    <>
    
<Nav />
<ImportanceChart/>
      <Footer/>

    <WhatsAppFloatingButton />

      
    </>
  );
}

