import React, { useState, useEffect } from "react";
import FooterComponent from "../components/Footers/FooterComponent";
import Promo from "../components/Headers/Promo";
import HeroComponent from "../components/Hero/HeroComponent";
import LoadingComponent from "../components/Loadings/LoadingComponent";
import NavbarComponent from "../components/Navbar/NavbarComponent";
import NavbarMenu from "../components/Navbar/NavbarMenu";
import NewsComponent from "../components/News/NewsComponent";
import CategoryIndex from "../components/Prodcuts/Categorys/CategoryIndex";
import ProductRecomend from "../components/Prodcuts/ProductRecomends/ProductRecomend";
import ThebestComponent from "../components/Thebests/ThebestComponent";

function HomePage() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, []);

  return (
    <>
      {/* <Promo /> */}
      <NavbarComponent />
      <NavbarMenu />
      <HeroComponent />
      <ProductRecomend />
      <CategoryIndex />
      <ThebestComponent />
      <NewsComponent />
      <FooterComponent />
    </>
  );
}

export default HomePage;
