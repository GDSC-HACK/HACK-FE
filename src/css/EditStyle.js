import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 628px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-evenly; */
  position: absolute;
  top: 89px;

  form {
    margin-bottom: 5vh;
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  span {
    margin-top: 1vh;
    margin-bottom: 1vh;
    width: 80%;
    text-align: start;
  }
  input {
    width: 80%;
    height: 5%;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    background-color: transparent;
    flex-shrink: 0;
  }
  textarea {
    margin-bottom: 3vh;
    width: 80%;
    height: 25%;
    /* border: none; */
    outline: none;
    background-color: transparent;
    flex-shrink: 0;
  }
  button {
    width: 80%;
    height: 10%;
    border: 1px solid #ff8946;
    position: relative;
    top: 3vh;
    color: white;
    background-color: #ff8946;
    flex-shrink: 0;
  }
`;
