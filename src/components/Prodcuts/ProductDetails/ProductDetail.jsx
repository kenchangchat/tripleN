import React, { useState, useEffect } from "react";
import "./scss/ProductDetail.scss";
import "./scss/model.scss";
import { GrHomeRounded } from "react-icons/gr";
import Dummy from "./img/dummy.png";
import { FiHeart, FiMap } from "react-icons/fi";
import { IoRepeat } from "react-icons/io5";
import { BiShareAlt } from "react-icons/bi";
import ImgColor1 from "./img/color/1.png";
import ImgColor2 from "./img/color/2.png";
import ImgColor3 from "./img/color/3.png";
import ImgColor4 from "./img/color/4.png";
import ImgColor5 from "./img/color/5.png";
import ImgColor6 from "./img/color/6.png";
import ImgColor7 from "./img/color/7.png";
import ImgColor8 from "./img/color/8.png";
import ImgColor9 from "./img/color/9.png";
import ImgColor10 from "./img/color/10.png";
import { FiShoppingCart } from "react-icons/fi";
import TapComponent from "./TapComponent";
import recImage from "../ProductCategorys/img/THW1x1 1.png";
import { Link, useParams } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import TWDLogo from "./img/download.png";
import { SlPhone } from "react-icons/sl";
import axios from "axios";
import LoadingComponent from "../../Loadings/LoadingComponent";
import Swal from "sweetalert2";
import { api, ApiRouter } from "../../../api/MainApi";
import { Empty, message } from "antd";

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

const sizeArr = [
  {
    id: 1,
    size: "30 เมตร",
  },
  {
    id: 2,
    size: "50 เมตร",
  },
  {
    id: 3,
    size: "100 เมตร",
  },
  {
    id: 4,
    size: "ตัดเมตร",
  },
];

const RegionArr = [
  {
    id: 1,
    name: "ภาคกลาง",
    region: "C",
  },
  {
    id: 2,
    name: "ภาคเหนือ",
    region: "N",
  },
  {
    id: 3,
    name: "ภาคตะวันออกเฉียงเหนือ",
    region: "NE",
  },
  {
    id: 4,
    name: "ภาคใต้",
    region: "S",
  },
  {
    id: 5,
    name: "ภาคตะวันออก",
    region: "E",
  },
];

const ColorArr = [
  {
    id: 1,
    color: "น้ำตาล",
    img: ImgColor1,
  },
  {
    id: 2,
    color: "ดำ",
    img: ImgColor2,
  },
  {
    id: 3,
    color: "เทา",
    img: ImgColor3,
  },
  {
    id: 4,
    color: "ฟ้า",
    img: ImgColor4,
  },
  {
    id: 5,
    color: "เขียว",
    img: ImgColor5,
  },
  {
    id: 6,
    color: "เหลือง",
    img: ImgColor6,
  },
  {
    id: 7,
    color: "แดง",
    img: ImgColor7,
  },
  {
    id: 8,
    color: "ขาว",
    img: ImgColor8,
  },
  {
    id: 9,
    color: "น้ำเงิน",
    img: ImgColor9,
  },
  {
    id: 10,
    color: "เขียวเหลือง",
    img: ImgColor10,
  },
];

function ProductDetail() {
  const [modal, setModal] = useState(false);
  const [datas, setDatas] = useState([]);
  const [products, setProducts] = useState([]);
  const [slogan, setSlogan] = useState("");
  const [subdetail, setSubdetail] = useState([]);

  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);
  const [feature, setFeature] = useState([]);
  const [usage, setUsege] = useState([]);

  const [twdstore, setTwdstore] = useState([]);
  const [inHouse, setInHouse] = useState([]);

  const [amount, setAmount] = useState(1);
  const [colorSelect, setColorSelect] = useState("");
  const [sizeSelect, setSizeSelect] = useState("");
  const [location, setLocation] = useState({});

  const [region, setRegion] = useState("");
  const [regionSe, setRegionSe] = useState("");

  const [colorId, setColorId] = useState();
  const [messageApi, contextHolder] = message.useMessage();

  const [isSubmit, setIsSubmit] = useState(false);

  const [navtitle, setNavtitle] = useState("");

  const [leadtime, setLeadtime] = useState(false);
  let { barcode } = useParams();

  const success = ({ message }) => {
    messageApi.open({
      type: "success",
      content: `เปลี่ยนเป็นสาขา ` + message,
    });
    setIsSubmit(true);
  };

  const error = ({ content }) => {
    messageApi.open({
      type: "error",
      content: content,
    });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get(
        ApiRouter.api_get_product_by_barcode + "/" + barcode
      );
      let imageName = [];
      res.data.product.map((item) => {
        imageName.push(item.pd_picture);
        imageName.push(item.pd_picture_1);
        imageName.push(item.pd_picture_2);
        imageName.push(item.pd_picture_3);
      });
      const imagePromises = imageName.map(async (imageName) => {
        const response = await api.get(
          ApiRouter.api_get_image + "/" + imageName,
          {
            responseType: "blob",
          }
        );
        const blobData = await response.data.arrayBuffer();
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
      const dataDetail = res.data.product.map((item, index) => {
        return {
          ...item,
          pd_picture: images[index],
          pd_picture_1: images[index + 1],
          pd_picture_2: images[index + 2],
          pd_picture_3: images[index + 3],
        };
      });
      setProducts(dataDetail);
      let getColor = res.data.color;
      let newcolor = [];
      for (let i = 0; i < getColor.length; i++) {
        for (let j = 0; j < ColorArr.length; j++) {
          if (getColor[i].pd_color === ColorArr[j].color) {
            newcolor.push(ColorArr[j]);
          }
        }
      }
      const uniqueValues = new Set(Object.values(newcolor));
      Object.keys(newcolor).forEach((key) => {
        if (uniqueValues.has(newcolor[key])) {
          uniqueValues.delete(newcolor[key]);
        } else {
          delete newcolor[key];
        }
      });

      let getSize = res.data.length;
      // console.log(getSize);
      let newSize = [];
      for (let i = 0; i < getSize.length; i++) {
        for (let j = 0; j < sizeArr.length; j++) {
          if (getSize[i].pd_length === sizeArr[j].size) {
            newSize.push(sizeArr[j]);
          }
        }
      }
      const uniqueValuesSize = new Set(Object.values(newSize));
      Object.keys(newSize).forEach((key) => {
        if (uniqueValuesSize.has(newSize[key])) {
          uniqueValuesSize.delete(newSize[key]);
        } else {
          delete newSize[key];
        }
      });

      setSize(newSize);
      setColor(newcolor);
      setNavtitle(res.data.product[0].pd_name);
      setSubdetail(res.data.subdetail_product);
      setFeature(res.data.feature_product);
      setUsege(res.data.usage_product);
      setSlogan(res.data.slogan_product[0].slogan_product);
    };
    fetchData();
    setIsSubmit(false);
  }, [isSubmit]);

  const Addtest = async () => {
    setModal(true);
  };

  const AddCart = async (prod) => {

    let body = {
      product_code: barcode,
      quantity: amount,
      color: colorSelect,
      size: sizeSelect,
      latitude: location.latitude,
      longitude: location.longitude,
      pd_type: products[0].pd_type,
    };

    if (colorSelect === "" || sizeSelect === "") {
      alert("กรุณาเลือกสีและขนาด");
      return;
    }
    const arrCart = localStorage.getItem("arrCart");

    if (arrCart === null) {
      // const res = await api.post(ApiRouter.api_get_location, body);

      // if(res.data.data > 0){
      //   setTwdstore(res.data.data);
      // }else{
      //   setTwdstore([])
      // }

      // for (let i = 0; i < res.data.inhouse.length; i++) {
      //   for (let j = 0; j < ColorArr.length; j++) {
      //     if (res.data.inhouse[i].pd_color === ColorArr[j].color) {
      //       res.data.inhouse[i].colorId = ColorArr[j].id;
      //     }
      //   }
      // }
      // setInHouse(res.data.inhouse);
      // if (res.data.data.length === 0) {
      //   // error({ content: "สินค้าไม่มีในร้านใกล้เคียง" });
      // }
      // setModal(true);

      let arrCart = [];
      let arrAdd = {
        product_code: barcode,
        quantity: amount,
        pd_name: prod.pd_name,
        color: colorSelect,
        pb_picture: prod.pd_picturebig,
        pd_price: prod.pd_discount,
        pd_length: sizeSelect,
        sku: prod.sku,
      };
      arrCart.push(arrAdd);
      localStorage.setItem("arrCart", JSON.stringify(arrCart));
      Swal.fire({
        icon: "success",
        title: "เพิ่มสินค้าลงตะกร้าสำเร็จ",
        showConfirmButton: false,
        timer: 1500,
      });


      let sell = localStorage.getItem("sell");
      if (sell == 0) {
        localStorage.setItem("reload", 1);
        setModal(false);
        setTimeout(() => {
          window.location.href = "/checkout";
        }, 1500);
      } else {
        localStorage.setItem("reload", 1);
        setModal(false);
        setIsSubmit(true);
        window.location.reload();
      }
    } else {
      let arrCart2 = JSON.parse(arrCart);
      let storeid = localStorage.getItem("StoreId");

      await api.post(ApiRouter.api_product_cart, body).then((res) => {
        if (res.data.length === 0) {
          alert("สินค้าไม่มีในร้าน");
        } else {
          for (let i = 0; i < res.data.length; i++) {
            for (let j = 0; j < ColorArr.length; j++) {
              if (res.data[i].pd_color === ColorArr[j].color) {
                res.data[i].colorId = ColorArr[j].id;
              }
            }
          }
          const objIndex = arrCart2.findIndex(
            (obj) => obj.product_code == res.data[0].barcode
          );
          if (objIndex == -1) {
            let dataArr = {
              product_code: res.data[0].barcode,
              quantity: amount * 1,
              store_id: storeid,
              pd_name: res.data[0].pd_name,
              color: res.data[0].colorId,
              pb_picture: res.data[0].pd_picture,
              pd_price: res.data[0].pd_discount,
              pd_length: res.data[0].pd_length,
              sku: res.data[0].sku,
            };
            arrCart2.push(dataArr);
          } else {
            arrCart2[objIndex].quantity += amount * 1;
          }
          localStorage.setItem("arrCart", JSON.stringify(arrCart2));
          Swal.fire({
            icon: "success",
            title: "เพิ่มสินค้าลงตะกร้าสำเร็จ",
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        }
      });

      // const result = await api.post(ApiRouter.api_product_cart, body);
      // setInHouse(result.data);
    }
  };

  const AddCartInModel = async (
    store_id,
    store_name,
    quantity_remain,
    lead_time
  ) => {
    if (lead_time.length === 0) {
      let arrCart = [];
      let arrAdd = {
        store_id: store_id,
        product_code: inHouse[0].barcode,
        quantity: quantity_remain,
        pd_name: inHouse[0].pd_name,
        color: inHouse[0].colorId,
        pb_picture: inHouse[0].pd_picture,
        pd_price: inHouse[0].pd_discount,
        pd_length: inHouse[0].pd_length,
        sku: inHouse[0].sku,
      };

      arrCart.push(arrAdd);
      localStorage.setItem("arrCart", JSON.stringify(arrCart));
      localStorage.setItem("Store", store_name);
      localStorage.setItem("StoreId", store_id);
      Swal.fire({
        icon: "success",
        title: "เพิ่มสินค้าลงตะกร้าสำเร็จ",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      let arrCart = [];
      let arrAdd = {
        store_id: store_id,
        product_code: inHouse[0].barcode,
        quantity: amount,
        pd_name: inHouse[0].pd_name,
        color: inHouse[0].colorId,
        pb_picture: inHouse[0].pd_picture,
        pd_price: inHouse[0].pd_discount,
        pd_length: inHouse[0].pd_length,
        sku: inHouse[0].sku,
      };
      arrCart.push(arrAdd);
      localStorage.setItem("arrCart", JSON.stringify(arrCart));
      localStorage.setItem("Store", store_name);
      localStorage.setItem("StoreId", store_id);
      Swal.fire({
        icon: "success",
        title: "เพิ่มสินค้าลงตะกร้าสำเร็จ",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    let sell = localStorage.getItem("sell");
    if (sell == 0) {
      localStorage.setItem("reload", 1);
      setModal(false);
      setTimeout(() => {
        window.location.href = "/checkout";
      }, 1500);
    } else {
      localStorage.setItem("reload", 1);
      setModal(false);
      setIsSubmit(true);
      window.location.reload();
    }
  };

  const SellAway = async () => {
    localStorage.setItem("sell", 0);
    let body = {
      product_code: barcode,
      quantity: amount,
      color: colorSelect,
      size: sizeSelect,
      latitude: location.latitude,
      longitude: location.longitude,
      pd_type: products[0].pd_type,
    };

    setModal(true);
    if (colorSelect === "" || sizeSelect === "") {
      alert("กรุณาเลือกสีและขนาด");
      return;
    }
    const arrCart = localStorage.getItem("arrCart");
    if (arrCart === null) {
      const res = await api.post(ApiRouter.api_get_location, body);
      // if (res.data.data.length !== 0) {
      //   alert("สินค้ามีในร้านใกล้เคียง");
      // }
      // setTwdstore(res.data.data);
      if(res.data.data > 0){
        setTwdstore(res.data.data);
      }else{
        setTwdstore([])
      }
      for (let i = 0; i < res.data.inhouse.length; i++) {
        for (let j = 0; j < ColorArr.length; j++) {
          if (res.data.inhouse[i].pd_color === ColorArr[j].color) {
            res.data.inhouse[i].colorId = ColorArr[j].id;
          }
        }
      }
      setInHouse(res.data.inhouse);
      if (res.data.data.length === 0) {
        error({ content: "สินค้าไม่มีในร้านใกล้เคียง" });
      }
      setModal(true);
    } else {
      let arrCart2 = JSON.parse(arrCart);
      let storeid = localStorage.getItem("StoreId");
      await api.post(ApiRouter.api_product_cart, body).then((res) => {
        if (res.data.length === 0) {
          alert("สินค้าไม่มีในร้าน");
        } else {
          for (let i = 0; i < res.data.length; i++) {
            for (let j = 0; j < ColorArr.length; j++) {
              if (res.data[i].pd_color === ColorArr[j].color) {
                res.data[i].colorId = ColorArr[j].id;
              }
            }
          }
          const objIndex = arrCart2.findIndex(
            (obj) => obj.product_code == res.data[0].barcode
          );
          if (objIndex == -1) {
            let dataArr = {
              product_code: res.data[0].barcode,
              quantity: amount,
              store_id: storeid,
              pd_name: res.data[0].pd_name,
              color: res.data[0].colorId,
              pb_picture: res.data[0].pd_picture,
              pd_price: res.data[0].pd_discount,
              pd_length: res.data[0].pd_length,
              sku: res.data[0].sku,
            };
            arrCart2.push(dataArr);
          } else {
            arrCart2[objIndex].quantity += amount;
          }
          localStorage.setItem("arrCart", JSON.stringify(arrCart2));
          Swal.fire({
            icon: "success",
            title: "เพิ่มสินค้าลงตะกร้าสำเร็จ",
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(() => {
            window.location.href = "/checkout";
          }, 1500);
        }
      });
    }
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleChangeRegion = () => {
    changeRegion();
  };

  const changeRegion = async (e) => {
    setTwdstore([]);
    let body = {
      product_code: inHouse[0].barcode,
      quantity: amount,
      region: regionSe,
      color: colorSelect,
      size: sizeSelect,
      pd_type: products[0].pd_type,
    };
    // console.log(body);
    await api
      .post(ApiRouter.api_change_location, body)
      .then((res) => {
        setTwdstore(res.data.data);
      })
      .catch((err) => {
        return Swal.fire({
          text: "ไม่มีสาขาในภูมิภาคที่ท่านเลือก กรุณาเลือกภูมิภาคของท่าน",
        });
      });
  };

  const handleRegion = async () => {
    setTwdstore([]);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.log(error);
      }
    );
    setRegion(`${location.latitude}, ${location.longitude}`);
    let body = {
      product_code: barcode,
      quantity: amount,
      color: colorSelect,
      size: sizeSelect,
      latitude: location.latitude,
      longitude: location.longitude,
      pd_type: products[0].pd_type,
    };
    const res = await api.post(ApiRouter.api_get_location, body);
    if (res.data.data.length === 0) {
      Swal.fire({
        icon: "error",
        title: "ไม่พบสินค้าในร้านใกล้เคียง",
        text: "กรุณาเลือกภูมิภาคของท่าน",
      });
    }
    setTwdstore(res.data.data);
  };

  const handleChangeNum = (event) => {
    const inputValue = event.target.value;
    const regex = /^[0-9]*$/;

    if (regex.test(inputValue)) {
      setAmount(inputValue);
      setTwdstore([]);
    } else {
      alert("กรุณากรอกตัวเลขเท่านั้น");
    }
  };

  const addAmount = () => {
    setTwdstore([]);
    setAmount(amount * 1 + 1);
  };

  const downAmount = () => {
    setTwdstore([]);
    if (amount < 2 || amount === 1) {
      alert("ไม่สามารถเลือกจำนวนน้อยกว่า 1 ได้");
    } else {
      setAmount(amount * 1 - 1);
    }
  };

  const AmountDeleteon = () => {
    if (amount < 2 || amount === 1) {
      alert("ไม่สามารถเลือกจำนวนน้อยกว่า 1 ได้");
    } else {
      setAmount(amount * 1 - 1);
    }
  };
  const AmountAddon = () => {
    setAmount(amount * 1 + 1);
  };

  const handleleadtime1 = async () => {
    setLeadtime(true);
  };

  return (
    <>
      {contextHolder}
      <div className="product__detail">
        <div className="product__de__con">
          <div className="product__de__path">
            <GrHomeRounded
              style={{ marginRight: "10px", marginLeft: "10px" }}
            />
            <p>/ สินค้าทั้งหมด / เลือกตามชนิดสายไฟ / {navtitle}</p>
          </div>
          {products.map((product, i) => (
            <div className="product_de_product" key={i}>
              <div className="product__de__img__small">
                <div className="product__de__img__smail__body">
                  <img src={product.pd_picture_1} alt="smail img" />
                </div>
                <div className="product__de__img__smail__body">
                  <img src={product.pd_picture_2} alt="smail img" />
                </div>
                <div className="product__de__img__smail__body">
                  <img src={product.pd_picture_3} alt="smail img" />
                </div>
              </div>
              <div className="product__de__img__big">
                <div className="product__de__img__big__body">
                  <img
                    src={product.pd_picture}
                    alt="big img"
                    key={i}
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="de__more">
                  <p>
                    <FiHeart size={30} style={{ marginRight: "5px" }} />{" "}
                    เพิ่มในรายการโปรด
                  </p>
                  <p>
                    <IoRepeat size={30} style={{ marginRight: "5px" }} />{" "}
                    เปรียบเทียบสินค้า
                  </p>
                  <p>
                    <BiShareAlt size={25} style={{ marginRight: "5px" }} />{" "}
                    แชร์โซเชียล
                  </p>
                </div>
              </div>
              <div className="prd__det__all">
                <h1>{product.pd_name}</h1>
                <p>{product.pd_price}</p>
                <b>
                  ฿ {product.pd_discount} /{" "}
                  {sizeSelect === "ตัดเมตร" ? "เมตร" : "ม้วน"}
                </b>
                <ul>
                  {slogan}
                  {subdetail.map((sub, ii) => (
                    <li key={ii}>{sub.detail_sub}</li>
                  ))}
                </ul>
                <h3>เลือกสี</h3>
                <div className="btn__color_img">
                  {color.map((col, i) => (
                    <div key={i}>
                      <input
                        type="radio"
                        name="color"
                        id={col.color}
                        className="input-hidden"
                        value={col.color}
                        onChange={(e) => setColorSelect(e.target.value)}
                      />
                      <label htmlFor={col.color}>
                        <img src={col.img} alt="color" />
                      </label>
                    </div>
                  ))}
                </div>
                <h3>ความยาว</h3>
                <div className="btn__mm">
                  {size.map((size, i) => (
                    <div key={i}>
                      <input
                        type="radio"
                        name="mm"
                        id={size.size}
                        className="input-hidden"
                        value={size.size}
                        onChange={(e) => setSizeSelect(e.target.value)}
                      />
                      <label htmlFor={size.size}>{size.size}</label>
                    </div>
                  ))}
                </div>
                <h3>{sizeSelect === "ตัดเมตร" ? "จำนวนเมตร" : "จำนวน"}</h3>
                <div className="number__input">
                  <button className="btn__number" onClick={AmountDeleteon}>
                    -
                  </button>
                  <input
                    type="text"
                    value={amount}
                    pattern="[0-9]*"
                    onChange={handleChangeNum}
                  />
                  <button className="btn__number" onClick={AmountAddon}>
                    +
                  </button>
                </div>
                <div className="btn__add__cart">
                  <button className="add__cart" onClick={() => {
                                          setLeadtime(false);
                                          AddCart(
                                            product
                                          );
                                        }}>
                    <FiShoppingCart size={24} style={{ marginRight: "5px" }} />
                    เพิ่มในรถเข็น
                  </button>
                  <button className="sell" onClick={SellAway}>
                    <FiShoppingCart size={24} style={{ marginRight: "5px" }} />
                    สั่งซื้อเลย
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="de__prd_tabs">
        <div className="de__prd_tabs__con">
          <TapComponent feature={feature} usage={usage} />
        </div>
      </div>
      {/* <div className="product__more_de">
        <div className="product__more_de__con">
          <div className="title__mare">
            <h3>สินค้าที่เกี่ยวข้อง</h3>
          </div>
          <div className="product__more_de__list">
            <div className="product_more_de_list_con">
              {productRecArr.map((item, i) => (
                <div className="prd__side__card_" key={i}>
                  <div className="prd__side__body_">
                    <div className="rec__span___">
                      <span>{item.discount}</span>
                    </div>
                    <div className="rec__img___">
                      <img src={item.img} alt="rec" />
                    </div>
                    <div className="rec__title___">
                      <h3>{item.title}</h3>
                      <h3>{item.subtitle}</h3>
                    </div>
                    <div className="rec__des___">
                      <p>{item.des}</p>
                    </div>
                    <div className="rec__price___">
                      <span>
                        ม้วนละ <u> {item.oldPrice}</u>
                      </span>
                      <p>
                        <b>฿ {item.price}</b>
                      </p>
                    </div>
                    <div className="rec__btn___">
                      <a href="/productdetail">
                        <button>ดูรายละเอียดเพิ่มเติม</button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
      {modal && (
        <>
          <div className="modal" style={{zIndex: "999"}}>
            <div className="modal__content">
              <div className="modal__content__input">
                <div className="modal__input">
                  <div className="modal__num">
                    <h2>1</h2>
                  </div>
                  <div className="modal__from">
                    <p>ค้นหาสาขาตามภูมิภาค</p>
                    <select
                      type="text"
                      onChange={(e) => setRegionSe(e.target.value)}
                    >
                      <option>กดเพื่อเลือกภูมิภาค</option>
                      {RegionArr.map((region, i) => (
                        <option value={region.region} key={i}>
                          {region.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="modal__input">
                  <div className="modal__numtwo">
                    <h2>2</h2>
                  </div>
                  <div className="modal__from">
                    <p>ใส่จำนวนที่ต้องการ</p>
                    <div className="number__input">
                      <button className="btn__number" onClick={downAmount}>
                        -
                      </button>
                      <input
                        type="text"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        disabled
                      />
                      <button className="btn__number" onClick={addAmount}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal__content__input">
                <div className="modal__input">
                  <div className="modal__num"></div>
                  <div className="modal__from_row">
                    <p>หรือ ค้นหาสาขาใกล้ฉัน</p>
                    <div className="in__from">
                      <input
                        type="text"
                        placeholder="พิมพ์ตำแหน่งของคุณ หรือ"
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                      />
                      <button onClick={handleRegion}>
                        <IoLocationOutline size={25} />
                        ดูสาขาใกล้ฉัน
                      </button>
                    </div>
                  </div>
                </div>
                <div className="modal__input">
                  <div className="modal__numtwo">
                    <h2
                      style={{
                        marginTop: "35px",
                      }}
                    >
                      3
                    </h2>
                  </div>
                  <div className="modal__from__btn">
                    <button onClick={handleChangeRegion}>ค้นหา</button>
                  </div>
                </div>
              </div>

              <div className="model__table__con">
                <div className="model_table">
                  {twdstore.length > 0 ? (
                    twdstore.map((item, i) => (
                      <div key={i}>
                        <hr />
                        <div className="box__item">
                          <ul>
                            <li className="img">
                              <img src={TWDLogo} alt="imgLogo" />
                            </li>
                            <li className="store__">
                              <div className="store__box">
                                <h4>{item.store_name}</h4>
                                <p>
                                  <SlPhone
                                    size={15}
                                    style={{ marginRight: "10px" }}
                                  />
                                  1308
                                </p>
                                <p>
                                  <FiMap style={{ marginRight: "10px" }} />
                                  {item.distance
                                    ? `${item.distance} กม.`
                                    : "ไม่ระบุ"}
                                </p>
                              </div>
                              <div className="store__box">
                                <div className="box__status">
                                  <h4
                                    style={{
                                      fontSize: "16px",
                                      color:
                                        item.quantity_remain === 0
                                          ? "gray"
                                          : amount > item.quantity_remain
                                          ? "#F0D435"
                                          : "green",
                                    }}
                                  >
                                    {item.lead_time === "" ? (
                                      <>
                                        {item.quantity_remain === 0
                                          ? "สินค้าหมดชั่วคราว"
                                          : amount > item.quantity_remain
                                          ? `สินค้ามีไม่เพียงพอ`
                                          : "สินค้าพร้อมส่ง"}
                                      </>
                                    ) : (
                                      <>สินค้ามีไม่เพียงพอ</>
                                    )}
                                  </h4>
                                  <p>
                                    {item.lead_time === "" ? (
                                      <>
                                        {item.quantity_remain === 0
                                          ? "สินค้าหมดชั่วคราว"
                                          : amount > item.quantity_remain
                                          ? `มีสินค้าพร้อมจัดส่ง จำนวน ${item.quantity_remain} ชิ้น `
                                          : "สินค้าพร้อมส่ง"}
                                      </>
                                    ) : (
                                      <>
                                        มีสินค้าจำนวน {item.quantity_remain}{" "}
                                        ชิ้น จะใช้เวลาจัดเตรียม {item.lead_time}{" "}
                                        วัน
                                      </>
                                    )}
                                  </p>
                                  <span>{item.price_list}</span>
                                  <h5>
                                    <b style={{ color: "red" }}>
                                      ฿ {item.sale_price}
                                    </b>{" "}
                                    /ชิ้น
                                  </h5>
                                </div>
                              </div>
                            </li>
                            <li>
                              {item.lead_time === "" ? (
                                <>
                                  {item.quantity_remain === 0 ? (
                                    <></>
                                  ) : (
                                    <>
                                      <button
                                        className="sell"
                                        style={{
                                          width: "110px",
                                          marginLeft: "18px",
                                        }}
                                        onClick={() => {
                                          setLeadtime(false);
                                          AddCartInModel(
                                            item.store_id,
                                            item.store_name,
                                            item.quantity_remain,
                                            item.lead_time
                                          );
                                        }}
                                      >
                                        เลือกสาขานี้
                                      </button>
                                    </>
                                  )}
                                </>
                              ) : (
                                <>
                                  <button
                                    className="sell"
                                    style={{
                                      width: "110px",
                                      marginLeft: "18px",
                                    }}
                                    onClick={() => {
                                      setLeadtime(true);
                                      AddCartInModel(
                                        item.store_id,
                                        item.store_name,
                                        item.quantity_remain,
                                        item.lead_time
                                      );
                                    }}
                                  >
                                    เลือกสาขานี้
                                  </button>
                                </>
                              )}
                            </li>
                          </ul>
                        </div>
                      </div>
                    ))
                  ) : (
                    <>
                      <Empty
                        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                        imageStyle={{ height: 60 }}
                        description={<span>ค้นหาร้านค้า</span>}
                      />
                    </>
                  )}
                </div>
                <div className="box__btn__">
                  {/* <button className="add__cart">
                    <FiShoppingCart size={24} style={{ marginRight: "5px" }} />
                    เลือกสินค้าต่อ
                  </button> */}
                  {/* <button className="sell">
                    <FiShoppingCart size={24} style={{ marginRight: "5px" }} />
                    สั่งซื้อเลย
                  </button> */}
                </div>
              </div>

              <a onClick={closeModal} className="modal__close">
                <p>x</p>
              </a>
            </div>
          </div>
          <div className="moblie_model">
            <div className="moblie_con">
              <div className="number_con">
                <div className="number">
                  <h2>1</h2>
                </div>
                <div className="form">
                  <label>เลือกสาขาที่ต้องการสั่งซื้อ</label>
                  <select
                    type="text"
                    onChange={(e) => setRegionSe(e.target.value)}
                  >
                    <option>กดเพื่อเลือกภูมิภาค</option>
                    {RegionArr.map((region, i) => (
                      <option value={region.region} key={i}>
                        {region.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="number_con">
                <div className="number">
                  <h2>2</h2>
                </div>
                <div className="form">
                  <label>ใส่จำนวนที่ต้องการ</label>
                  <div className="input_control">
                    <button
                      className="btn__number"
                      onClick={() => setAmount((amount) => amount * 1 - 1)}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={amount}
                      pattern="[0-9]*"
                      onChange={(e) => setAmount(e.target.value)}
                    />
                    <button
                      className="btn__number"
                      onClick={() => setAmount((amount) => amount * 1 + 1)}
                    >
                      +
                    </button>
                    <div className="btn_search">
                      <button onClick={handleChangeRegion}>ค้นหา</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="model_table_mo">
                {twdstore.length > 0 ? (
                  twdstore.map((item, i) => (
                    <div className="box__item_mo" key={i}>
                      <ul>
                        <li className="img">
                          <img src={TWDLogo} alt="imgLogo" />
                        </li>
                        <li className="store__mo">
                          <div className="store__box_mo">
                            <h4>{item.store_name}</h4>
                            <p>
                              <SlPhone
                                size={15}
                                style={{ marginRight: "10px" }}
                              />
                              1308
                            </p>
                            <p>
                              <FiMap style={{ marginRight: "10px" }} />
                              {item.distance
                                ? `${item.distance} กม.`
                                : "ไม่ระบุ"}
                            </p>
                          </div>
                          <div className="store__box_mo">
                            <div className="box__status_mo">
                              <h4
                                style={{
                                  color:
                                    item.quantity_remain === 0
                                      ? "gray"
                                      : amount > item.quantity_remain
                                      ? "#F0D435"
                                      : "green",
                                }}
                              >
                                {item.lead_time === "" ? (
                                  <>
                                    {item.quantity_remain === 0
                                      ? "สินค้าหมดชั่วคราว"
                                      : amount > item.quantity_remain
                                      ? `สินค้าไม่พอ`
                                      : "สินค้าพร้อมส่ง"}
                                  </>
                                ) : (
                                  <>สินค้ามีไม่เพียงพอ</>
                                )}
                              </h4>
                              <p>
                                {item.lead_time === "" ? (
                                  <>
                                    {item.quantity_remain === 0
                                      ? "สินค้าหมดชั่วคราว"
                                      : amount > item.quantity_remain
                                      ? `มีสินค้าพร้อมจัดส่ง จำนวน ${item.quantity_remain} ชิ้น `
                                      : "สินค้าพร้อมส่ง"}
                                  </>
                                ) : (
                                  <>
                                    มีสินค้าจำนวน {item.quantity_remain} ชิ้น
                                    จะใช้เวลาจัดเตรียม {item.lead_time} วัน
                                  </>
                                )}
                              </p>
                              <span>{item.price_list}</span>
                              <h5>
                                <b style={{ color: "red" }}>
                                  ฿ {item.sale_price}
                                </b>{" "}
                                /ชิ้น
                              </h5>
                            </div>
                          </div>
                        </li>
                        <li>
                          {item.lead_time === "" ? (
                            <>
                              {item.quantity_remain === 0 ? (
                                <></>
                              ) : (
                                <>
                                  <button
                                    className="sell_mo"
                                    onClick={() => {
                                      setLeadtime(false);
                                      AddCartInModel(
                                        item.store_id,
                                        item.store_name,
                                        item.quantity_remain,
                                        item.lead_time
                                      );
                                    }}
                                  >
                                    เลือกสาขานี้
                                  </button>
                                </>
                              )}
                            </>
                          ) : (
                            <>
                              <button
                                className="sell_mo"
                                onClick={() => {
                                  setLeadtime(true);
                                  AddCartInModel(
                                    item.store_id,
                                    item.store_name,
                                    item.quantity_remain,
                                    item.lead_time
                                  );
                                }}
                              >
                                เลือกสาขานี้
                              </button>
                            </>
                          )}
                        </li>
                      </ul>
                      <a onClick={closeModal} className="modal__close_mo">
                        <p
                          style={{
                            marginBottom: "3px",
                          }}
                        >
                          x
                        </p>
                      </a>
                    </div>
                  ))
                ) : (
                  <Empty
                    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                    imageStyle={{ height: 60 }}
                    description={<span>ค้นหาร้านค้า</span>}
                  />
                )}

                {/* {twdstore.length > 0 ? (
                twdstore.map((item, i) => (
                  <div key={i}>
                    <hr />
                    <div className="box__item">
                      <ul>
                        <li className="img">
                          <img src={TWDLogo} alt="imgLogo" />
                        </li>
                        <li className="store__">
                          <div className="store__box">
                            <h4>{item.store_name}</h4>
                            <p>
                              <SlPhone
                                size={15}
                                style={{ marginRight: "10px" }}
                              />
                              1308
                            </p>
                            <p>
                              <FiMap style={{ marginRight: "10px" }} />
                              {item.distance
                                ? `${item.distance} กม.`
                                : "ไม่ระบุ"}
                            </p>
                          </div>
                          <div className="store__box">
                            <div className="box__status">
                              <h4
                                style={{
                                  color:
                                    item.quantity_remain === 0
                                      ? "gray"
                                      : amount > item.quantity_remain
                                      ? "#F0D435"
                                      : "green",
                                }}
                              >
                                {item.quantity_remain === 0
                                  ? "สินค้าหมดชั่วคราว"
                                  : amount > item.quantity_remain
                                  ? `สินค้าไม่พอ`
                                  : "สินค้าพร้อมส่ง"}
                              </h4>
                              <p>
                                {item.quantity_remain === 0
                                  ? "สินค้าหมดชั่วคราว"
                                  : amount > item.quantity_remain
                                  ? `มีสินค้าพร้อมจัดส่ง จำนวน ${item.quantity_remain} ชิ้น และจะใช้เวลาจัดเตรียม 7 วัน`
                                  : "สินค้าพร้อมส่ง"}
                              </p>
                              <span>246</span>
                              <h5>
                                <b style={{ color: "red" }}>
                                  ฿ {item.sale_price}
                                </b>{" "}
                                /ชิ้น
                              </h5>
                            </div>
                          </div>
                        </li>
                        <li>
                          <button
                            className="sell"
                            style={{ width: "110px", marginLeft: "18px" }}
                            onClick={() =>
                              AddCartInModel(item.store_id, item.store_name)
                            }
                          >
                            เลือกสาขานี้
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))
              ) : (
                <Empty
                  image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                  imageStyle={{
                    height: 60,
                  }}
                  description={
                    <span>
                      ไม่มี <a>สาขาใกล้คุณ</a>
                    </span>
                  }
                />
              )} */}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ProductDetail;
