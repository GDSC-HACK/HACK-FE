import styled from "styled-components";

export const PostList = styled.main`
  width: 100%;
  height: 704px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-evenly; */
  position: absolute;
  top: 129px;
  /* background-color: yellowgreen; */
`;
export const PostHead = styled.section`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: end;
  /* background-color: yellow; */

  .hash {
    margin-left: 3vw;
    padding: 0 0 0 3vw;
    width: 110px;
    height: 30px;
    border-radius: 20px;
    box-shadow: 0px 5px 5px #b8b8b8;
    display: flex;
    align-items: center;
    background-color: #f9f9f9;
  }
  .hash span {
    font-size: 20px;
    font-weight: 900;
  }
  input {
    margin-left: 1vw;
    width: 80%;
    height: 80%;
    border: none;
    outline: none;
    background-color: rgba(0, 0, 0, 0);
  }
`;
export const SelectBox = styled.div`
  margin-right: 3vw;
  width: 100px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #f9f9f9;

  .remove {
    display: none;
  }
  .current {
    width: 100%;
    height: 100%;
    /* border-bottom: 1px solid black; */
    box-shadow: 0px 5px 5px #b8b8b8;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
  }
  p {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9;
  }
  .downIcon {
    position: absolute;
    right: 0;
  }
  div {
    width: 100%;
    height: 65px;
    position: absolute;
    top: 3.3vh;
    z-index: 3;
  }
`;
export const PostBox = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 8.9vh;
  overflow-y: auto;
`;
export const Post = styled.div`
  margin: 2vh 0 2vh 0;
  width: 350px;
  height: 380px;
  border: 1px solid black;
  border-radius: 20px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;

  p {
    width: 80%;
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    //2줄 말줄임
    /* overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical; */
  }
`;

export const SevralPostHead = styled.section`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: yellow; */

  span {
    margin-left: 8vw;
  }
  .menuIcon {
    margin-right: 5vw;
  }
`;

export const Coures = styled.section`
  width: 270px;
  height: 170px;
  background-color: yellowgreen;
`;

export const PostFooter = styled.section`
  width: 90%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: violet; */

  div {
    /* margin-left: 5vw; */
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid black; */
  }
  .icon {
    font-size: 25px;
  }
  .scrab {
    /* margin-right: 3vw; */
  }
`;

export const IconBox = styled.div``;
