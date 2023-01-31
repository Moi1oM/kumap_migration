import * as S from "@/styles/index/SearchBox";
import { useRecoilState } from "recoil";
import { modalBuildingNameState, searchFullState } from "../constants/atom";

export default function SearchBox() {
  const [name, setName] = useRecoilState(modalBuildingNameState);
  const [searchFull, setSearchFull] = useRecoilState(searchFullState);
  const onSearchFull = () => {
    setSearchFull(true);
  };
  return (
    <>
      <S.first_search_modal onClick={onSearchFull}>
        {name === "" ? (
          <>
            <S.searchScope className="material-icons">search</S.searchScope>
            <S.searchFont>목적지를 검색하세요</S.searchFont>
            <S.kumapIcon src="/modal/kumapIcon.png" />
          </>
        ) : (
          <S.searchFont>{name}</S.searchFont>
        )}
      </S.first_search_modal>
    </>
  );
}
