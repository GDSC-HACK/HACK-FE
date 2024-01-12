import { FiMapPin } from "react-icons/fi";
import { IoBookmark } from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
export default function Footer() {
  return (
    <>
      <footer>
        <div>
          <FiMapPin className="icon" />
          <span>지도</span>
        </div>
        <div>
          <IoBookmark className="icon" />
          <span>포스팅</span>
        </div>
        <div>
          <FaUserLarge className="icon" />
          <span>내 정보</span>
        </div>
      </footer>
    </>
  );
}
