import { VscKebabVertical } from "react-icons/vsc";
import { FaHeart } from "react-icons/fa";
import { IoChatbubbleSharp } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import * as S from "../../css/PostStyle";

export default function Post() {
  return (
    <S.Post>
      <S.SevralPostHead className="head">
        <span>user</span>
        <VscKebabVertical className="menuIcon" />
      </S.SevralPostHead>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, qui sit
        vitae incidunt mollitia quibusdam amet fugit delectus laudantium!
        Praesentium repellat odio rerum. Ea aut, eum beatae fugiat quos sequi!
      </p>
      <S.Coures></S.Coures>
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
        <FaBookmark className="icon scrab" />
      </S.PostFooter>
    </S.Post>
  );
}
