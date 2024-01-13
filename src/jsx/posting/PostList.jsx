import Footer from "../../default/Footer";
import Header from "../../default/Header";
import Post from "./Post";
import { IoIosArrowDown } from "react-icons/io";
import * as S from "../../css/PostStyle";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapContext } from "../../App";

export default function PostList() {
  const [arr, setArr] = useState([]);
  const { id } = useContext(MapContext);
  const navigate = useNavigate();
  const fetchFunc = async () => {
    try {
      let response = await fetch(`/dum/data.json`);
      let dataArr = await response.json();
      setArr(dataArr);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    fetchFunc();
  }, []);
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
        <span className="currentHash">#{"입력한 해쉬태그"}</span>
        <S.PostBox className="postList">
          {arr != "" &&
            arr.result.map((x, n) => {
              id.current = x.post_id;
              return (
                <Post
                  title={x.title}
                  content={x.content}
                  userName={x.userName}
                  map={x.foodMap.mapNodeList}
                  key={x.post_id}
                />
              );
            })}
        </S.PostBox>
      </S.PostList>
      <Footer />
    </>
  );
}
