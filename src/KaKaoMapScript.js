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

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = position.coords.latitude, // 위도
        lon = position.coords.longitude; // 경도

      var locPosition = new kakao.maps.LatLng(lat, lon);
      if (locPosition) {
        console.log("locPosition:", locPosition);
        positions[0].latlng = locPosition;
        console.log(positions);
      }
      displayMarker(positions);
    });
  } else {
    var locPosition = new kakao.maps.LatLng(33.450701, 126.570667);
    displayMarker(locPosition);
  }

  function displayMarker(positions) {
    console.log(positions);
    for (var i = 0; i < positions.length; i++) {
      var imageSize = new kakao.maps.Size(40, 60);
      var markerImage;

      // 마커 이미지가 있을 경우에만 표시
      if (positions[i].img) {
        markerImage = new kakao.maps.MarkerImage(positions[i].img, imageSize);
      } else {
        markerImage = null;
      }

      var marker = new kakao.maps.Marker({
        map: map,
        title: positions[i].title,
        position: positions[i].latlng,
        image: markerImage,
      });

      // 지도 중심좌표를 접속위치로 변경합니다
      map.setCenter(positions[0].latlng, marker);
    }
  }

  var positions = [
    {
      title: "내 위치",
      latlng: null,
    },
    {
      title: "내손 의왕 메가커피",
      latlng: new kakao.maps.LatLng(37.38992745536002, 126.97743015243483),
      img: coca,
    },
    {
      title: "평촌동 두산벤쳐다임",
      latlng: new kakao.maps.LatLng(37.39124205567942, 126.97296865595483),
      img: pepsi,
    },
    {
      title: "내손 의왕 스타벅스",
      latlng: new kakao.maps.LatLng(37.38903279939199, 126.97623476944985),
      img: coca,
    },
  ];

  // function fetchingOverlay() {
  //   const categoryImage = [pepsi, coca];
  //   // 만들고자 하는 방향 <div class="customOverlay"><img width="40px" src="${pepsi}"/></div>
  //   // 만들고자 하는 방향 <div class="customOverlay"><img width="40px" src="${coca}"/></div>

  //   const overlayBox = document.createElement("div"); // <div></div>
  //   // overlayBox.classList.add("customOverlay"); // <div class="customOverlay"></div>
  //   const imgDiv = document.createElement("img"); // <div class="customOverlay"><img/></div>
  //   imgDiv.setAttribute("width", 40);
  //   imgDiv.setAttribute("src", categoryImage[0]); // <div class="customOverlay"><img width="40" src="${pepsi}"/></div>
  //   imgDiv.setAttribute("alt", "가게 이미지");
  //   overlayBox.append(imgDiv);

  //   var customOverlay = new kakao.maps.CustomOverlay({
  //     map: map,
  //     content: overlayBox,
  //     position: new kakao.maps.LatLng(37.38903279939199, 126.97623476944985), // 커스텀 오버레이를 표시할 좌표
  //   });

  //   return { customOverlay };
  // }
}

/* 
커스텀 오버레이 대한 설정은 1개로 가져가고 마커를 커스텀 오버레이로 설정해주는 구조였음 
각 마커에 대해 커스텀으로 오버레이 위에 덫붙이는 구조 
따라서 마커를 다시 배열로 담은 상태에서 커스텀 오버레이로 보여주겠다라고 표시하면 될 듯
*/
