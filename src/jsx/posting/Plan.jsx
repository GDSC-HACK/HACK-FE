import { GrFormNextLink } from "react-icons/gr";
import * as S from "../../css/PostStyle";
export default function Plan({ n, name }) {
  // console.log(name);
  return (
    <S.Box>
      <S.PlanBox>{name}</S.PlanBox>
      <GrFormNextLink />
    </S.Box>
  );
}
