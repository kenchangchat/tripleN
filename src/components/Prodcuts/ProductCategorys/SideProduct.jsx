import React, { useState, useEffect } from "react";
import "./scss/ProductCategory.scss";
import { Link } from "react-router-dom";
import recImage from "./img/THW1x1 1.png";
import { ApiRouter, api } from "../../../api/MainApi";

const productRecArr = [
  {
    id: 1,
    img: recImage,
    title: "สายไฟ THW 1x1.5",
    subtitle: "ทริปเปิ้ลเอ็น",
    des: "สายไฟบ้าน ทองแดงแท้ 100% นำกระแสดี สำหรับใช้ภายในอาคาร  มาตรฐาน มอก.",
    price: "1,000",
    discount: "33%",
    oldPrice: "1,500",
    link: "/productdetail",
  },
  {
    id: 2,
    img: recImage,
    title: "สายไฟ THW 1x1.5",
    subtitle: "ทริปเปิ้ลเอ็น",
    des: "สายไฟบ้าน ทองแดงแท้ 100% นำกระแสดี สำหรับใช้ภายในอาคาร  มาตรฐาน มอก.",
    price: "1,000",
    discount: "33%",
    oldPrice: "1,500",
  },
  {
    id: 3,
    img: recImage,
    title: "สายไฟ THW 1x1.5",
    subtitle: "ทริปเปิ้ลเอ็น",
    des: "สายไฟบ้าน ทองแดงแท้ 100% นำกระแสดี สำหรับใช้ภายในอาคาร  มาตรฐาน มอก.",
    price: "1,000",
    discount: "33%",
    oldPrice: "1,500",
  },
  {
    id: 4,
    img: recImage,
    title: "สายไฟ THW 1x1.5",
    subtitle: "ทริปเปิ้ลเอ็น",
    des: "สายไฟบ้าน ทองแดงแท้ 100% นำกระแสดี สำหรับใช้ภายในอาคาร  มาตรฐาน มอก.",
    price: "1,000",
    discount: "33%",
    oldPrice: "1,500",
  },
];

function SideProduct(props) {
  const [productCategory, setProductCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let type = "all"
      switch (props.type) {
        case "สินค้าทั้งหมด":
          type = "all";
          break;
        case 'สายไฟบ้าน':
          type = "THW";
          break;
        case 'สายไฟตีกิ๊บ':
          type = "VAF";
          break;
        case 'สายไฟฝังดิน':
          type = "VCT";
          break;
        case 'สายเมนไฟฟ้า':
          type = "THW";
          break;
        case 'สายอลูมิเนียม':
          type = "THW-A";
          break;
        case 'สายไฟต่อวงจร':
          type = "IV";
          break;
      }
      const response = await api.get(ApiRouter.api_product_category + "/" + type);
      let imagename = [];
      response.data.map((item) => {
        imagename.push(item.pd_picture);
      });
      const imagePromises = imagename.map(async (imagename) => {
        const res = await api.get(ApiRouter.api_get_image + "/" + imagename, {
          responseType: "blob",
        });
        const blobData = await res.data.arrayBuffer();
        const base64String = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(
            new Blob([blobData], { type: response.headers["content-type"] })
          );
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });
        return base64String;
      });
      const images = await Promise.all(imagePromises);
      const data = response.data.map((item, i) => {
        return { ...item, pd_picture: images[i] };
      });
      setProductCategory(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="product__cat__side__product">
        <div className="prd__cat_menu">
          <ul>
            <li>
              <a href="#">สินค้าทั้งหมด</a>
            </li>
            <li>
              <p href="#">สินค้าขายดี</p>
            </li>
            <li>
              <p href="#">โปรโมชั่น</p>
            </li>
          </ul>
        </div>
        <div className="prd__side__con">
          {productCategory.map((item, i) => (
            <div className="prd__side__card" key={i}>
              <div className="prd__side__body">
                <div className="rec__span__">
                  <span>{
                      (((item.pd_price * 1) - (item.pd_discount *1)) / (item.pd_price * 1) * 100).toFixed(0) + "%"
                    }</span>
                </div>
                <div className="rec__img__">
                  <img src={item.pd_picture} width="100%" alt="rec" />
                </div>
                <div className="rec__title__">
                  <h3>
                    {item.pd_name}
                  </h3>
                </div>
                <div className="rec__des__">
                  <p>{item.pd_detail.substring(0, 80) + "......"}</p>
                </div>
                <div className="rec__price__">
                  <span>
                  {item.pd_length == "ตัดเมตร" ? "เมตรละ" : "ม้วนละ"}{" "}
                    <u> {item.pd_price}</u>
                  </span>
                  <p>
                    <b>฿ {item.pd_discount}</b>
                  </p>
                </div>
                <div className="rec__btn__">
                  <a href={`/productdetail/${item.barcode}`}>
                    <button>ดูรายละเอียดเพิ่มเติม</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SideProduct;
