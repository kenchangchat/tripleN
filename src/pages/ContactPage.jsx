import React from "react";
import Contact from "../components/Contact/Contact";
import FooterComponent from "../components/Footers/FooterComponent";
import Promo from "../components/Headers/Promo";
import NavbarComponent from "../components/Navbar/NavbarComponent";

function ContactPage() {
  return (
    <>
      {/* <Promo /> */}
      <NavbarComponent />
      <Contact />
      <FooterComponent />
    </>
  );
}

export default ContactPage;
