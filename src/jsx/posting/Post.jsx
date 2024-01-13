import { VscKebabVertical } from "react-icons/vsc";
import { FaHeart } from "react-icons/fa";
import { IoChatbubbleSharp } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import * as S from "../../css/PostStyle";
import Plan from "./Plan";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MapContext } from "../../App";

export default function Post({ title, content, userName, map, key }) {
  // const { setId } = useContext(MapContext);
  const navigate = useNavigate();

  return (
    <S.Post
      onClick={(e) => {
        // setId(key);
        navigate("/Post");
      }}
    >
      <S.SevralPostHead className="head">
        <span>{userName}</span>
        <div className="menuIcon">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </S.SevralPostHead>
      <div className="textBox">
        <p>{title}</p>
        <p>{content}</p>
      </div>
      <S.Coures>
        {map.map((x, n) => {
          // console.log(x);
          return (
            <Plan
              let={x.latitude}
              lng={x.longitude}
              name={x.restaurantName}
              key={x.latitude * n}
            />
          );
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
