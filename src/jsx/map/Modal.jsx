import * as S from "../../css/MapStyle";
export default function Modal() {
  return (
    <S.Modal>
      <S.ModalHeader>
        <span className="storeName">aa</span>
        <span>X</span>
      </S.ModalHeader>
      <S.ReviewBox>
        <span>한 줄 리뷰</span>
        <p>아주 맛있습니다</p>
      </S.ReviewBox>
      <button>선택하기</button>
    </S.Modal>
  );
}
