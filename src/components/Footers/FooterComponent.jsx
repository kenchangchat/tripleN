import React from "react";
import "./scss/Footer.scss";
import LogoImg from "./img/footer-logo.png";
import ImgLine from "./img/line.png";
import ImgFacebook from "./img/facebook.png";
import ImgTiktok from "./img/tiktok.png";
import ImgLazada from "./img/lazada.png";
import ImgShopee from "./img/shopee.png";
import { Link } from "react-router-dom";

function FooterComponent() {
  return (
    <>
      <div className="footer">
        <div className="footer__container">
          <div className="footer__body_logo">
            <img src={LogoImg} alt="logo" />
            <h5>ติตตามเรา</h5>
            <div className="footer__social">
              <Link to="https://lin.ee/zpLbJS4">
                <img src={ImgLine} alt="ImgLine" />
              </Link>
              <Link to="https://www.facebook.com/triplencable/">
                <img src={ImgFacebook} alt="facebook" />
              </Link>
              <Link to="https://www.tiktok.com/@triplencable">
                <img src={ImgTiktok} alt="ImgTiktok" />
              </Link>
              <Link to="https://www.lazada.co.th/shop/triple-n-cable">
                <img src={ImgLazada} alt="ImgLazada" />
              </Link>
              <Link to="https://shopee.co.th/triplen.cable">
                <img src={ImgShopee} alt="ImgShopee" />
              </Link>
            </div>
          </div>
          <div className="footer__body">
            <div className="footer__body__container">
              <div className="footer__body__menu">
                <h5>ศูนย์ช่วยเหลือลูกค้า</h5>
                <Link to="/">วิธีการสั่งซื้อ</Link>
                <Link to="/">วิธีการชำระเงิน</Link>
                <Link to="/">สนใจเป็นตัวแทนจำหน่าย</Link>
                <Link to="/">คำถามที่พบบ่อย (FAQs)</Link>
                <Link to="/">นโยบายความเป็นส่วนตัว</Link>
              </div>
              <div className="footer__body__menu">
                <h5>เกี่ยวกับเรา</h5>
                <Link to="/">ทำไมต้องสายไฟทริปเปิ้ลเอ็น</Link>
                <Link to="/">คุณภาพมาตรฐานของเรา</Link>
                <Link to="/">ร่วมงานกับเรา</Link>
              </div>
              <div className="footer__body__menu">
                <h5>Customer service</h5>
                <Link to="/">Help centre</Link>
                <Link to="/">Delivery</Link>
                <Link to="/">Returns & Refunds</Link>
                <Link to="/">Contact us</Link>
              </div>
              <div className="footer__body__menu">
                <h5>Subscribe to our Newsletter</h5>
                <div className="social__sub"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="moblie-footer">
        <div className="footer__body_logo_">
          <img src={LogoImg} alt="logo_" />
          <div className="footer_p">
            <p>WWW.TRIPLENCABLE.COM</p>
          </div>
          {/* <h5>ติตตามเรา</h5> */}
          <div className="footer__social_">
            <img src={ImgLine} alt="ImgLine" />
            <img src={ImgFacebook} alt="facebook" />
            <img src={ImgTiktok} alt="ImgTiktok" />
            <img src={ImgLazada} alt="ImgLazada" />
            <img src={ImgShopee} alt="ImgShopee" />
          </div>
        </div>
        <div className="footer__body_">
          <div className="footer__body__container">
            <div className="footer__body__menu_">
              <h5>ศูนย์ช่วยเหลือลูกค้า</h5>
              <Link to="/">วิธีการสั่งซื้อ</Link>
              <Link to="/">วิธีการชำระเงิน</Link>
              <Link to="/">สนใจเป็นตัวแทนจำหน่าย</Link>
              <Link to="/">คำถามที่พบบ่อย (FAQs)</Link>
              <Link to="/">นโยบายความเป็นส่วนตัว</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="copy__rights">
        <p>
          <a href="">Triple N Cable</a> | © 2021 All rights reserved.{" "}
        </p>
      </div>
    </>
  );
}

export default FooterComponent;
