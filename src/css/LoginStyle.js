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

  div {
    width: 100%;
    height: 50%;
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
    margin-top: 3vh;
    width: 80%;
    text-align: start;
  }
  .sign {
    font-size: 13px;
    position: relative;
    top: 1vh;
    left: 10vw;
  }
  button {
    width: 100%;
    height: 8%;
    border: 1px solid #ff8946;
    border-radius: 20px;
    font-size: 16px;
    outline: none;
    background-color: white;
  }
`;
