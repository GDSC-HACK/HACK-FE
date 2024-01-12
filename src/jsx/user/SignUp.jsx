import Footer from "../../default/Footer";
import Header from "../../default/Header";

import * as S from "../../css/SignUpStyle";
import { useImmer } from "use-immer";
import { useState } from "react";
export default function SignUp() {
  const [user, updateUser] = useImmer(obj);
  const [check, setCheck] = useState("");
  const [able, setAble] = useState(true);
  const handleSubmit = async () => {
    try {
      const response = await fetch("http://54.180.109.222:8080/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
    } catch (error) {
      console.error("패치 실패");
    }
  };
  return (
    <>
      <Header />
      <S.Main>
        <S.Form action="">
          <p>
            회원 가입을 위해 <br />
            정보를 입력해주세요
          </p>
          <div>
            <label htmlFor="name">
              <span className="essential">*</span>이름
            </label>
            <input
              id="name"
              type="text"
              required
              onChange={(e) => {
                updateUser((user) => {
                  user.nickname = e.target.value;
                });
              }}
            />
            <label htmlFor="id">
              <span className="essential">*</span>이메일
            </label>
            <input
              id="id"
              type="email"
              required
              onChange={(e) => {
                updateUser((user) => {
                  user.email = e.target.value;
                });
              }}
            />
            <label htmlFor="pw">
              <span className="essential">*</span>비밀번호
            </label>
            <input
              id="pw"
              type="password"
              name=""
              required
              onChange={(e) => {
                updateUser((user) => {
                  user.password = e.target.value;
                });
              }}
            />
            <label htmlFor="checkPw">
              <span className="essential">*</span>비밀번호 확인
            </label>
            <input
              id="checkPw"
              type="password"
              name=""
              required
              onChange={(e) => {
                if (e.target.value != user.password) {
                  setCheck("비밀번호가 다릅니다");
                } else {
                  setCheck("");
                  setAble(false);
                }
              }}
            />
            <span className="check">{check}</span>
          </div>
          <button
            disabled={able}
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            가입하기
          </button>
        </S.Form>
      </S.Main>
      <Footer />
    </>
  );
}

const obj = {
  email: "OOO@naver.com",
  password: "123456789",
  nickname: "테스트",
};
