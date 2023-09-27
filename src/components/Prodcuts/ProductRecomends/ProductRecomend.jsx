import React, { useState, useEffect } from "react";
import "./scss/ProductRecomend.scss";
import { Link } from "react-router-dom";
import LoadingComponent from "../../Loadings/LoadingComponent";
import { api, ApiRouter } from "../../../api/MainApi";

function ProductRecomend() {
  const [productRec, setProductRec] = useState([]);

  useEffect(() => {
    const fecthData = async () => {
      const response = await api.get(ApiRouter.api_get_product_recomend);
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
      setProductRec(data);
    };
    fecthData();
  }, []);

  return (
    <>
      <div className="product_recomend">
        <div className="productrec__container">
          <div className="product__title">
            <h2>สายไฟที่เราแนะนำ</h2>
          </div>
          <div className="productrec__card">
            {productRec.length > 0 ? (
              <>
                {productRec.map((item, i) => (
                  <div className="productrec__card__body" key={i}>
                    <div className="rec__span">
                      <span>33%</span>
                    </div>
                    <div className="rec__img">
                      <img src={item.pd_picture} alt="rec" />
                    </div>
                    <div className="rec__title">
                      <h3>
                        {item.pd_name}
                      </h3>
                    </div>
                    <div className="rec__des">
                      <p>{item.pd_detail.substring(0, 80) + "..."}</p>
                    </div>
                    <div className="rec__price">
                      <span>
                        {item.pd_length == "ตัดเมตร" ? "เมตรละ" : "ม้วนละ"}{" "}
                        <u> {item.pd_price}</u>
                      </span>
                      <p>
                        <b>฿ {item.pd_discount}</b>
                      </p>
                    </div>
                    <div className="rec__btn">
                      <Link to={`/productdetail/${item.barcode}`}>
                        ดูรายละเอียดเพิ่มเติม
                      </Link>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div
                style={{ display: "flex", width: "70vw", marginLeft: "20px" }}
              >
                <LoadingComponent />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductRecomend;
