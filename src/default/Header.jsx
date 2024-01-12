import "./default.css";
export default function Header() {
  return (
    <>
      <header>
        <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="" />
      </header>
    </>
  );
}
