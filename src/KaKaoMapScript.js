import pepsi from "./public/license/pepsi.png";
import coca from "./public/license/coca.png";

var { kakao } = window;

export default function KakaoMapScript() {
  var container = document.getElementById("myMap"); // 가이드는 Map이다
  var options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 2,
  };
  var map = new kakao.maps.Map(container, options);

  // HTML5의 geolocation으로 사용할 수 있는지 확인합니다
  if (navigator.geolocation) {
    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = position.coords.latitude, // 위도
        lon = position.coords.longitude; // 경도

      var locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다

      // 마커와 인포윈도우를 표시합니다
      displayMarker(locPosition);
    });
  } else {
    // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
    var locPosition = new kakao.maps.LatLng(33.450701, 126.570667);
    displayMarker(locPosition);
  }

  // 지도에 마커와 인포윈도우를 표시하는 함수입니다
  function displayMarker(locPosition) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      map: map,
      position: locPosition,
    });

    fetchingOverlay();

    // 지도 중심좌표를 접속위치로 변경합니다
    map.setCenter(locPosition, marker);
  }

  function fetchingOverlay() {
    // 만들고자 하는 방향 <div class="customOverlay"><img width="40px" src="${pepsi}"/></div>
    // 만들고자 하는 방향 <div class="customOverlay"><img width="40px" src="${coca}"/></div>

    const overlayBox = document.createElement("div"); // <div></div>
    overlayBox.classList.add("customOverlay"); // <div class="customOverlay"></div>
    const imgDiv = document.createElement("img"); // <div class="customOverlay"><img/></div>
    imgDiv.setAttribute("width", 40);
    imgDiv.setAttribute("src", pepsi); // <div class="customOverlay"><img width="40" src="${pepsi}"/></div>
    imgDiv.setAttribute("alt", "가게 이미지");
    overlayBox.append(imgDiv);

    const overlayBox2 = document.createElement("div"); // <div></div>
    overlayBox2.classList.add("customOverlay"); // <div class="customOverlay"></div>
    const imgDiv2 = document.createElement("img"); // <div class="customOverlay"><img/></div>
    imgDiv2.setAttribute("width", 40);
    imgDiv2.setAttribute("src", coca); // <div class="customOverlay"><img width="40" src="${pepsi}"/></div>
    imgDiv2.setAttribute("alt", "가게 이미지");
    overlayBox2.append(imgDiv2);

    // CustomOverlay의 content에 동일한 변수를 넣어줄 수 없음

    var customOverlay = new kakao.maps.CustomOverlay({
      map: map,
      content: overlayBox,
      position: new kakao.maps.LatLng(37.38903279939199, 126.97623476944985), // 커스텀 오버레이를 표시할 좌표
    });
    var customOverlay2 = new kakao.maps.CustomOverlay({
      map: map,
      content: overlayBox2,
      position: new kakao.maps.LatLng(37.38992745536002, 126.97743015243483), // 커스텀 오버레이를 표시할 좌표
      yAnchor: 1,
    });
    return { customOverlay, customOverlay2 };
  }
}
