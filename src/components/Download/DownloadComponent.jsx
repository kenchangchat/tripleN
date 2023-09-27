import React from "react";
import "./scss/Download.scss";
import Img from "./img/Cat 1.png";
import { IoDownloadOutline } from "react-icons/io5";

function DownloadComponent() {
  return (
    <>
      <div className="download_page">
        <div className="download_page_con">
          <h1>ดาวน์โหลด</h1>
          <div className="intro_picture">
            <div className="img_">
              <a
                href="https://triplencable.com/TripleN-TH-single%20page.pdf"
                target="_blank"
              >
                <img src={Img} alt="intro_picture" />
              </a>
              <p>แคตตาล็อกสายไฟ</p>
            </div>
            <div className="img_">
              <a
                href="https://triplencable.com/Technical Data_TripleN.pdf"
                target="_blank"
              >
                <img src={Img} alt="intro_picture" />
              </a>
              <p>Technical Data (TDS)</p>
            </div>
            {/* <div className="img_">
              <img src={Img} alt="intro_picture" />
              <p>เงื่อนไขและนโยบายการขาย</p>
            </div> */}
          </div>
          {/* <div className="download_text">
            <h1>ไฟล์เอกสารทั้งหมด</h1>
          </div>
          <div className="download_detail">
            <p>แคตตาล็อกสายไฟทริปเปิ้ลเอ็น</p>
            <p
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
            >
              ดาวน์โหลด{" "}
              <IoDownloadOutline
                size={30}
                style={{
                  marginLeft: "10px",
                  color: "#7093EE",
                }}
              />{" "}
            </p>
          </div>
          <hr />
          <div className="download_detail">
            <p>สายไฟ THW</p>
            <p
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
            >
              ดาวน์โหลด{" "}
              <IoDownloadOutline
                size={30}
                style={{
                  marginLeft: "10px",
                  color: "#7093EE",
                }}
              />{" "}
            </p>
          </div>
          <hr />
          <div className="download_detail">
            <p>สายไฟ VCT</p>
            <p
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
            >
              ดาวน์โหลด{" "}
              <IoDownloadOutline
                size={30}
                style={{
                  marginLeft: "10px",
                  color: "#7093EE",
                }}
              />{" "}
            </p>
          </div>
          <hr />
          <div className="download_detail">
            <p>สายไฟ THW-A</p>
            <p
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
            >
              ดาวน์โหลด{" "}
              <IoDownloadOutline
                size={30}
                style={{
                  marginLeft: "10px",
                  color: "#7093EE",
                }}
              />{" "}
            </p>
          </div>
          <hr />
          <div className="download_detail">
            <p>สายไฟ VAF, VAF-G</p>
            <p
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
            >
              ดาวน์โหลด{" "}
              <IoDownloadOutline
                size={30}
                style={{
                  marginLeft: "10px",
                  color: "#7093EE",
                }}
              />{" "}
            </p>
          </div>
          <hr /> */}

          {/* <div className="download_all">
            <a href="" download="">
              ดาวน์โหลดทั้งหมด
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default DownloadComponent;
