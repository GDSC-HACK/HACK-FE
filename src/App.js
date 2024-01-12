import { useImmer } from "use-immer";
import Map from "./jsx/map/Map";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import "./default/default.css";
export const MapContext = createContext();
function App() {
  let [latLng, updateLatLng] = useImmer({
    lat: 37.497965,
    lng: 127.027627,
  });
  let [serchKeyword, setSerchKeyWord] = useState("");
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
        </Routes>
      </MapContext.Provider>
    </BrowserRouter>
  );
}

export default App;
