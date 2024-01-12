/*global kakao */
import React, { useContext, useEffect, useRef } from "react";
import { MapContext } from "../../App";
import * as S from "../../css/SebaralPostStyle";
export default function PostMap() {
  const { latLng, serchKeyword, currentService } = useContext(MapContext);
  console.log(serchKeyword);
  useEffect(() => {
    let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(latLng.lat, latLng.lng),
      level: 2,
    };
    const map = new window.kakao.maps.Map(container, options);

    //----------------------------------------------------------------map 기본 설정
  }, [latLng]);
  return <S.PostMap id="map"></S.PostMap>;
}
