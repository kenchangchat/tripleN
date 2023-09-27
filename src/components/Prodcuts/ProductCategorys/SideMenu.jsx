import React from "react";
import "./scss/ProductCategory.scss";
import { FaCaretUp } from "react-icons/fa";
import { FiChevronUp } from "react-icons/fi";
import SIDEIMG from './img/side.png'

function SideMenu() {
  return (
    <>
      <div className="product__cat__side__menu">
        <img src={SIDEIMG} alt="side" />
        {/* <div className="menu__cat__con">
          <h2>ฟิลเตอร์ค้นหา</h2>
          <div className="menu__cat__menu">
            <button>
              ประเภทสินค้า
              <FaCaretUp size={30} />
            </button>
            <div className="submenu__cat">
              <button>
                เลือกตามชนิดสายไฟ
                <FiChevronUp size={20} />
              </button>
              <ul>
                <li>
                  <div className="nn__">
                    <input type="checkbox" />
                    <label>สายไฟ THW</label>
                  </div>
                </li>
                <li>
                  <div className="nn__">
                    <input type="checkbox" />
                    <label>สายไฟ VAF</label>
                  </div>
                </li>
                <li>
                  <div className="nn__">
                    <input type="checkbox" />
                    <label>สายไฟ VAF-G</label>
                  </div>
                </li>
                <li>
                  <div className="nn__">
                    <input type="checkbox" />
                    <label>สายไฟ IEC 53</label>
                  </div>
                </li>
                <li>
                  <div className="nn__">
                    <input type="checkbox" />
                    <label>สายไฟ VCT</label>
                  </div>
                </li>
                <li>
                  <div className="nn__">
                    <input type="checkbox" />
                    <label>สายไฟ VCT-G</label>
                  </div>
                </li>
                <li>
                  <div className="nn__">
                    <input type="checkbox" />
                    <label>สายไฟ THW-A</label>
                  </div>
                </li>
                <li>
                  <div className="nn__">
                    <input type="checkbox" />
                    <label>สายไฟ IEC 05 (IV)</label>
                  </div>
                </li>
                <li>
                  <div className="nn__">
                    <input type="checkbox" />
                    <label>สายไฟ VKF</label>
                  </div>
                </li>
              </ul>
            </div>
            <div className="submenu__cat">
              <button>
                เลือกตามประเภทการใช้งาน
                <FiChevronUp size={20} />
              </button>
              <ul>
                <li>
                  <div className="nn__">
                    <input type="checkbox" />
                    <label>สายไฟที่ใช้ทั่วไป</label>
                  </div>
                </li>
                <li>
                  <div className="nn__">
                    <input type="checkbox" />
                    <label>สายไฟอ่อน</label>
                  </div>
                </li>
                <li>
                  <div className="nn__">
                    <input type="checkbox" />
                    <label>สายแบน</label>
                  </div>
                </li>
                <li>
                  <div className="nn__">
                    <input type="checkbox" />
                    <label>สายไฟฝังดิน</label>
                  </div>
                </li>
                <li>
                  <div className="nn__">
                    <input type="checkbox" />
                    <label>สายอลูมิเนียม</label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="menu__cat__con">
          <div className="menu__cat__menu">
            <button>
              ขนาดสายไฟ
              <FaCaretUp size={30} />
            </button>
            <div className="submenu__cat">
              <ul>
                <li>
                  <div className="nn__">
                    <input type="checkbox" />
                    <label>1 ตร.มม</label>
                  </div>
                  <div className="mm__">
                    <p>(300)</p>
                  </div>
                </li>
                <li>
                  <div className="nn__">
                    <input type="checkbox" />
                    <label>1.5 ตร.มม</label>
                  </div>
                  <div className="mm__">
                    <p>(300)</p>
                  </div>
                </li>
                <li>
                  <div className="nn__">
                    <input type="checkbox" />
                    <label>2.5 ตร.มม</label>
                  </div>
                  <div className="mm__">
                    <p>(300)</p>
                  </div>
                </li>
                <li>
                  <div className="nn__">
                    <input type="checkbox" />
                    <label>4 ตร.มม</label>
                  </div>
                  <div className="mm__">
                    <p>(300)</p>
                  </div>
                </li>
                <li>
                  <div className="nn__">
                    <input type="checkbox" />
                    <label>6 ตร.มม</label>
                  </div>
                  <div className="mm__">
                    <p>(300)</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="menu__cat__con">
          <div className="menu__cat__menu">
            <button>
              ความยาวสายไฟ
              <FaCaretUp size={30} />
            </button>
            <div className="submenu__cat">
              <ul>
                <li>
                  <div className="nn__">
                    <input type="checkbox" />
                    <label>ตัดเมตร</label>
                  </div>
                  <div className="mm__">
                    <p>(10)</p>
                  </div>
                </li>
                <li>
                  <div className="nn__">
                    <input type="checkbox" />
                    <label>30 เมตร/ม้วน</label>
                  </div>
                  <div className="mm__">
                    <p>(88)</p>
                  </div>
                </li>
                <li>
                  <div className="nn__">
                    <input type="checkbox" />
                    <label>50 เมตร/ม้วน</label>
                  </div>
                  <div className="mm__">
                    <p>(70)</p>
                  </div>
                </li>
                <li>
                  <div className="nn__">
                    <input type="checkbox" />
                    <label>100 เมตร/ม้วน</label>
                  </div>
                  <div className="mm__">
                    <p>(78)</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="menu__cat__con">
          <div className="menu__cat__menu">
            <button>
              สีสายไฟ
              <FaCaretUp size={30} />
            </button>
            <div className="submenu__cat">
              <ul>
                <li>
                  <div className="nn__">
                    <input type="checkbox" />
                    <label>สีดำ</label>
                  </div>
                  <div className="mm__">
                    <p>(10)</p>
                  </div>
                </li>
                <li>
                  <div className="nn__">
                    <input type="checkbox" />
                    <label>สีฟ้า</label>
                  </div>
                  <div className="mm__">
                    <p>(88)</p>
                  </div>
                </li>
                <li>
                  <div className="nn__">
                    <input type="checkbox" />
                    <label>สีเทา</label>
                  </div>
                  <div className="mm__">
                    <p>(70)</p>
                  </div>
                </li>
                <li>
                  <div className="nn__">
                    <input type="checkbox" />
                    <label>สีน้ำตาล</label>
                  </div>
                  <div className="mm__">
                    <p>(78)</p>
                  </div>
                </li>
                <li>
                  <div className="nn__">
                    <input type="checkbox" />
                    <label>สีเขียวแถบเหลือง</label>
                  </div>
                  <div className="mm__">
                    <p>(78)</p>
                  </div>
                </li>
                <li>
                  <div className="nn__">
                    <input type="checkbox" />
                    <label>สีแดง</label>
                  </div>
                  <div className="mm__">
                    <p>(78)</p>
                  </div>
                </li>
                <li>
                  <div className="nn__">
                    <input type="checkbox" />
                    <label>สีนำเงิน</label>
                  </div>
                  <div className="mm__">
                    <p>(78)</p>
                  </div>
                </li>
                <li>
                  <div className="nn__">
                    <input type="checkbox" />
                    <label>สีเหลือง</label>
                  </div>
                  <div className="mm__">
                    <p>(78)</p>
                  </div>
                </li>
                <li>
                  <div className="nn__">
                    <input type="checkbox" />
                    <label>สีเขียว</label>
                  </div>
                  <div className="mm__">
                    <p>(78)</p>
                  </div>
                </li>
                <li>
                  <div className="nn__">
                    <input type="checkbox" />
                    <label>สีขาว</label>
                  </div>
                  <div className="mm__">
                    <p>(78)</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default SideMenu;
