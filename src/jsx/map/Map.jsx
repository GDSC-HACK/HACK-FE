import Header from "../../default/Header";
import { IoIosSearch } from "react-icons/io";
import { MapContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import Footer from "../../default/Footer";
import Location from "./KakaoMap";
import ShortList from "./ShortList";
import { LongList } from "./LongList";
import * as S from "../../css/MapStyle";
import Modal from "./Modal";
import { useImmer } from "use-immer";
import { useNavigate } from "react-router-dom";
import Edit from "../posting/Edit";

function Map() {
  const {
    setSerchKeyWord,
    arr,
    updateArr,
    data,
    updataData,
    edit,
    setEdit,
    pop,
    setPop,
  } = useContext(MapContext);
  const [planStyle, setPlanStyle] = useState(true);
  const navigate = useNavigate();
  const enterEvent = (e) => {
    // e.defaultPrevent();
    if (e.code == "Enter") {
      setSerchKeyWord(e.target.value);
    }
  };
  return (
    <>
      <Header />
      {!edit && (
        <S.Main>
          {pop && <Modal />}
          <S.Search className="serch">
            <IoIosSearch className="serchIcon" />
            <input
              type="text"
              onKeyDown={(e) => {
                enterEvent(e);
              }}
              placeholder="ex) 혜화 맛집"
            />
          </S.Search>
          <S.textBox>
            <span>“지도에</span>
            <img src={`${process.env.PUBLIC_URL}/img/point.png`} alt="" />
            <span>표시해주세요”</span>
          </S.textBox>
          <Location />
          <S.ListBox>
            <S.BtnBox>
              <button
                className={`short ${planStyle ? "focus" : ""}`}
                onClick={() => {
                  setPlanStyle(true);
                }}
              >
                단기 계획
              </button>
            </S.BtnBox>
            <ShortList />
            <span
              onClick={() => {
                setEdit(true);
              }}
            >
              글쓰기
            </span>
          </S.ListBox>
        </S.Main>
      )}
      {edit && <Edit arr={arr} />}
      <Footer />
    </>
  );
}

export default Map;
