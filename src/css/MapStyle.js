import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 704px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-evenly; */
  position: absolute;
  top: 129px;
`;

export const Search = styled.div`
  margin: 3vh 0 3vh 0;
  width: 350px;
  height: 31px;
  border: 1px solid black;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    width: 85%;
    border: none;
    outline: none;
    background-color: rgba(0, 0, 0, 0);
  }
  input::placeholder {
    color: #9a9a9a;
  }
  .serchIcon {
    margin: 0 0.5vw 0 1vw;
    font-size: 25px;
  }
`;

export const textBox = styled.div`
  margin-bottom: 1vh;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const ListBox = styled.div`
  margin-top: 2vh;
  width: 373px;
  height: 162px;
  border: 1px solid #9a9a9a;
  border-radius: 20px;
`;
export const BtnBox = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: end;
  align-items: center;

  button {
    margin: 0 2.5vw 0 0vw;
    width: 60px;
    height: 25px;
    font-size: 10px;
    border: 1px solid 9A9A9A;
    border-radius: 10px;
    background-color: #f9f9f9;
    cursor: pointer;
  }
  .focus {
    border: none;
    color: #f9f9f9;
    background-color: #ff8946;
  }
`;
export const MapStyle = styled.div`
  width: 375px;
  height: 375px;
  border: 1px solid #9a9a9a;
  border-radius: 20px;
`;
export const Modal = styled.div`
  width: 285px;
  height: 255px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  background-color: #f9f9f9;
  z-index: 3;

  button {
    margin-bottom: 3vh;
    width: 145px;
    height: 35px;
    border: none;
    border-radius: 10px;
    color: #f9f9f9;
    background-color: #ff8946;
  }
`;
export const ModalHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    margin: 0 4vw 0 4vw;
  }
`;

export const ReviewBox = styled.div`
  width: 80%;
  height: 100px;
  span {
    margin-left: 1vw;
    font-size: 15px;
  }
  p {
    width: 100%;
    height: 50%;
    border: 1px solid black;
    text-indent: 3vw;
    display: flex;
    align-items: center;
  }
`;
