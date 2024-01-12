import { VscKebabVertical } from "react-icons/vsc";
import { FaHeart } from "react-icons/fa";
import { IoChatbubbleSharp } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import * as S from "../../css/PostStyle";
import Plan from "./Plan";
import { useNavigate } from "react-router-dom";

export default function Post() {
  let arr = [0, 1, 2, 3];
  const navigate = useNavigate();
  return (
    <S.Post
      onClick={() => {
        navigate("/Post");
      }}
    >
      <S.SevralPostHead className="head">
        <span>user</span>
        <div className="menuIcon">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </S.SevralPostHead>
      <div className="textBox">
        <p>제목</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, qui
          sit vitae incidunt mollitia quibusdam amet fugit delectus laudantium!
          Praesentium repellat odio rerum. Ea aut, eum beatae fugiat quos sequi!
        </p>
      </div>
      <S.Coures>
        {arr.map((x, n) => {
          return <Plan n={n} />;
        })}
      </S.Coures>
      <S.PostFooter className="footer">
        <S.IconBox>
          <div>
            <FaHeart className="icon heart" />
            <span>0</span>
          </div>
          <div>
            <IoChatbubbleSharp className="icon" />
            <span>0</span>
          </div>
        </S.IconBox>
        <FaBookmark className=" scrab" />
      </S.PostFooter>
    </S.Post>
  );
}
