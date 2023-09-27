import React from "react";
import "./scss/Thebest.scss";
import Ellipse from "./img/Ellipse.svg";

const ThebestArr = [
  {
    id: 1,
    title: "ตอบโจทย์ทุกความต้องการ",
    des: "ครบชนิด หลากสี หลายความยาว",
  },
  {
    id: 2,
    title: "ราคาเหมาะสม",
    des: "คุ้มค่ากับคุณภาพและความปลอดภัย",
  },
  {
    id: 3,
    title: "มั่นใจคุณภาพมีมาตรฐาน มอก.",
    des: "ทองแดงดี พีวีซีคุณภาพ เต็มเมตร เต็มม้วน",
  },
  {
    id: 4,
    title: "รับประกันได้ของ 100%",
    des: "สินค้าส่งตรงจากโรงงานผู้ผลิต",
  },
];

function ThebestComponent() {
  return (
    <>
      <div className="thebest">
        <div className="thebest__container">
          <div className="thebest__title">
            <h2>ทำไมต้องสายไฟ ทริปเปิ้ลเอ็น</h2>
          </div>
          <div className="t__container">
            <div className="thebest__content">
              {ThebestArr.map((item, i) => (
                <div className="thebest__body" key={i}>
                  <div className="thebest__image">
                    <img src={Ellipse} alt="ellipse" />
                  </div>
                  <div className="thebest__text">
                    <h3>{item.title}</h3>
                    <p>{item.des}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThebestComponent;
