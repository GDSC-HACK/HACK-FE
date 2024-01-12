import { useContext } from "react";
import { MapContext } from "../../App";

export default function ShortList() {
  const { arr } = useContext(MapContext);
  // console.log(arr);
  return (
    <>
      {arr.map((x, n) => {
        // console.log(x);
        return <div key={n}>{x.title}</div>;
      })}
    </>
  );
}
