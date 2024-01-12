import { FiMapPin } from "react-icons/fi";
import { IoBookmark } from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MapContext } from "../App";
export default function Footer() {
  const { currentService } = useContext(MapContext);
  return (
    <>
      <footer>
        <Link to="/">
          <div>
            <FiMapPin
              className="icon"
              onClick={() => {
                currentService.current = "map";
              }}
            />
            <span>지도</span>
          </div>
        </Link>
        <Link to="/Post">
          <div>
            <IoBookmark
              className="icon"
              onClick={() => {
                currentService.current = "post";
              }}
            />
            <span>포스팅</span>
          </div>
        </Link>
        <Link to="/User">
          <div>
            <FaUserLarge className="icon" />
            <span>내 정보</span>
          </div>
        </Link>
      </footer>
    </>
  );
}
