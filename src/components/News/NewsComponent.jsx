import React from "react";
import "./scss/News.scss";
import { Link } from "react-router-dom";
import ImgNews from "./img/d-1.jpg";
import ImgNews2 from "./img/d-2.jpg";
import ImgNews3 from "./img/d-3.jpg";

const NewsArr = [
  {
    id: 1,
    img: ImgNews,
    title: "สาย IEC 53 และ VCT ต่างกันอย่างไร",
    des: "สาย IEC 53 และ VCT สายไฟอ่อนชนิดอ่อน ที่แม้หน้าตาภายนอกนั้นจะคล้ายกันมาก แต่จริงๆแล้ว...",
    link: "/news-page",
  },
  {
    id: 2,
    img: ImgNews2,
    title: "สาย IEC 53 และ VCT ต่างกันอย่างไร",
    des: "สาย IEC 53 และ VCT สายไฟอ่อนชนิดอ่อน ที่แม้หน้าตาภายนอกนั้นจะคล้ายกันมาก แต่จริงๆแล้ว...",
    link: "/news-page",
  },
  {
    id: 3,
    img: ImgNews3,
    title: "สาย IEC 53 และ VCT ต่างกันอย่างไร",
    des: "สาย IEC 53 และ VCT สายไฟอ่อนชนิดอ่อน ที่แม้หน้าตาภายนอกนั้นจะคล้ายกันมาก แต่จริงๆแล้ว...",
    link: "/news-page",
  },
];

function NewsComponent() {
  return (
    <div>
      <div className="news">
        <div className="news__container">
          <div className="news__title">
            <h2>ข่าวสารและกิจกรรม</h2>
          </div>
          <div className="news__content">
            {NewsArr.map((item, i) => (
              <div className="news__body" key={i}>
                <div className="news__img">
                  <img src={item.img} width="100%" alt="news" />
                </div>
                <div className="news__text">
                  <h3>{item.title}</h3>
                  <p>{item.des}</p>
                </div>
                <div className="news__btn">
                  <Link to={item.link}>
                    <button>อ่านเพิ่มเติม</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsComponent;
