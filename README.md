# ๐ ๋ฆฌ์กํธ ํ๊ฒฝ์์ ์นด์นด์ค ์ง๋ API ์ฌ์ฉํ๊ธฐ

> <a href="https://velog.io/@dndb3599/%EC%B9%B4%EC%B9%B4%EC%98%A4%EB%A7%B5-API1-React%EB%A1%9C-%EC%B9%B4%EC%B9%B4%EC%98%A4%EB%A7%B5-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0">์ฐธ๊ณ  ์๋ฃ 1</a>, ์ถ์ฒ : velog, [์นด์นด์ค๋งต API#1] React๋ก ์นด์นด์ค๋งต ๊ตฌํํ๊ธฐ <br/> > <a href="https://apis.map.kakao.com/web/wizard/">์ฐธ๊ณ ์๋ฃ 2</a>, ์ถ์ฒ : ์นด์นด์ค MAPS, API WIZARD

## ๐ฏ ๋ค์ด๊ฐ๊ธฐ ์์

<p>์ด๋ฒ ํ๋ก์ ํธ์์๋ ์ง๋ API๋ฅผ ๋ฐํ์ผ๋ก ์ฌ์ฉ์์ ์ํด ์ ๋ณด๋ฅผ ์๋ ฅ ๋ฐ์ ๊ฒฐ๊ณผ๋ฌผ์ DB์ ์ ์ฅํ๊ณ  ์ด๋ฅผ ๋ณด์ฌ์ฃผ๋ ํ๋ฆ์ ๊ฐ์ง๊ธฐ๋ก ํ๋ค.</p>
<p>๋ฐ๋ผ์ html์ด ์๋, CRA ํ๊ฒฝ์์ ์ง๋ API๋ฅผ ์ ์ฉํด ๋ณธ ๊ฒฝํ์ด ์์ด, ์ด๋ฅผ ์ ์ฉํด๋ณด๊ธฐ ์ด ๋ ํฌ์งํ ๋ฆฌ๋ฅผ ์์ฑํ์๋ค. </p>

## ๐ฏ 1. ๋ฆฌ์กํธ์ ํน์ง, ํด๋ ๊ตฌ์กฐ

<img src="./src/public/index.png" alt="index_tree">

<p>๋ฆฌ์กํธ๋ build ๊ณผ์ ์ ๊ฑฐ์ณ, ๋ค์์ ํ์ผ์์ ํ๋์ ํ์ผ๋ก ๋ฒ๋ค๋ง ๋ ํ์ด์ง๊ฐ public/index.html์์ ๋ ๋๋ง ๋๋ค. ๊ทธ์ ๋ฐ๋ผ์ &ltscript&gt...&lt/script&gt ํ์ผ์ index.html์ ์ฝ์ํด์ค์ผ ํ๋ค.</p>

> ํด๋น ์ฝ๋๋ ๋ค์๊ณผ ๊ฐ๋ค.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <div id="root">
      <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=๋ฐ๊ธ๋ฐ์_api_key"></script>
    </div>
  </body>
</html>

```

```js
document.getElementById("root");
```

<p>'root' ๋ฅผ ํตํด  &ltdiv&gt ... &lt/div&gt ์ฌ์ด์ ๊ฐ์ด ๋ ๋๋ง๋๋ฏ๋ก kakao api์์ ๋ฐ๊ธ ๋ฐ์ JAVASCRIPT KEY๋ฅผ ํฌํจํ ์คํฌ๋ฆฝํธ ํ๊ทธ๋ฅผ ๋ฃ์ด์ค๋ค.</p>

## ๐ฏ 2. ๋ ๋๋งํ๊ธฐ

```js
๐src/App.js

import "./App.css";
import Map from "./Map";

function App() {
  return <Map />;
}

export default App;
```

<p>๊ธฐ๋ณธ์ ์ผ๋ก App์ ๋ชจ๋ ๋๋ ค ๋ฐ์๋ ์๊ด์์ง๋ง, App์ ์ต๋ํ ๊ฐ๋ณ๊ฒ ์ ์งํ๋ ๊ฒ์ด ์ข๋ค.(๊ตฌ์กฐ ์ ์ต ์์ ์ปดํฌ๋ํธ๋ง์ ๋ ๋๋งํด์ฃผ๋ ๊ฒ์ด ์ข๋ค.) ๋ฐ๋ผ์, Map์ด๋ผ๋ ์ปดํฌ๋ํธ๋ฅผ ์์ฑํ์ฌ ์ด๋ฅผ App.js์์ ์ฌ์ฉํ์๋ค.</p>

> Map ์ปดํฌ๋ํธ๋ ๋ค์๊ณผ ๊ฐ๋ค.

```js
๐src/Map.js

import React, { useEffect } from "react";
import KakaoMapScript from "./KaKaoMapScript";

export default function Map() {
  useEffect(() => {
    KakaoMapScript();
  }, []); // ๋ง์ดํธ ๋ ๋ ์ฌ์ฉํ ์ ์๋๋ก useEffect ์ฌ์ฉ

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
```

<p>๊ธฐ์กด์ฒ๋ผ ํ๋ ์  ํ์ด์๋ ์ปดํฌ๋ํธ์ ์ปจํ์ด๋ ์ปดํฌ๋ํธ์ ๊ฒฝ๊ณ๋ ๋ง์ด ๋ฌด๋์ก์ง๋ง, ์ต๋ํ ํด๋น ํ์ด์ง๊ฐ ๋ณธ์ฐ์ ๊ธฐ๋ฅ๋ง ํ  ์ ์๋๋ก ๋ง๋ค์ด ์ฃผ๋ ๊ฒ์ด ์ข๋ค. ๋ฐ๋ผ์, KakaoMapScript ํจ์๋ฅผ ๋ชจ๋ํํ์ฌ์ ๋ถ๋ฆฌํ์๋ค.</p>

<p>๋ํ useEffect() ํ ํจ์๋ก ํด๋น ํจ์๋ฅผ ๊ฐ์ธ์ฃผ์ด ์ฒ์ ๋ ๋๋ง ์์ ํด๋น ํจ์๋ฅผ ๋ถ๋ฌ์ฌ ์ ์๋๋ก ๋ง๋ค์ด ์ฃผ์๋ค.</p>

> exportํ KakaoMapScript() ํจ์์ ์ฝ๋๋ ๋ค์๊ณผ ๊ฐ๋ค.

```js
๐src/KaKaoMapScript.js

const { kakao } = window; // ์ด๊ฑธ ํด์ค์ผ ์นด์นด์ค api ์์ ์ฌ์ฉํ๋ ๋ณ์๋ค์ ๋ฆฌ์ํธ๊ฐ ์ ์ ์๋ค.

export default function KakaoMapScript() {
  const container = document.getElementById("myMap"); // ๊ฐ์ด๋๋ Map์ด๋ค
  const options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3,
  };
  const map = new kakao.maps.Map(container, options);

  // HTML5์ geolocation์ผ๋ก ์ฌ์ฉํ  ์ ์๋์ง ํ์ธํฉ๋๋ค
  if (navigator.geolocation) {
    // GeoLocation์ ์ด์ฉํด์ ์ ์ ์์น๋ฅผ ์ป์ด์ต๋๋ค
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = position.coords.latitude, // ์๋
        lon = position.coords.longitude; // ๊ฒฝ๋

      var locPosition = new kakao.maps.LatLng(lat, lon), // ๋ง์ปค๊ฐ ํ์๋  ์์น๋ฅผ geolocation์ผ๋ก ์ป์ด์จ ์ขํ๋ก ์์ฑํฉ๋๋ค
        message = '<div style="padding:5px;">์ฌ๊ธฐ์ ๊ณ์ ๊ฐ์?!</div>'; // ์ธํฌ์๋์ฐ์ ํ์๋  ๋ด์ฉ์๋๋ค

      // ๋ง์ปค์ ์ธํฌ์๋์ฐ๋ฅผ ํ์ํฉ๋๋ค
      displayMarker(locPosition, message);
    });
  } else {
    // HTML5์ GeoLocation์ ์ฌ์ฉํ  ์ ์์๋ ๋ง์ปค ํ์ ์์น์ ์ธํฌ์๋์ฐ ๋ด์ฉ์ ์ค์ ํฉ๋๋ค

    var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),
      message = "geolocation์ ์ฌ์ฉํ ์ ์์ด์..";

    displayMarker(locPosition, message);
  }
  // ์ง๋์ ๋ง์ปค์ ์ธํฌ์๋์ฐ๋ฅผ ํ์ํ๋ ํจ์์๋๋ค
  function displayMarker(locPosition, message) {
    // ๋ง์ปค๋ฅผ ์์ฑํฉ๋๋ค
    var marker = new kakao.maps.Marker({
      map: map,
      position: locPosition,
    });

    var iwContent = message, // ์ธํฌ์๋์ฐ์ ํ์ํ  ๋ด์ฉ
      iwRemoveable = true;

    // ์ธํฌ์๋์ฐ๋ฅผ ์์ฑํฉ๋๋ค
    var infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
      removable: iwRemoveable,
    });

    // ์ธํฌ์๋์ฐ๋ฅผ ๋ง์ปค์์ ํ์ํฉ๋๋ค
    infowindow.open(map, marker);

    // ์ง๋ ์ค์ฌ์ขํ๋ฅผ ์ ์์์น๋ก ๋ณ๊ฒฝํฉ๋๋ค
    map.setCenter(locPosition);
  }

  // ์ง๋์ ํ๋ ์ถ์ ์ปจํธ๋กค์ ์์ฑํ๋ค
  var zoomControl = new kakao.maps.ZoomControl();

  // ์ง๋์ ์ฐ์ธก์ ํ๋ ์ถ์ ์ปจํธ๋กค์ ์ถ๊ฐํ๋ค
  map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
}

```

<p>์ ์ผ ์ค์ํ ๋ถ๋ถ์ </p>

```js
const { kakako } = window;
```

<p>์๋์ฐ ๊ฐ์ฒด์์ ์นด์นด์ค๋ฅผ ์ฐธ์กฐํ๋ ๋ถ๋ถ์ด๋ค. ๐ public/index.html์ ํตํด ์๋์ฐ ๊ฐ์ฒด์ ์ค์ ๋ kakao๋ฅผ react ๋ด๋ถ์์ ์ฌ์ฉํ  ์ ์๋๋ก ์ค์ ํด์ฃผ๋ ๊ฒ์ด๋ค.</p>

<p>๋ค๋ฅธ ๋ถ๋ถ๋ค์ <a href="https://apis.map.kakao.com/web/wizard/">kakao maps api</a>์์ ์ ๊ณตํด์ฃผ๊ธฐ ๋๋ฌธ์ ์๋ง์ ๋ง๊ฒ ์ถ๊ฐํ์ฌ ์ฌ์ฉํ๋ฉด ๋๋ค.</p>
