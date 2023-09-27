import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./scss/Navbar.scss";
import Logo from "./img/logo.svg";
import { FiSearch, FiShoppingCart, FiHeart } from "react-icons/fi";
import { BiMenu, BiRightArrow } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { Drawer } from "antd";
import Facebook from "./img/socal/facebook.png";
import Tiktok from "./img/socal/tiktok.png";
import Shoppee from "./img/socal/shoppee.png";
import Lazada from "./img/socal/lazada.png";

function NavbarComponent(props) {
  const [sumCart, setSumCart] = useState(0);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");

  useEffect(() => {
    const Cart = localStorage.getItem("arrCart")
      ? JSON.parse(localStorage.getItem("arrCart"))
      : [];

    const sum = Cart.reduce((acc, cur) => {
      return parseInt(acc) + parseInt(cur.quantity);
    }, 0);
    setSumCart(sum);
  }, []);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-con">
          <div className="navbar-left">
            <div className="navbar-logo">
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
            </div>
            <div className="navbar-menu">
              <ul>
                {/* <li>
                  <Link to="/">สมัครตัวแทน</Link>
                </li> */}
                <li>
                  <Link to="/category/สินค้าทั้งหมด">เลือกชื้อสายไฟ</Link>
                </li>
                <li>
                  <Link to="/news-page">ข่าวสาร/บทความ</Link>
                </li>
                <li>
                  <Link to="/download">ดาวน์โหลด</Link>
                </li>
                <li>
                  <Link to="/contact">ติดต่อเรา</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <div className="navbar-search">
              <div className="search-icon">
                <FiSearch size={20} />
              </div>
              <input type="text" placeholder="ค้นหาสินค้า" />
            </div>
          </div>
          <div className="navbar-right">
            <div className="navbar-cart">
              <ul>
                <li>
                  <FiShoppingCart size={25} />
                  {props.value === "cartpage" ? (
                    <></>
                  ) : (
                    <>
                      <span>{sumCart}</span>
                    </>
                  )}
                  <Link to="/checkout">รถเข็นของฉัน</Link>
                </li>
                <li>
                  <FiHeart size={25} />
                  <span>0</span>
                  <a href="/">รายการโปรด</a>
                </li>
                <li>
                  {/* <BiUserCircle size={25} /> */}
                  {/* <a href="/">เข้าสู่ระบบ</a> */}
                </li>
              </ul>
            </div>
            <div className="moblie-menu">
              <ul>
                <li>
                  <Link to="/checkout">
                    <FiShoppingCart
                      size={25}
                      style={{
                        color: "#fff",
                        marginRight: "15px",
                      }}
                    />
                    {props.value === "cartpage" ? (
                      <></>
                    ) : (
                      <>
                        <span>{sumCart}</span>
                      </>
                    )}
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FiHeart
                      size={25}
                      style={{
                        color: "#fff",
                        marginRight: "15px",
                      }}
                    />
                    <span>0</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <BiUserCircle
                      size={27}
                      style={{
                        color: "#fff",
                        marginRight: "15px",
                      }}
                    />
                  </Link>
                </li>
              </ul>
              <BiMenu
                size={35}
                style={{
                  color: "#fff",
                  marginTop: "5px",
                }}
                onClick={showDrawer}
              />
            </div>
            <Drawer
              title="หมวดหมู่สินค้า"
              placement="right"
              onClose={onClose}
              open={open}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <a
                    style={{
                      marginBottom: "10px",
                      display: "flex",
                      height: "auto",
                      alignItems: "center",
                      color: "#000",
                      marginLeft: "25px",
                    }}
                    href="/category/สายไฟบ้าน"
                  >
                    <BiRightArrow
                      style={{
                        marginRight: "10px",
                      }}
                    />{" "}
                    สายไฟ THW
                  </a>
                  <a
                    style={{
                      marginBottom: "10px",
                      display: "flex",
                      height: "auto",
                      alignItems: "center",
                      color: "#000",
                      marginLeft: "25px",
                    }}
                    href="/category/สายไฟต่อวงจร"
                  >
                    <BiRightArrow
                      style={{
                        marginRight: "10px",
                      }}
                    />{" "}
                    สายไฟ IV
                  </a>
                  <a
                    style={{
                      marginBottom: "10px",
                      display: "flex",
                      height: "auto",
                      alignItems: "center",
                      color: "#000",
                      marginLeft: "25px",
                    }}
                    href="/category/สายตีกิ๊บ"
                  >
                    <BiRightArrow
                      style={{
                        marginRight: "10px",
                      }}
                    />{" "}
                    สายไฟ VAF
                  </a>
                  <a
                    style={{
                      marginBottom: "10px",
                      display: "flex",
                      height: "auto",
                      alignItems: "center",
                      color: "#000",
                      marginLeft: "25px",
                    }}
                    href="/category/สายตีกิ๊บ"
                  >
                    <BiRightArrow
                      style={{
                        marginRight: "10px",
                      }}
                    />{" "}
                    สายไฟ VKF
                  </a>
                  <Link
                    style={{
                      marginBottom: "10px",
                      display: "flex",
                      height: "auto",
                      alignItems: "center",
                      color: "#000",
                      marginLeft: "25px",
                    }}
                    to="/category/สายไฟต่อวงจร"
                  >
                    <BiRightArrow
                      style={{
                        marginRight: "10px",
                      }}
                    />{" "}
                    สายไฟ IEC 53
                  </Link>
                  <a
                    style={{
                      marginBottom: "10px",
                      display: "flex",
                      height: "auto",
                      alignItems: "center",
                      color: "#000",
                      marginLeft: "25px",
                    }}
                    href="/category/สายฝังดิน"
                  >
                    <BiRightArrow
                      style={{
                        marginRight: "10px",
                      }}
                    />{" "}
                    สายไฟ VCT
                  </a>
                  <a
                    style={{
                      marginBottom: "10px",
                      display: "flex",
                      height: "auto",
                      alignItems: "center",
                      color: "#000",
                      marginLeft: "25px",
                    }}
                    href="/category/สายอลูมิเนียม"
                  >
                    <BiRightArrow
                      style={{
                        marginRight: "10px",
                      }}
                    />{" "}
                    สายไฟ THW-A
                  </a>
                </div>
                <div
                  style={{
                    width: "90%",
                  }}
                >
                  <hr
                    style={{
                      border: "0.5px solid #D9D9D9",
                      marginBottom: "10px",
                      marginTop: "10px",
                    }}
                  />
                  <Link
                    style={{
                      color: "#000",
                      marginLeft: "25px",
                    }}
                    to="/"
                  >
                    วิธีการสั่งซื้อ/ชำระเงิน
                  </Link>
                  <hr
                    style={{
                      border: "0.5px solid #D9D9D9",
                      marginBottom: "10px",
                      marginTop: "10px",
                    }}
                  />
                  <Link
                    style={{
                      color: "#000",
                      marginLeft: "25px",
                    }}
                    to="/"
                  >
                    มาตรฐานสายไฟทริปเปิ้ลเอ็น
                  </Link>
                  <hr
                    style={{
                      border: "0.5px solid #D9D9D9",
                      marginBottom: "10px",
                      marginTop: "10px",
                    }}
                  />
                  <Link
                    style={{
                      color: "#000",
                      marginLeft: "25px",
                    }}
                    to="/"
                  >
                    ความรู้เรื่องไฟฟ้า
                  </Link>
                  <hr
                    style={{
                      border: "0.5px solid #D9D9D9",
                      marginBottom: "10px",
                      marginTop: "10px",
                    }}
                  />
                  <Link
                    style={{
                      color: "#000",
                      marginLeft: "25px",
                    }}
                    to="/"
                  >
                    ข่าวสาร โปรโมชั่น
                  </Link>
                  <hr
                    style={{
                      border: "0.5px solid #D9D9D9",
                      marginBottom: "10px",
                      marginTop: "10px",
                    }}
                  />
                  <Link
                    style={{
                      color: "#000",
                      marginLeft: "25px",
                    }}
                    to="/"
                  >
                    ดาวน์โหลดแคตตาล็อค
                  </Link>
                  <hr
                    style={{
                      border: "0.5px solid #D9D9D9",
                      marginBottom: "10px",
                      marginTop: "10px",
                    }}
                  />
                </div>
                <div>
                  <h2>ติดต่อเรา</h2>
                  <p>LINE : @triplencable</p>
                  <p>TEL : 062-438-8669</p>
                  <p>EMAIL : contact@triplencable.com</p>
                </div>
                <div
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <h5>ช่องทางอื่นๆ</h5>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Link to="">
                    <img src={Facebook} alt="facebook" />
                  </Link>
                  <Link to="">
                    <img src={Tiktok} alt="tiktok" />
                  </Link>
                  <Link to="">
                    <img src={Lazada} alt="Lazada" />
                  </Link>
                  <Link to="">
                    <img src={Shoppee} alt="Shopee" />
                  </Link>
                </div>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarComponent;
