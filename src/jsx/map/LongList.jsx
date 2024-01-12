import { useState } from "react";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
export function LongList() {
  const [day, setDay] = useState(1);
  return (
    <>
      <p>{day}일차 계획</p>
      <div></div>
      <GrFormPrevious
        onClick={() => {
          setDay((prev) => prev - 1);
        }}
      />
      <GrFormNext
        onClick={() => {
          setDay((prev) => prev + 1);
        }}
      />
    </>
  );
}
