import React, { useCallback, useEffect, useState } from "react";
import KakaoMapScript from "./KaKaoMapScript";

export default function Map() {
  useEffect(() => {
    KakaoMapScript();
  }, []); // 마운트 될때 사용할수 있도록 useEffect 사용

  const [searchValue, setSearchValue] = useState("");
  const onChageInput = useCallback((e) => {
    setSearchValue(e.target.searchvalue);
  }, []);

  return (
    <>
      <div
        className="search_input"
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          zIndex: 10000,
        }}
      >
        <form style={{ background: "black", padding: 5 }}>
          <input
            style={{
              width: 250,
              padding: 10,
              fontSize: "1rem",
              outline: "none",
            }}
            placeholder="원하시는 장소를 입력해주세요"
            value={searchValue}
            onChange={onChageInput}
          ></input>
          <button style={{ marginLeft: 10, width: 42, height: 42 }}>
            검색
          </button>
        </form>
      </div>
      <div
        id="myMap"
        style={{
          width: "100vw",
          height: "100vh",
        }}
      ></div>
    </>
  );
}
