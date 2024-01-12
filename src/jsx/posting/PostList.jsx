import Footer from "../../default/Footer";
import Header from "../../default/Header";
import Post from "./Post";
import { IoIosArrowDown } from "react-icons/io";
import * as S from "../../css/PostStyle";

export default function PostList() {
  return (
    <>
      <Header />
      <S.PostList>
        <S.PostHead>
          <div className="hash">
            <span>#</span>
            <input type="text" placeholder="해쉬태그 검색" />
          </div>
          <S.SelectBox>
            <div className="current">
              {"최신순"}
              <IoIosArrowDown className="downIcon" />
            </div>
            <div className="remove">
              <p>최신순</p>
              <p>인기순</p>
            </div>
          </S.SelectBox>
        </S.PostHead>
        <span>#{"입력한 해쉬태그"}</span>
        <S.PostBox className="postList">
          <Post />
        </S.PostBox>
      </S.PostList>
      <Footer />
    </>
  );
}
