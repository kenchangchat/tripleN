import React from "react";
import "./scss/Category.scss";
import ImgCat from "./img/THW_633x220.jpg";
import ImgCat2 from "./img/THW-A_633x220.jpg";
import ImgCat3 from "./img/VAF-bg_633x220.jpg";
import ImgCat4 from "./img/VCT_633x220.jpg";
import { Link } from "react-router-dom";

const CategoryArray = [
  {
    id: 1,
    title: "สายไฟทองแดง",
    subtitle: "THW, IV, VKF",
    img: ImgCat,
    link: "/category/1",
  },
  {
    id: 2,
    title: "สายไฟอลูมิเนียม",
    subtitle: "THW-A",
    img: ImgCat2,
    link: "/category/2",
  },
  {
    id: 3,
    title: "สายไฟตีกิ๊ฟเดินผนัง",
    subtitle: "VAF, VAF-G",
    img: ImgCat3,
    link: "/category/3",
  },
  {
    id: 4,
    title: "สายอ่อน",
    subtitle: "VCT, VCT-G",
    img: ImgCat4,
    link: "/category/4",
  },
];

function CategoryIndex() {
  return (
    <>
      <div className="category__home">
        <div className="category__container">
          <div className="category__title">
            <h2>หมวดหมู่สายไฟ</h2>
          </div>
          <div className="category__content">
            {CategoryArray.map((item) => (
              <div className="category__card" key={item.id}>
                <div className="category__body">
                  <img src={item.img} alt="category" />
                  <div className="category__card__title">
                    <h3>{item.title}</h3>
                    <h4>{item.subtitle}</h4>
                  </div>
                  <div className="category__btn">
                    <Link to={item.link}>
                      <button>ซื้อเลย</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryIndex;
