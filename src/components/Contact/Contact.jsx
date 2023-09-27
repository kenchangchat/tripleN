import React, { useState, useEffect } from "react";
import "./scss/Contact.scss";
import IMG from "./img/Group 34.png";
import IMG1 from "./img/Group 35.png";
import IMG2 from "./img/Group 36.png";
import IMG3 from "./img/Group 37.png";
import LINEOA from "./img/Line OA.png";
import FB from "./img/Facebook.png";
import Tiktok from "./img/Tiktok.png";
import Lazada from "./img/Lazada.png";
import Shopee from "./img/Shopee.png";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-con">
        <div className="contact-title">
          <h1>ข้อมูลติดต่อ</h1>
        </div>
        <div className="contact-info">
          <div className="contact-text">
            <img src={IMG} alt="LINE" />
            <h4>LINE</h4>
            <p>@triplencable</p>
          </div>
          <div className="contact-text">
            <img src={IMG1} alt="LINE" />
            <h4>โทรศัพท์</h4>
            <p>062-438-8669</p>
          </div>
          <div className="contact-text">
            <img src={IMG2} alt="LINE" />
            <h4>อีเมล</h4>
            <p>triplen.seller@gmail.com</p>
          </div>
          <div className="contact-text">
            <img src={IMG3} alt="LINE" />
            <h4>เวลาทำการ</h4>
            <p>จันทร์ - ศุกร์</p>
            <p>เวลา 8.00 น. - 18.00 น.</p>
          </div>
        </div>
        <div className="contact-title">
          <h1>ส่งข้อความถึงเรา</h1>
        </div>
        <div className="contact-detail-con">
          <div className="contact-detail">
            <p>
              ท่านสามารถส่งความคิดเห็น คำแนะนำ คำติชม
              หรือสอบถามเกี่ยวกับสินค้าและการบริการของทางเรา
              โดยการกรอกแบบฟอร์มด้านล่างให้ครบถ้วน
              ทางเราจะติดต่อกลับไปหาท่านอย่างเร็วที่สุด
            </p>
          </div>
        </div>
        <div className="contact-form">
          <div className="form-control">
            <input type="text" placeholder="ชื่อ" />
            <input type="text" placeholder="นามสกุล" />
          </div>
          <div className="form-control-long">
            <input type="text" placeholder="อีเมล" />
          </div>
          <div className="form-control-long">
            <input type="text" placeholder="เบอร์โทรศัพท์" />
          </div>
          <div className="form-control-long">
            <input type="text" placeholder="เรื่องติดต่อ" />
          </div>
          <div className="form-control-long">
            <textarea placeholder="รายละเอียด" />
          </div>
          <div className="form-control-btn">
            <button>ส่งข้อความ</button>
          </div>
        </div>
        <div className="about-link">
          <a href="/about">ติดต่อฝ่ายขาย</a>
          <a href="/about">สอบถามข้อมูลสินค้าและบริการ</a>
          <a href="/about">ร้องเรียนสินค้าและบริการ</a>
          <a href="/about">คำถามที่พบบ่อย</a>
        </div>
        <div className="socal-link">
          <div className="socal-link-con">
            <a href="">
              <img src={LINEOA} alt="LINE OA" />
            </a>
            <a href="">
              <img src={FB} alt="LINE OA" />
            </a>
            <a href="">
              <img src={Tiktok} alt="LINE OA" />
            </a>
            <a href="">
              <img src={Lazada} alt="LINE OA" />
            </a>
            <a href="">
              <img src={Shopee} alt="LINE OA" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
