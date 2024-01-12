import Footer from "../../default/Footer";
import Header from "../../default/Header";
import PostMap from "./PostMap";
import { VscKebabVertical } from "react-icons/vsc";
import { FaHeart } from "react-icons/fa";
import { IoChatbubbleSharp } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import * as S from "../../css/SebaralPostStyle";

export default function SebralPost() {
  return (
    <>
      <Header />
      <S.Main>
        <S.Posting>
          <div className="info">
            <span>user</span>
            <div className="menuIcon">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </div>
          </div>
          <div className="textBox">
            <p className="title">title</p>
            <p className="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
              impedit commodi temporibus quam quo ratione tenetur saepe culpa
              quae dicta, fugiat omnis. Fuga deserunt tempore provident! Eos
              enim odio eum?
            </p>
            <PostMap />
          </div>
          <S.PostFooter className="footer">
            <div>
              <div>
                <FaHeart className="icon heart" />
                <span>0</span>
              </div>
              <div>
                <IoChatbubbleSharp className="icon" />
                <span>0</span>
              </div>
            </div>
            <FaBookmark className=" scrab" />
          </S.PostFooter>
        </S.Posting>
        <S.ChatSection>
          <div className="chats">
            <div className="chat">
              <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="" />
              <div>
                <span>user1</span>
                <p>
                  ddbsjdjwddwjoeksjfxmdcsaksflv dzcms.WD;KEFJSIVX
                  <br />
                  CZMSXLADJSVILCZMKLADEJIfvdsnlwda
                </p>
              </div>
            </div>
          </div>
          <div className="input">
            <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="" />
            <input type="text" />
          </div>
        </S.ChatSection>
      </S.Main>
      <Footer />
    </>
  );
}
