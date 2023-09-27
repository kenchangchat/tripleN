import React, { useState, useEffect } from "react";
import axios from "axios";

function TestPage() {
  const [imagePath, setImagePath] = useState("");

  useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get(
          "http://localhost:3002/api/products/image-1678417091504.png",
          {
            responseType: "blob",
          }
        );
        const blobData = await response.data.arrayBuffer();
        const base64String = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(new Blob([blobData], { type: "image/png" }));
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });
        setImagePath(base64String);
      };
      fetchData();
  }, []);

  return (
    <>
      <img src={imagePath} alt="example" />
    </>
  );
}

export default TestPage;
