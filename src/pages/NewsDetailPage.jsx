import React from "react";
import NavbarComponent from "../components/Navbar/NavbarComponent";
import FooterComponent from "../components/Footers/FooterComponent";
import Indetail from "../components/News/Indetail";

function NewsDetailPage() {
  return (
    <>
      <NavbarComponent />
      <Indetail />
      <FooterComponent />
    </>
  );
}

export default NewsDetailPage;
