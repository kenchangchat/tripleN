import React from "react";
import "./scss/hero.scss";
import heroImage from "./img/Banner01.jpg";

function HeroComponent() {
  return (
    <>
      <div className="hero">
        <div className="hero__container">
          <div className="hero__image">
            <img src={heroImage} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroComponent;
