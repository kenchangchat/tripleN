import React from "react";
import "./scss/ProductCategory.scss";
import Banner from "./img/Banner.jpg";
import SideProduct from "./SideProduct";
import SideMenu from "./SideMenu";

function ProductCategory(props) {
  return (
    <>
      <div className="product__category">
        <div className="product__category__container">
          <div className="product__category__banner">
            <img src={Banner} alt="banner" />
          </div>
          <div className="product__cat__side">
            <SideMenu />
            <SideProduct type={props.type}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCategory;
