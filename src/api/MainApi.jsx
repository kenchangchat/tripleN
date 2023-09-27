

import axios from "axios";

export const api = axios.create({
  // baseURL: "http://localhost:3001/api",
  baseURL: "https://api-prd.veninecorp.com/api",
  auth: {
    username: "ApiKey",
    password: "hup91P^EveCq001ba@7aR6qOan5KWmH#96NW",
  }
});

export const ApiRouter = {
  // สำหรับดึงรูปภาพ
  api_get_image: "/images",
  // สำหรับเรียกข้อมูลสินค้าทัแนะนำ
  api_get_product: "/products",
  api_get_product_recomend: "/products/recom",
  // สำหรับเรียกข้อมูลสินค้า By Barcode
  api_get_product_by_barcode: "/products/barcode",
  api_product_cart: "/products/incart",
  api_product_category: "/products/category",

  // สำหรับเรียกข้อมูลร้านค้า
  api_get_location: "/thaiwat/location",
  api_change_location: "/thaiwat/change-location",
  api_port_product: "/thaiwat/port-product-stock",
  api_seller: "/thaiwat/port-seller",

}
