import { NavContactForm } from "../components/NavContactForm";

import { Footer } from "../components/Footer";
import { WhatsAppFloatingButton } from "../components/whatsap";
import { motion } from "framer-motion";
import sectionImage from "../assets/Section.png";
import { useState } from "react";
import Logo from "../assets/Logo.png"; // Asegúrate de tener el logo en esta ruta


export function Contact() {

  return (
    <>
      <NavContactForm />

     

      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
