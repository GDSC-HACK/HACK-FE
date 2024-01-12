import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 628px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 89px;
  overflow-y: auto;
`;
export const Posting = styled.section`
  width: 100%;
  height: 60%;
  position: relative;

  .info {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .info span {
    margin-left: 1.5vw;
    font-size: 17px;
  }
  .menuIcon {
    width: 30px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    right: 1vw;
  }
  .menuIcon span {
    margin-bottom: -18px;
    font-size: 20px;
    font-weight: 900;
  }

  .textBox {
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid black;
  }
  .title {
    margin-bottom: 2vh;
    width: 90%;
    font-size: 20px;
    font-weight: 600;
  }
  .text {
    width: 90%;
  }
`;
export const PostMap = styled.div`
  margin-top: 1vh;
  width: 350px;
  height: 250px;
  border: 1px solid black;
  border-radius: 20px;
  flex-shrink: 0;
`;
export const PostFooter = styled.section`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;

  div {
    margin-left: 1vw;
    width: 35%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid black; */
  }
  .icon {
    font-size: 25px;
    color: #ff8946;
  }
  .scrab {
    margin-right: 2vw;
    font-size: 25px;
  }
`;
export const ChatSection = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  /* background-color: yellowgreen; */
  position: relative;
  top: 32vh;

  .chats {
    width: 100%;
    height: auto;
    flex-shrink: 0;
  }

  .chat {
    margin-left: 0.5vw;
    width: 10vh;
    height: auto;
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }
  .chat img {
    margin-right: 1vw;
    width: 30px;
    height: auto;
    border-radius: 100%;
  }
  .chat div {
    width: 80%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
  }
  .chat div span {
    font-size: 13px;
  }
  .input {
    margin-top: 1vh;
    margin-bottom: 1vh;
    width: 100%;
    height: 6vh;
    display: flex;
    /* justify-content: center; */
    align-items: center;
  }
  .input img {
    margin: 0 1vw 0 3vw;
    width: 40px;
    height: 40px;
    border-radius: 100%;
  }
  .input input {
    width: 60%;
    height: 50%;
    border: 1px solid #595955;
    border-radius: 20px;
    outline: none;
    background-color: transparent;
  }
`;
