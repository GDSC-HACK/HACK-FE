/*global kakao */
import React, { useContext, useEffect, useRef } from "react";
import { MapContext } from "../../App";
import { markerdata } from "./aa";
import * as S from "../../css/SebaralPostStyle";
export default function PostMap() {
  const { arr, state } = useContext(MapContext);

  const { kakao } = window;
  useEffect(() => {
    func();
  }, [arr]);

  const func = () => {
    const container = document.querySelector("#map");
    let options = {
      center: new kakao.maps.LatLng(37.497965, 127.027627),
      level: 5,
    };

    //map
    const map = new kakao.maps.Map(container, options);

    arr.forEach((el) => {
      console.log(el);
      // 마커를 생성합니다
      new kakao.maps.Marker({
        //마커가 표시 될 지도
        map: map,
        //마커가 표시 될 위치
        position: new kakao.maps.LatLng(el.lat, el.lng),
        //마커에 hover시 나타날 title
        title: el.title,
      });
    });
  };

  return <S.PostMap id="map"></S.PostMap>;
}
