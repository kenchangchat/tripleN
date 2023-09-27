import React from "react";
import DownloadComponent from "../components/Download/DownloadComponent";
import FooterComponent from "../components/Footers/FooterComponent";
import Promo from "../components/Headers/Promo";
import NavbarComponent from "../components/Navbar/NavbarComponent";

function DownloadPage() {
  return (
    <>
      {/* <Promo /> */}
      <NavbarComponent />
      <DownloadComponent />
      <FooterComponent />
    </>
  );
}

export default DownloadPage;
