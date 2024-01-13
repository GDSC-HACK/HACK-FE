/*global kakao */
import React, { useContext, useEffect, useRef } from "react";
import { MapContext } from "../../App";
import * as S from "../../css/MapStyle";
// const { kakao } = window;
const Location = () => {
  const {
    latLng,
    serchKeyword,
    arr,
    updateArr,
    data,
    updataData,
    state,
    setState,
    pop,
    setPop,
  } = useContext(MapContext);
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
  const fetchFunc = async (name) => {
    try {
      const response = await fetch(`/summarize_reviews/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(name),
      });
    } catch (error) {
      console.error("패치 실패");
    }
  };

  useEffect(() => {
    let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(latLng.lat, latLng.lng),
      level: 2,
    };
    const map = new window.kakao.maps.Map(container, options);

    const ps = new kakao.maps.services.Places();
    if (serchKeyword != undefined) {
      ps.keywordSearch(serchKeyword, placesSearchCB);
      // console.log("a");
    }

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        var bounds = new kakao.maps.LatLngBounds();

        for (var i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    }
    function displayMarker(place) {
      var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });
      kakao.maps.event.addListener(marker, "click", function () {
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            "</div>"
        );
        updateArr((arr) => {
          let obj = {
            restaurantName: String(place.place_name),
            latitude: Number(place.x),
            longitude: Number(place.y),
          };
          arr.push(obj);
        });
        fetchFunc(place.place_name);
        setPop(true);
        infowindow.open(map, marker);
      });
    }
  }, [serchKeyword]);
  return (
    <>
      <S.MapStyle id="map"></S.MapStyle>
    </>
  );
};

export default Location;
