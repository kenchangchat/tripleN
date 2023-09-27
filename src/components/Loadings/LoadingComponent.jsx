import React, {useState, useEffect} from "react";
import { Spin } from 'antd';
import "./scss/loading.scss";

function LoadingComponent() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "448px",
          }}
          >
          <Spin />
        </div>
      )}
    </>
  );
}

export default LoadingComponent;
