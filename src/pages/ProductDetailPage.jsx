import React, { useState, useEffect } from 'react'
import Promo from '../components/Headers/Promo'
import NavbarComponent from '../components/Navbar/NavbarComponent'
import ProductDetail from '../components/Prodcuts/ProductDetails/ProductDetail'
import FooterComponent from '../components/Footers/FooterComponent'

function ProductdetailPage() {

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
        {/* <Promo/> */}
        <NavbarComponent/>
        <ProductDetail />
        <FooterComponent />
    </>
  )
}

export default ProductdetailPage