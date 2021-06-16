const { kakao } = window;

export default function KakaoMapScript() {
  const container = document.getElementById("myMap"); // 가이드는 Map이다
  const options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3,
  };
  const map = new kakao.maps.Map(container, options);

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

  // 마커 이미지를 가져옵니다.
  var imageSrc = "http://getdrawings.com/free-icon/coke-icon-70.png", // 마커이미지의 주소입니다
    imageSize = new kakao.maps.Size(69, 69), // 마커이미지의 크기입니다
    imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

  var markerImage = new kakao.maps.MarkerImage(
    imageSrc,
    imageSize,
    imageOption
  );
  // 지도에 마커와 인포윈도우를 표시하는 함수입니다
  function displayMarker(locPosition) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      map: map,
      position: locPosition,
      image: markerImage,
    });

    var customOverlayArray = [
      customOverlay,
      customOverlay2,
      customOverlay3,
      customOverlay4,
    ];

    var customOverlay = new kakao.maps.CustomOverlay({
      map: map,
      content:
        '<div style="width:20px; height:20px;border:2px solid black;border-radius:50%;padding:0 5px;background:lime;">:D</div>',
      position: locPosition, // 커스텀 오버레이를 표시할 좌표
      xAnchor: 5, // 컨텐츠의 x 위치
      yAnchor: 0, // 컨텐츠의 y 위치
    });

    var customOverlay2 = new kakao.maps.CustomOverlay({
      map: map,
      content:
        '<div style="width:20px; height:20px;border:2px solid black;border-radius:50%;padding:0 5px;background:lime;">:D</div>',
      position: locPosition, // 커스텀 오버레이를 표시할 좌표
      xAnchor: -9, // 컨텐츠의 x 위치
      yAnchor: 1, // 컨텐츠의 y 위치
    });

    var customOverlay3 = new kakao.maps.CustomOverlay({
      map: map,
      content:
        '<div style="width:20px; height:20px;border:2px solid black;border-radius:50%;padding:0 5px;background:lime;">:D</div>',
      position: locPosition, // 커스텀 오버레이를 표시할 좌표
      xAnchor: 1, // 컨텐츠의 x 위치
      yAnchor: -7, // 컨텐츠의 y 위치
    });

    var customOverlay4 = new kakao.maps.CustomOverlay({
      map: map,
      content:
        '<div style="width:20px; height:20px;border:2px solid black;border-radius:50%;padding:0 5px;background:lime;">:D</div>',
      position: locPosition, // 커스텀 오버레이를 표시할 좌표
      xAnchor: 8, // 컨텐츠의 x 위치
      yAnchor: 5, // 컨텐츠의 y 위치
    });

    // 지도 중심좌표를 접속위치로 변경합니다
    // 커스텀 오버레이를 추가로 설정해줍니다.
    map.setCenter(locPosition, marker, customOverlayArray);
  }

  // 지도에 확대 축소 컨트롤을 생성한다
  var zoomControl = new kakao.maps.ZoomControl();

  // 지도의 우측에 확대 축소 컨트롤을 추가한다
  map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
}
