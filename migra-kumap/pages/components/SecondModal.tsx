import * as S from "@/styles/index/secondModalStyle"

export default function SecondModal(){
    return <>
        <S.ModalContainer>
            <S.ModalCloseBtn src="modal/close_button.png" />
            <S.ModalH3>이동경로 검색</S.ModalH3>
            <S.AddressP>도보 기준 이동경로 및 시간을 계산합니다</S.AddressP>
        </S.ModalContainer>
    </>
}