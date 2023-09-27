import React from "react";
import { Link } from "react-router-dom";
import "./scss/NavbarMenu.scss";
import AllProduct from "./img/icon/สินค้าทั้งหมด.png";
import Product1 from "./img/icon/สายไฟบ้าน.png";
import Product2 from "./img/icon/สายไฟตีกิ๊บ.png";
import Product3 from "./img/icon/สายไฟฝังดิน.png";
import Product4 from "./img/icon/สายเมนไฟฟ้า.png";
import Product5 from "./img/icon/สายอลูมิเนียม.png";
import Product6 from "./img/icon/สายไฟต่อวงจร.png";
import Product7 from "./img/icon/ดาวน์โหลด.png";


const MenuCardArr = [
  {
    id: 1,
    img: AllProduct,
    name: "สินค้าทั้งหมด",
    link: "/category/สินค้าทั้งหมด",
  },
  {
    id: 2,
    img: Product1,
    name: "สายไฟบ้าน",
    link: "/category/สายไฟบ้าน",
  },
  {
    id: 3,
    img: Product2,
    name: "สายไฟตีกิ๊บ",
    link: "/category/สายไฟตีกิ๊บ",
  },
  {
    id: 4,
    img: Product3,
    name: "สายไฟฝังดิน",
    link: "/category/สายไฟฝังดิน",
  },
  {
    id: 5,
    img: Product4,
    name: "สายเมนไฟฟ้า",
    link: "/category/สายเมนไฟฟ้า",
  },
  {
    id: 6,
    img: Product5,
    name: "สายอลูมิเนียม",
    link: "/category/สายอลูมิเนียม",
  },
  {
    id: 7,
    img: Product6,
    name: "สายไฟต่อวงจร",
    link: "/category/สายไฟต่อวงจร",
  },
  {
    id: 8,
    img: Product7,
    name: "ดาวน์โหลด",
    link: "/download",
  },
];

function NavbarMenu() {
  return (
    <>
      <div className="navbarmenu">
        <div className="navbarmenu__container">
          {MenuCardArr.map((item, i) => (
            <div className="nav-menucard" key={i}>
              <Link to={item.link}>
                <div className="nav-card">
                  <img src={item.img} alt="all" />
                </div>
                <p>{item.name}</p>
              </Link>
            </div>
          ))}
        </div>
        
      </div>
    </>
  );
}

export default NavbarMenu;
