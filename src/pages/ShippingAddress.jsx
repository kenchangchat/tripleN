import React from "react";
import Address from "../components/Address/Address";
import FooterComponent from "../components/Footers/FooterComponent";
import NavbarComponent from "../components/Navbar/NavbarComponent";

function ShippingAddress() {
  return (
    <>
      <NavbarComponent value="ShippingAddress" />
      <Address/>
      <FooterComponent />
    </>
  );
}

export default ShippingAddress;