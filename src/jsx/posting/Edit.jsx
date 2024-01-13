import PostMap from "./PostMap";
import * as S from "../../css/EditStyle";
import { useImmer } from "use-immer";
import { useContext } from "react";
import { MapContext } from "../../App";

export default function Edit({ lat, lng }) {
  const { arr } = useContext(MapContext);
  const [data, updateData] = useImmer(obj);

  const fetchFunc = async () => {
    try {
      const response = await fetch(
        // `http://localhost:8070/words/${props.lang}/${props.word.id`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
    } catch (error) {
      console.error("패치 실패");
    }
  };
  return (
    <S.Main>
      <form action="">
        <span>제목</span>
        <input
          type="text"
          onChange={(e) => {
            updateData((data) => {
              data.title = e.target.value;
            });
          }}
        />
        <span>내용</span>
        <textarea
          name=""
          id=""
          onChange={(e) => {
            updateData((data) => {
              data.content = e.target.value;
            });
          }}
        ></textarea>
        <PostMap lat={lat} lng={lng} />
        <button
          onClick={(e) => {
            e.preventDefault();
            updateData((data) => {
              data.mapNodeList = arr;
              data.email = "seyerin@naver.com";
            });
            console.log(data.mapNodeList);
          }}
        >
          포스팅
        </button>
      </form>
    </S.Main>
  );
}

let obj = {
  email: "string",
  title: "string",
  content: "string",
  foodMap: {
    mapNodeList: [
      {
        restaurantName: "string",
        latitude: 0,
        longitude: 0,
      },
    ],
  },
};
