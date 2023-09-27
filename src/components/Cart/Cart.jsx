import React, { useState, useEffect } from "react";
import "./scss/Cart.scss";
import { Link } from "react-router-dom";
import { RiDeleteBinFill } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import TWD from "./img/Logo TWD.png";
import ImgLogoNNN from "./img/logonnn.png";
import ImgLogotwd from "./img/logotwd.png";
import axios from "axios";
import Swal from "sweetalert2";
import ModelLocation from "../ModelLocation/ModelLocation";
import { api, ApiRouter } from "../../api/MainApi";
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
import { Button, Skeleton, Space } from "antd";
import NavbarComponent from "../Navbar/NavbarComponent";
import { Empty, message } from "antd";
import { SlPhone } from "react-icons/sl";
import { FiMap } from "react-icons/fi";
import TWDLogo from "./img/download.png";

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

function Cart() {
  localStorage.removeItem("sell");
  const [modal, setModal] = useState(false);
  const [sumCart, setSumCart] = useState(0);
  const [arrCart, setArrCart] = useState([]);

  const [products, setProduct] = useState([]);

  const [store_name, setStore_name] = useState("");
  const [billnnn, setBillnnn] = useState(0);
  const [billtwd, setBilltwd] = useState(0);
  const [amount, setAmount] = useState(0);

  const [loading, setLoading] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const [regionSe, setRegionSe] = useState("");
  const [region, setRegion] = useState("");
  const [storeTwd, setStoreTwd] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();

  const [btnsellTwd, setBtnsellTwd] = useState(false);

  const [mobile, setMobile] = useState(false);

  const [amountProd, setAmountProd] = useState(0);
  const [amountSaleProd, setAmountSaleProd] = useState(0);

  const [location, setLocation] = useState({});
  const [twdstore, setTwdstore] = useState([]);
  const [inHouse, setInHouse] = useState([]);
  const [leadtime, setLeadtime] = useState(false);

  const openModal = () => {
    const Cart = localStorage.getItem("arrCart");
    const arrCart = JSON.parse(Cart);

    if (!arrCart) {
      Swal.fire({
        title: "กรุณาเลือกสินค้าก่อน",
        showConfirmButton: true,
      });
      return;
    }
    setModal(true);
  };
  const closeModal = () => setModal(false);

  useEffect(() => {
    const Cart = localStorage.getItem("arrCart");
    const arrCart = JSON.parse(Cart);

    if (!arrCart) {
      setBtnsellTwd(true);
    }

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
    const getdata = async () => {
      setLoading(true);
      const getStore = localStorage.getItem("Store");
      setStore_name(getStore);
      const Cart = localStorage.getItem("arrCart")
        ? JSON.parse(localStorage.getItem("arrCart"))
        : [];

      const sum = Cart.reduce((acc, cur) => {
        return acc + cur.quantity;
      }, 0);
      setSumCart(sum);
      let ShowDeatail = [];
      var sumPrice = 0;
      var sumSalePrice = 0;
      var prodCode = [];

      for (let i = 0; i < Cart.length; i++) {
        var price = 0;
        var pdPrice = 0;
        if (prodCode.includes(Cart[i]['product_code'])) {
          continue
        }

        prodCode.push(Cart[i]['product_code']);
        pdPrice = parseFloat(Cart[i]['pd_price']) * parseInt(Cart[i]['quantity']);

        if (typeof Cart[i]['sale_price'] != 'undefined') {
          price = parseFloat(Cart[i]['sale_price']) * parseInt(Cart[i]['quantity']);
        } else {
          price = parseFloat(Cart[i]['pd_price']) * parseInt(Cart[i]['quantity']);
        }

        sumSalePrice = sumSalePrice + price;
        sumPrice = sumPrice + pdPrice;

        for (let x = 0; x < ColorArr.length; x++) {
          if (Cart[i].color === ColorArr[x].id) {
            Cart[i].color = ColorArr[x].color;
            Cart[i].img = ColorArr[x].img;
          }
        }
        ShowDeatail.push(Cart[i]);
      }

      setAmountProd(sumPrice);
      setAmountSaleProd(sumSalePrice);

      let imageName = [];
      ShowDeatail.map((item) => {
        imageName.push(item.pb_picture);
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
      const dataDetail = ShowDeatail.map((item, index) => {

        return {
          ...item,
          image: images[index],
        };
      });
      setArrCart(dataDetail);
      let sumordernnn = [];

      dataDetail.forEach((item) => {
        let sumorder = parseInt(item.pd_price) * item.quantity;
        sumordernnn.push({
          price_nnn: sumorder,
        });
      });
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    const reload = localStorage.getItem("reload");
    if (reload === "1") {
      console.log(reload);
      localStorage.removeItem("reload");

      UpdateCart();
    }
    getdata();
    setIsSubmit(false);
  }, [isSubmit]);

  const pushProduct = async (product_code) => {
    const Cart = localStorage.getItem("arrCart");
    const arrCart = JSON.parse(Cart);
    for (let i = 0; i < arrCart.length; i++) {
      if (arrCart[i].product_code === product_code) {
        let sum = parseInt(arrCart[i].quantity) + 1;
        arrCart[i].quantity = sum;
      }
    }
    localStorage.setItem("arrCart", JSON.stringify(arrCart));
    // Swal.fire({
    //   icon: "warning",
    //   title: "กำลังคำนวนราคาสินค้า",
    //   showConfirmButton: false,
    //   timer: 1500,
    // });
    isSubmit ? setIsSubmit(false) : setIsSubmit(true);
    for (let i = 0; i < products.length; i++) {
      if (products[i].product_code === product_code) {
        let sum = parseInt(products[i].quantity) + 1;
        products[i].quantity = sum;
      }
    }
    setProduct(products);
    setBtnsellTwd(false);
    // setProduct(products)
  };

  const reduceProduct = async (product_code) => {
    const Cart = localStorage.getItem("arrCart");
    const arrCart = JSON.parse(Cart);
    for (let i = 0; i < arrCart.length; i++) {
      if (arrCart[i].product_code === product_code) {
        if (arrCart[i].quantity === 1) {
          Swal.fire({
            icon: "error",
            title: "ไม่สามารถลดจำนวนสินค้าได้",
            showConfirmButton: false,
            timer: 1500,
          });
          return;
        }
        arrCart[i].quantity -= 1;
      }
    }
    localStorage.setItem("arrCart", JSON.stringify(arrCart));
    // Swal.fire({
    //   position: "top-end",
    //   icon: "warning",
    //   title: "กำลังคำนวนราคาสินค้า",
    //   showConfirmButton: false,
    //   timer: 1500,
    // });
    isSubmit ? setIsSubmit(false) : setIsSubmit(true);
    setBtnsellTwd(false);
  };

  const removeProduct = async (product_code) => {
    Swal.fire({
      text: "คุณต้องการลบสินค้ารายการนี้ออกจากรถเข็นหรือไม่",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ใช่",
      cancelButtonText: "ไม่ลบ",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("", "ลบสินค้านี้ออก จากตะกร้าเรียบร้อย", "success");
        const Cart = localStorage.getItem("arrCart");
        const arrCart = JSON.parse(Cart);
        for (let i = 0; i < arrCart.length; i++) {
          if (arrCart[i].product_code === product_code) {
            arrCart.splice(i, 1);
          }
        }
        if (arrCart.length === 0) {
          localStorage.removeItem("arrCart");
        } else {
          localStorage.setItem("arrCart", JSON.stringify(arrCart));
        }
      } else {
      }
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    });
  };

  const fecthData = async () => {
    const Cart = localStorage.getItem("arrCart");
    const arrCart = JSON.parse(Cart);
    await axios
      .post(server.API_GET_MYCART, { product: arrCart }, Apikey)
      .then((res) => {
        setStore_name(res.data.data[0].store_name);
        const nnn = res.data.datatriple;
        const thaiwat = res.data.data;
        let mergedArr = [...arrCart, ...nnn, ...thaiwat].reduce((acc, obj) => {
          if (acc[obj.product_code]) {
            // เพิ่ม key ใหม่เข้าไปใน Object ที่มี product_code เดียวกัน
            acc[obj.product_code] = { ...acc[obj.product_code], ...obj };
          } else {
            // สร้าง Object ใหม่โดยใช้ product_code เป็น key
            acc[obj.product_code] = { ...obj };
          }
          return acc;
        }, {});
        // แปลง Object ชั่วคราวกลับเป็น Array
        mergedArr = Object.values(mergedArr);

        setProduct(mergedArr);
        // localStorage.setItem("arrCart2", JSON.stringify(mergedArr));

        let sumArr = [];
        mergedArr.forEach((element) => {
          sumArr.push({
            price_nnn:
              parseInt(element.pd_discount) * parseInt(element.quantity),
            sale_price: element.sale_price
              ? parseInt(element.pd_discount) * parseInt(element.quantity) -
                parseInt(element.sale_price) * parseInt(element.quantity)
              : 0,
          });
        });

        let checkbillnnn = sumArr.reduce((acc, obj) => acc + obj.price_nnn, 0);
        let checkbillthai = sumArr.reduce(
          (acc, obj) => acc + obj.sale_price,
          0
        );

        // console.log(checkbillnnn);

        setBillnnn(checkbillnnn);
        setBilltwd(checkbillthai);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const UpdateCart = async () => {
    const Cart = localStorage.getItem("arrCart");
    const arrCart = JSON.parse(Cart);
    let Product = [];
    for (let i = 0; i < arrCart.length; i++) {
      Product.push({
        store_id: arrCart[i].store_id,
        product_code: arrCart[i].product_code,
        quantity: arrCart[i].quantity,
      });
    }
    const res = await api.post(ApiRouter.api_port_product, {
      product: Product,
    });
    console.log(res.data.data);
    for (let i = 0; i < res.data.data.length; i++) {
      for (let j = 0; j < arrCart.length; j++) {
        if (res.data.data[i].product_code === arrCart[j].product_code) {
          arrCart[j].quantity_remain = res.data.data[i].quantity_remain;
          arrCart[j].sale_price = res.data.data[i].sale_price;
          arrCart[j].lead_time = res.data.data[i].lead_time;
        }
      }
    }
    localStorage.setItem("arrCart", JSON.stringify(arrCart));
    let checkbillnnn = arrCart.reduce(
      (acc, obj) => acc + parseInt(obj.pd_price) * parseInt(obj.quantity),
      0
    );
    let checkbillthai = arrCart.reduce(
      (acc, obj) => acc + parseInt(obj.sale_price) * parseInt(obj.quantity),
      0
    );

    setBillnnn(checkbillnnn);
    setBilltwd(checkbillnnn - checkbillthai);
    setIsSubmit(true);
    setBtnsellTwd(true);
  };

  const backTohome = () => {
    window.location.href = "/category/สินค้าทั้งหมด";
  };

  const CleanCart = async () => {
    await localStorage.removeItem("arrCart");
    setIsSubmit(true);
  };

  const handleChangeRegion = () => {
    changeRegion();
  };

  const changeRegion = async (e) => {
    setTwdstore([]);
    let body = {
      product_code: arrCart[0].product_code,
      quantity: arrCart[0].quantity,
      region: regionSe,
      color: arrCart[0].color,
      size: arrCart[0].pd_length,
      // pd_type: products[0].pd_type,
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

  const AddCartInModel = async () => {
    let body = {
      product_code: arrCart[0].product_code,
      quantity: arrCart[0].quantity,
      color: arrCart[0].color,
      size: arrCart[0].pd_length,
      latitude: location.latitude,
      longitude: location.longitude,
    };

    const res = await api.post(ApiRouter.api_get_location, body);
    console.log(res.data.data);

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
      // error({ content: "สินค้าไม่มีในร้านใกล้เคียง" });
    }
    setModal(true);
  }

  const handleCheckout = async (store_id, store_name) => {
    console.log(ApiRouter);
    const Cart = localStorage.getItem("arrCart")
      ? JSON.parse(localStorage.getItem("arrCart"))
      : [];
    const sum = Cart.reduce((acc, cur) => {
      return acc + cur.quantity;
    }, 0);
    // const store_id = localStorage.getItem("StoreId");
    if (sum === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "กรุณาเลือกสินค้า",
      });
    } else {
      await api
        .post(ApiRouter.api_seller, {
          product: Cart,
          store_id: store_id,
        })
        .then((res) => {
          localStorage.removeItem("arrCart");
          // localStorage.removeItem("Store");
          // localStorage.removeItem("StoreId");
          window.open(`${res.data.data.url}`, "_blank");
          window.location.href = "/category/สินค้าทั้งหมด";
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const handleCheckoutMo = async () => {
    const Cart = localStorage.getItem("arrCart")
      ? JSON.parse(localStorage.getItem("arrCart"))
      : [];
    const sum = Cart.reduce((acc, cur) => {
      return acc + cur.quantity;
    }, 0);
    const store_id = localStorage.getItem("StoreId");
    if (sum === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "กรุณาเลือกสินค้า",
      });
    } else {
      await api
        .post(ApiRouter.api_seller, {
          product: Cart,
          store_id: store_id,
        })
        .then((res) => {
          localStorage.removeItem("arrCart");
          localStorage.removeItem("Store");
          localStorage.removeItem("StoreId");
          window.location.href = `${res.data.data.url}`;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const onSearch = async () => {
    // console.log(regionSe);
    const Cart = localStorage.getItem("arrCart");
    const arrCart = JSON.parse(Cart);

    if (!arrCart) {
      error({ content: "กรุณาเลือกสินค้าก่อน" });
      return;
    }

    await api
      .post(ApiRouter.api_change_location, {
        product_code: arrCart[0].product_code,
        region: regionSe,
        quantity: arrCart[0].quantity,
      })
      .then((res) => {
        console.log(res.data.data);
        setStoreTwd(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSelect = (store_name, store_id, lead_time) => {
    localStorage.setItem("Store", store_name);
    localStorage.setItem("StoreId", store_id);
    const Cart = localStorage.getItem("arrCart");
    const arrCart = JSON.parse(Cart);
    for (let i = 0; i < arrCart.length; i++) {
      arrCart[i].store_id = store_id;
      arrCart[i].lead_time = lead_time;
    }
    localStorage.setItem("arrCart", JSON.stringify(arrCart));

    success({ message: store_name });
    setModal(false);
  };

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

  const handleRegion = async () => {
    setStoreTwd([]);
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
    setStoreTwd(res.data.data);
  };

  return (
    <>
      {contextHolder}
      <div className="cart">
        <div className="cart-container">
          <div className="cart-left">
            <div className="cart-head">
              <h2>รถเข็นของฉัน</h2>
              <p>({sumCart} รายการ)</p>
            </div>

            {arrCart.length > 0 ? (
              arrCart.map((product, i) => (
                <Skeleton
                  loading={loading}
                  key={i}
                  style={{
                    margin: "0 auto",
                    marginTop: "50px",
                  }}
                >
                  <div className="cart-item" key={i}>
                    <div className="cart-item-body">
                      <div className="cart-item-checkbox">
                        <input type="checkbox" />
                      </div>
                      <div className="cart-item-img">
                        <Link to={`/productdetail/${product.product_code}`}>
                          <img
                            src={product.image}
                            style={{ width: "100%", height: "100%" }}
                            alt="img"
                          />
                        </Link>
                      </div>
                      <div className="cart-item-detail">
                        <div className="d_con">
                          <div className="title_con">
                            <div className="product_grop">
                              <h4>
                                {product.pd_name}
                              </h4>
                            </div>
                          </div>
                          <hr />
                          <div className="cart-item-price">
                            <div style={{color: "#9e9e9ecc"}}>
                              <span>สี: </span>
                              <span>
                                {product.color}
                              </span>
                            </div>
                            <div style={{color: "#9e9e9ecc"}}>
                              <span>ความยาว: </span>
                              <span>
                                {product.pd_length}
                              </span>
                            </div>
                            <div>
                              <span
                                style={{
                                  color: "red"
                                }}>
                                ฿ {" "}
                                {parseInt(
                                  product.sale_price ? product.sale_price : product.pd_price
                                ).toLocaleString()}
                              </span>
                              <span
                                style={{
                                  color: "#9e9e9ecc",
                                  marginLeft: "20px",
                                  textDecoration: "line-through"
                                }}>
                                ฿{" "}
                                {parseInt(
                                  product.sale_price ? product.pd_price : "0"
                                ).toLocaleString()}
                              </span>
                            </div>

                            <div className="pr_de">
                              <p></p>
                              <div className="pr_de_p">
                                <div className="number_input">
                                  <button
                                    className="btn-rm"
                                    onClick={() =>
                                      reduceProduct(product.product_code)
                                    }
                                  >
                                    -
                                  </button>
                                  <input
                                    type="text"
                                    value={product.quantity}
                                    onChange={(e) => {}}
                                    disabled
                                  />
                                  <button
                                    className="btn-add"
                                    onClick={() =>
                                      pushProduct(product.product_code)
                                    }
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sum-price">
                        ฿ {" "}
                          {parseInt(
                            product.sale_price ? product.sale_price * product.quantity : product.pd_price * product.quantity
                          ).toLocaleString()}
                      </div>
                      <div className="delete-product">
                        <RiDeleteBinFill
                          size={24}
                          style={{ cursor: "pointer", marginTop: "5px", color: "red" }}
                          onClick={() =>
                            removeProduct(product.product_code)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </Skeleton>
              ))
            ) : (
              <Empty
                image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                imageStyle={{ height: 60 }}
                description={<span>ท่านยังไม่ได้สั่งซื้อสิ้นค้า</span>}
              />
            )}
            {/* <div className="end_cart">
              <Link to="/checkout" onClick={CleanCart}>
                ล้างตะกร้า
              </Link>
              <div>
                <button
                  onClick={backTohome}
                  style={{
                    marginRight: "10px",
                  }}
                >
                  เลือกซื้อสินค้าต่อ
                </button>
                {btnsellTwd === true ? (
                  <>
                    <button
                      className="update_cart"
                      style={{
                        backgroundColor: "#e5e5e5",
                        color: "#fff",
                        cursor: "not-allowed",
                        border: "none",
                      }}
                      disabled
                    >
                      อัพเดตสินค้า
                    </button>
                  </>
                ) : (
                  <>
                    <button className="update_cart" onClick={UpdateCart}>
                      อัพเดตสินค้า
                    </button>
                  </>
                )}
              </div>
            </div> */}
          </div>
          <div className="cart-right">
            <div className="cart-right-body">
              <div className="cart-right-title">
                <h3>เลือกซื้อสินค้ากับ Triple N Cable</h3>
              </div>
              <div className="cart-right-detail">
                <div className="con-price">
                  <div className="c_price">
                  <h4>สรุปคำสั่งซื้อ</h4>
                    <p style={{fontSize: "14px", color: "rgba(158, 158, 158, 0.8)"}}>
                      ({sumCart} รายการ)
                    </p>
                  </div>
                  <div className="c_price" style={{marginTop: "12px"}}>
                    <p>ราคา</p>
                    <p>
                      {" "}
                      {loading ? (
                        <Skeleton.Input loading={loading} active />
                      ) : (
                        <>฿ {amountSaleProd.toLocaleString()}</>
                      )}
                    </p>
                  </div>

                  <div className="c_price" style={{marginTop: "12px"}}>
                    <p>คำจัดส่ง </p>
                    <p>
                      {" "}
                      {loading ? (
                        <Skeleton.Input loading={loading} active />
                      ) : (
                        <>ฟรี</>
                      )}
                    </p>
                  </div>
                  <hr />
                  <div className="c_price">
                    <h4>ยอดรวมสุทธิ :</h4>
                    <h4 style={{color: "#00b400"}}>
                      {" "}
                      {loading ? (
                        <Skeleton.Input loading={loading} active />
                      ) : (
                        <>฿ {amountSaleProd.toLocaleString()}</>
                      )}
                    </h4>
                  </div>
                  <div className="c_price" style={{marginBottom: "15px"}}>
                    <span style={{fontSize: "12px", marginTop: "3px"}}>(ราคานี้รวมภาษีมูลค่าเพิ่มแล้ว)</span>
                    <span
                      style={{
                        color: "#9e9e9ecc",
                        marginLeft: "20px",
                        textDecoration: "line-through"
                      }}
                    >
                      {" "}
                      {loading ? (
                        <Skeleton.Input loading={loading} active />
                      ) : (
                        <>฿ {amountProd.toLocaleString()}</>
                      )}
                    </span>
                  </div>
                </div>
                {loading ? (
                  <></>
                ) : (
                  <>
                    <div className="btn-send">
                    <a href={`/address`}>
                      {/* <button onClick={AddCartInModel}> */}
                      <button>
                        ชำระเงิน
                      </button>
                    </a>
                    </div>
                    <div className="btn-quotation">
                      <button>
                        ใบเสนอราคา
                      </button>
                    </div>
                    <div className="btn-next-prod">
                      <button>
                        เลือกสินค้าต่อ
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          <div className="d-or">
            หรือ
          </div>




          <div className="cart-right-buttom-body">
              <div className="cart-right-title-th">
                <h3>เลือกซื้อสินค้ากับ ไทวัสดุ</h3>
              </div>
              <div className="cart-right-detail">
                <div className="con-price">
                  <div className="c_price">
                  <h4>สรุปคำสั่งซื้อ</h4>
                    <p style={{fontSize: "14px", color: "rgba(158, 158, 158, 0.8)"}}>
                      ({sumCart} รายการ)
                    </p>
                  </div>
                  <div className="c_price" style={{marginTop: "12px"}}>
                    <p>ราคา</p>
                    <p>
                      {" "}
                      {loading ? (
                        <Skeleton.Input loading={loading} active />
                      ) : (
                        <>฿ {billnnn.toLocaleString()}</>
                      )}
                    </p>
                  </div>

                  <div className="c_price" style={{marginTop: "12px"}}>
                    <p>คำจัดส่ง </p>
                    <p>
                      {" "}
                      {loading ? (
                        <Skeleton.Input loading={loading} active />
                      ) : (
                        <>ฟรี</>
                      )}
                    </p>
                  </div>
                  <hr />
                  <div className="c_price">
                    <h4>ยอดรวมสุทธิ :</h4>
                    <h4 style={{color: "#00b400"}}>
                      {" "}
                      {loading ? (
                        <Skeleton.Input loading={loading} active />
                      ) : (
                        <>฿ {(billnnn - billtwd).toLocaleString()}</>
                      )}
                    </h4>
                  </div>
                  <div className="c_price" style={{marginBottom: "15px"}}>
                    <span style={{fontSize: "12px", marginTop: "3px"}}>(ราคานี้รวมภาษีมูลค่าเพิ่มแล้ว)</span>
                    <span
                      style={{
                        color: "#9e9e9ecc",
                        marginLeft: "20px",
                        textDecoration: "line-through"
                      }}
                    >
                      {" "}
                      {loading ? (
                        <Skeleton.Input loading={loading} active />
                      ) : (
                        <>฿ 0</>
                      )}
                    </span>
                  </div>
                </div>
                {loading ? (
                  <></>
                ) : (
                  <>
                    <div className="btn-send-th">
                      <button onClick={AddCartInModel}>
                        ชำระเงิน
                      </button>
                    </div>
                    <div className="btn-quotation-th">
                      <button>
                        ใบเสนอราคา
                      </button>
                    </div>
                    <div className="btn-next-prod">
                      <button>
                        เลือกสินค้าต่อ
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="moblie-mode">
        <div className="modlie-con">
          <div className="modlie-con-title">
            <h3>สินค้าในรถเข็นของคุณ: ({sumCart} ชิ้น)</h3>
          </div>
          <div className="moblie-cart">
            <h3>
              สาขา : <b style={{ color: "red" }}>ไทวัสดุ {store_name}</b>{" "}
              <Link to="/">(เปลี่ยน)</Link>
            </h3>
            <h3>รายการสิ้นค้า</h3>
            <div className="modlie_detail">
              {arrCart.length > 0 ? (
                arrCart.map((product, i) => (
                  <>
                    <div className="moblie-img" key={i}>
                      <img src={product.image} alt="product" />
                      <div className="detail">
                        <h3>
                          {product.pd_name.split(" ")[0] +
                            " " +
                            product.pd_name.split(" ")[3] +
                            " " +
                            product.pd_name.split(" ")[4] +
                            " " +
                            product.pd_name.split(" ")[5]}
                        </h3>
                        <p>รหัสสินค้า : {product.sku}</p>
                        <p>สี : {product.color}</p>
                        <p>ขนาด : {product.pd_length}</p>
                        <p>ราคา : {product.pd_price}</p>
                        <p>ราคาไทยวัสดุ : {product.sale_price}</p>
                      </div>
                      <div className="amount">
                        <div className="amount-con">
                          <button
                            className="btn-add"
                            onClick={() => addAmount(product.product_code)}
                          >
                            +
                          </button>
                          <input
                            type="text"
                            value={product.quantity}
                            onChange={(e) => {}}
                            disabled
                          />
                          <button
                            className="btn-rm"
                            onClick={() => removeAmount(product.product_code)}
                          >
                            -
                          </button>
                        </div>
                      </div>
                      <RiDeleteBinFill
                        size={24}
                        style={{ cursor: "pointer", color: "red" }}
                        onClick={() => removeProduct(product.product_code)}
                      />
                    </div>
                  </>
                ))
              ) : (
                <>
                  <Empty
                    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                    imageStyle={{ height: 60 }}
                    description={<span>ท่านยังไม่ได้สั่งซื้อสิ้นค้า</span>}
                  />
                </>
              )}
              <div className="moblie-end">
                <Link to="/checkout" onClick={CleanCart}>
                  ล้างตะกร้า
                </Link>
                <button onClick={backTohome}>เลือกซื้อสินค้าต่อ</button>
                <button onClick={UpdateCart}>อัพเดตสินค้า</button>
              </div>
              <div className="mobile-summary">
                <h3>
                  คุ้มกว่า สะดวกกว่า จะรับเองหรือส่งถึงบ้านก็ได้
                  เมื่อซื้อสายไฟทริปเปิ้ลเอ็นที่ไทวัสดุ
                </h3>
                <div className="picture">
                  <img src={ImgLogoNNN} alt="nnn" />
                  <img src={ImgLogotwd} alt="nnn" />
                </div>
                <div className="mobile-price">
                  <div className="mc_price">
                    <p>ราคารวมสินค้า :</p>
                    <p>฿ {billnnn.toLocaleString()}</p>
                  </div>
                  <div className="mc_price">
                    <p>ส่วนลดจากไทวัสดุ :</p>
                    <p>฿ {billtwd.toLocaleString()}</p>
                  </div>
                  <div className="mc_price">
                    <p>ยอดรวมสุทธิ :</p>
                    <p>฿ {(billnnn - billtwd).toLocaleString()}</p>
                  </div>
                  <div className="mc_price">
                    {btnsellTwd === true ? (
                      <>
                        <button onClick={handleCheckoutMo}>
                          สั่งซื้อและชำระเงินที่ไทวัสดุ
                        </button>
                      </>
                    ) : (
                      <>
                        <button onClick={handleCheckoutMo}>
                          สั่งซื้อและชำระเงินที่ไทวัสดุ
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                                          handleCheckout(
                                            item.store_id,
                                            item.store_name
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
                                      handleCheckout
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
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Cart;
