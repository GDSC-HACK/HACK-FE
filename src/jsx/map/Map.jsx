import Header from "../../default/Header";
import { IoIosSearch } from "react-icons/io";
import { MapContext } from "../../App";
import { useContext, useState } from "react";
import Footer from "../../default/Footer";
import Location from "./KakaoMap";
import ShortList from "./ShortList";
import { LongList } from "./LongList";
import * as S from "../../css/MapStyle";
import Modal from "./Modal";

function Map() {
  const { setSerchKeyWord } = useContext(MapContext);
  const [planStyle, setPlanStyle] = useState(true);
  const enterEvent = (e) => {
    // e.defaultPrevent();
    if (e.code == "Enter") {
      setSerchKeyWord(e.target.value);
    }
  };
  return (
    <>
      <Header />
      <S.Main>
        {/* <Modal /> */}
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
            <button
              className={`long ${planStyle ? "" : "focus"}`}
              onClick={() => {
                setPlanStyle(false);
              }}
            >
              장기 계획
            </button>
          </S.BtnBox>
          {planStyle && <ShortList />}
          {!planStyle && <LongList />}
        </S.ListBox>
      </S.Main>
      <Footer />
    </>
  );
}

export default Map;
