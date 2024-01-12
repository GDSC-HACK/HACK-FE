import { GrFormNextLink } from "react-icons/gr";
import * as S from "../../css/PostStyle";
export default function Plan({ n }) {
  console.log(n);
  return (
    <S.Box>
      <S.PlanBox>맛집</S.PlanBox>
      <GrFormNextLink />
    </S.Box>
  );
}
