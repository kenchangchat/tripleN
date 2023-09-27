import React from "react";
import "./scss/Promo.scss";
import PromotionImg from "./img/Promo Banner.svg";

function Promo() {
  return (
    <>
      <div className="promotion">
        <img src={PromotionImg} alt="promotion" />
      </div>
    </>
  );
}

export default Promo;
