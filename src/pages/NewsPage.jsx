import React from "react";
import FooterComponent from "../components/Footers/FooterComponent";
import Promo from "../components/Headers/Promo";
import NavbarComponent from "../components/Navbar/NavbarComponent";
import NewsDetail from "../components/News/NewsDetail";

function NewsPage() {
  return (
    <>
      {/* <Promo /> */}
      <NavbarComponent />
      <NewsDetail />
      <FooterComponent />
    </>
  );
}

export default NewsPage;
