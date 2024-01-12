import PostMap from "./PostMap";
import * as S from "../../css/EditStyle";

export default function Edit({ lat, lng }) {
  return (
    <S.Main>
      <form action="">
        <span>제목</span>
        <input type="text" />
        <span>내용</span>
        <textarea name="" id=""></textarea>
        <PostMap lat={lat} lng={lng} />
        <button>포스팅</button>
      </form>
    </S.Main>
  );
}
