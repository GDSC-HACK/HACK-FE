import { useImmer } from "use-immer";
import Map from "./jsx/map/Map";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useRef, useState } from "react";
import "./default/default.css";
import PostList from "./jsx/posting/PostList";
import SebralPost from "./jsx/posting/SebralPost";
import SignUp from "./jsx/user/SignUp";
import Login from "./jsx/user/Login";
export const MapContext = createContext();
function App() {
  const [latLng, updateLatLng] = useImmer({
    lat: 37.497965,
    lng: 127.027627,
  });
  const [serchKeyword, setSerchKeyWord] = useState();

  const [arr, updateArr] = useImmer([]);
  const [data, updataData] = useImmer(obj);
  return (
    <BrowserRouter>
      <MapContext.Provider
        value={{
          latLng,
          updateLatLng,
          serchKeyword,
          setSerchKeyWord,
          arr,
          updateArr,
          data,
          updataData,
        }}
      >
        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/Posting" element={<PostList />}></Route>
          <Route path="/Post" element={<SebralPost />}></Route>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </MapContext.Provider>
    </BrowserRouter>
  );
}

export default App;

let obj = {
  lat: "",
  lng: "",
  name: "",
};
