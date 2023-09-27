import React from "react";
import Cart from "../components/Cart/Cart";
import FooterComponent from "../components/Footers/FooterComponent";
import NavbarComponent from "../components/Navbar/NavbarComponent";

function CartPage() {
  return (
    <>
      <NavbarComponent value="cartpage" />
      <Cart/>
      <FooterComponent />
    </>
  );
}

export default CartPage;
