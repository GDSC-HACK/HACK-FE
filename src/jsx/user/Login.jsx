import { useNavigate } from "react-router-dom";
import * as S from "../../css/LoginStyle";
import Footer from "../../default/Footer";
import Header from "../../default/Header";
import { useImmer } from "use-immer";

export default function Login() {
  const navigate = useNavigate();
  const [user, updateUser] = useImmer(obj);
  const handleSubmit = async () => {
    try {
      const response = await fetch("http://54.180.109.222:8080/auth/signin", {
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
          <div>
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
            <span
              className="sign"
              onClick={() => {
                navigate("/SignUp");
              }}
            >
              회원가입 하기
            </span>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            로그인
          </button>
        </S.Form>
      </S.Main>
      <Footer />
    </>
  );
}

let obj = {
  email: "OOO@naver.com",
  password: "123456789",
};
