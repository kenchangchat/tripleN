import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./scss/model.scss";
import { IoLocationOutline } from "react-icons/io5";
import axios from "axios";
import Swal from "sweetalert2";
import ICONTWD from "./img/download.png";
import { SlPhone } from "react-icons/sl";
import { FiMap } from "react-icons/fi";
import { api, ApiRouter } from "../../api/MainApi";
import { Empty, message } from "antd";

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

function ModelLocation() {
  const [modal, setModal] = useState(false);
  const [regionSe, setRegionSe] = useState("");
  const [region, setRegion] = useState("");
  const [storeTwd, setStoreTwd] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

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
    const res = await axios.post(server.API_POST_PRODUCT_BODY, body, Apikey);
    if (res.data.data.length === 0) {
      Swal.fire({
        icon: "error",
        title: "ไม่พบสินค้าในร้านใกล้เคียง",
        text: "กรุณาเลือกภูมิภาคของท่าน",
      });
    }
    setTwdstore(res.data.data);
  };

  const onSearch = async () => {
    console.log(regionSe);
    const Cart = localStorage.getItem("arrCart");
    const arrCart = JSON.parse(Cart);

    await api
      .post(ApiRouter.api_change_location, {
        product_code: arrCart[0].product_code,
        region: regionSe,
        quantity: arrCart[0].quantity,
      })
      .then((res) => {
        setStoreTwd(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSelect = (store_name, store_id) => {
    localStorage.setItem("Store", store_name);
    localStorage.setItem("StoreId", store_id);
    success();
    setTimeout(() => {
      isSubmit(true);
    }, 1000);
    setModal(false);
  };

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
  };

  

  return (
    <>
      {contextHolder}
      <Link to="/checkout" onClick={openModal}>
        (เปลี่ยน)
      </Link>
      {modal && (
        <>
          <div className="modal">
            <div className="modal_location">
              <div className="model_loc_title">
                <h3>เลือกสาขาที่ต้องการ</h3>
              </div>
              <div className="model_loc_body">
                <div className="model_loc_form">
                  <label>ค้นหาสาขาตามภูมิภาค</label>
                  <div className="form-control">
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
                    <button onClick={onSearch}>ค้นหา</button>
                  </div>
                </div>
                <div className="model_loc_form">
                  <label>หรือ ค้นหาสาขาใกล้ฉัน</label>
                  <div className="input_model">
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

              <div className="model__table__loc">
                <div className="model_table_sloc">
                  <div>
                    {storeTwd.length > 0 ? (
                      storeTwd.map((store, i) => (
                        <>
                          <hr />
                          <div className="body_model_table" key={i}>
                            <div className="logo">
                              <img src={ICONTWD} alt="logo" />
                            </div>
                            <div className="text_table">
                              <h3>สาขา {store.store_name}</h3>
                              <p>
                                <SlPhone
                                  size={15}
                                  style={{ marginRight: "10px" }}
                                />
                                1308
                              </p>
                              <p>
                                <FiMap style={{ marginRight: "10px" }} />
                                {store.province_th}
                              </p>
                            </div>
                            <div className="btn_select">
                              <button
                                className="sell_text"
                                onClick={() =>
                                  onSelect(store.store_name, store.store_id)
                                }
                              >
                                เลือกสาขา
                              </button>
                            </div>
                          </div>
                        </>
                      ))
                    ) : (
                      <Empty
                        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                        imageStyle={{ height: 60 }}
                        description={
                          <span>
                            โปรดเลือกภูมิภาค หรือ ค้นหาสาขาใกล้ฉัน
                          </span>
                        }
                      />
                    )}
                  </div>
                </div>
              </div>

              <a onClick={closeModal} className="modal_locclose">
                <p>x</p>
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ModelLocation;
