import PostMap from "./PostMap";

export default function Edit({ lat, lng }) {
  return (
    <>
      <form action="">
        <span>제목</span>
        <input type="text" />
        <span>내용</span>
        <textarea name="" id="" onResize={false}></textarea>
        <PostMap lat={lat} lng={lng} />
        <button>포스팅</button>
      </form>
    </>
  );
}
