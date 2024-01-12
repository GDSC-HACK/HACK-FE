import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 628px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 89px;
`;

export const Form = styled.form`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  p {
    margin: 2vh 0 1vh 2vw;
    font-size: 22px;
    font-weight: 600;
    line-height: 3.5vh;
    color: #ff8946;
  }
  div {
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  div input {
    width: 80%;
    height: 10%;
    border: none;
    border-bottom: 1px solid #ff8946;
    background-color: transparent;
    outline: none;
  }
  label {
    margin-top: 2vh;
    width: 80%;
    text-align: start;
  }
  button {
    width: 100%;
    height: 8%;
    border: 1px solid #ff8946;
    border-radius: 20px;
    font-size: 16px;
    outline: none;
    background-color: #f9f9f9;
  }
  .check {
    width: 80%;
    text-align: start;
    position: relative;
    top: 1vh;
    color: red;
  }
`;
