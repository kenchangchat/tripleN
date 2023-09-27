import React, { useState, useEffect } from "react";
import Promo from "../components/Headers/Promo";
import NavbarComponent from "../components/Navbar/NavbarComponent";
import ProductCategory from "../components/Prodcuts/ProductCategorys/ProductCategory";
import FooterComponent from "../components/Footers/FooterComponent";
import { useParams } from "react-router-dom";
import NavbarMenu from "../components/Navbar/NavbarMenu";

function CategoryPage() {
  const { category } = useParams();

  useEffect(() => {
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
      {/* <NavbarMenu/> */}
      <ProductCategory type={category}/>
      <FooterComponent />
    </>
  );
}

export default CategoryPage;
