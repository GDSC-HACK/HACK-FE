import { FiMapPin } from "react-icons/fi";
import { IoBookmark } from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MapContext } from "../App";
export default function Footer() {
  const login = localStorage.getItem("login");
  const { edit, setEdit } = useContext(MapContext);
  return (
    <>
      <footer>
        <Link to="/">
          <div>
            <FiMapPin
              className="icon"
              onClick={() => {
                setEdit(false);
              }}
            />
            <span>지도</span>
          </div>
        </Link>
        <Link to="/Posting">
          <div>
            <IoBookmark className="icon" />
            <span>포스팅</span>
          </div>
        </Link>
        <Link to={login == null ? "/Login" : "User"}>
          <div>
            <FaUserLarge className="icon" />
            <span>내 정보</span>
          </div>
        </Link>
      </footer>
    </>
  );
}
