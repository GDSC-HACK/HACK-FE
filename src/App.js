import { useImmer } from "use-immer";
import Map from "./jsx/map/Map";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useRef, useState } from "react";
import "./default/default.css";
import PostList from "./jsx/posting/PostList";
export const MapContext = createContext();
function App() {
  const [latLng, updateLatLng] = useImmer({
    lat: 37.497965,
    lng: 127.027627,
  });
  const [serchKeyword, setSerchKeyWord] = useState();
  return (
    <BrowserRouter>
      <MapContext.Provider
        value={{
          latLng,
          updateLatLng,
          serchKeyword,
          setSerchKeyWord,
        }}
      >
        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/Post" element={<PostList />}></Route>
        </Routes>
      </MapContext.Provider>
    </BrowserRouter>
  );
}

export default App;
