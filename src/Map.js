import React, { useEffect } from "react";
import KakaoMapScript from "./KaKaoMapScript";

export default function Map() {
  useEffect(() => {
    KakaoMapScript();
  }, []); // 마운트 될때 사용할수 있도록 useEffect 사용

  return (
    <div
      id="myMap"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    ></div>
  );
}
