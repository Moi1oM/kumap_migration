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
    <S.top_modal_container>
      <S.first_search_modal onClick={onSearchFull}>
        {name === "" ? (
          <>
            {/* <S.searchScope className="material-icons">search</S.searchScope> */}
            <S.serachScope src="/modal/search.png"></S.serachScope>
            <S.searchFont1>건물/수업명을 검색하세요</S.searchFont1>
            {/* <S.kumapIcon src="/modal/kumapIcon.png" /> */}
          </>
        ) : (
          <S.searchFont2>{name}</S.searchFont2>
        )}
      </S.first_search_modal>
      <S.myButton>MY</S.myButton>
    </S.top_modal_container>
  );
}
