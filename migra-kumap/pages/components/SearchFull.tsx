import * as S from "@/styles/index/SearchFull";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  allBuildingState,
  mapState,
  modalPkState,
  modalSecondState,
  modalState,
  modalThirdState,
  searchFullState,
} from "../constants/atom";

export default function SearchFull() {
  const [buildingList, setBuildingList] = useRecoilState(allBuildingState);
  const [fullBuildingList, setFullBuildingList] = useState<any[]>([]);
  const [searchFull, setSearchFull] = useRecoilState(searchFullState);
  const [search, setSearch] = useState("");
  const [modalFirst, setModalFirst] = useRecoilState(modalState);
  const [modalSecond, setModalSecond] = useRecoilState(modalSecondState);
  const [modalThird, setModalThird] = useRecoilState(modalThirdState);
  const [map, setMap] = useState<any>("");
  const [modalPk, setModalPk] = useRecoilState(modalPkState);

  const dataFetch = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/building_list`)
      .then(function (res) {
        const { data } = res;
        console.log("searchfull", data);
        const buliding_info = JSON.parse(data.building);
        console.log("buliding_info", buliding_info);
        setBuildingList(buliding_info);
        setFullBuildingList(buliding_info);
      })
      .catch((err) => {
        console.log("에러", err);
      });
  };
  useEffect(() => {
    dataFetch();
  }, []);
  const closeSearchFull = () => {
    setSearchFull(false);
  };
  useEffect(() => {
    let newBulidings: any[] = [];
    let ss: string = search.toUpperCase();
    for (let i = 0; i < buildingList.length; i++) {
      const n: string = buildingList[i]["fields"]["building_name"];
      if (n.toUpperCase().indexOf(ss) > -1) {
        newBulidings.push(buildingList[i]);
      }
    }
    setFullBuildingList(newBulidings);
  }, [search]);
  const filter = (e: any) => {
    setSearch(e.target.value);
  };

  const moveToFirstModal = (b: any) => {
    console.log("hihi", b);
    setModalSecond(false);
    setModalThird(false);
    //map.panTo({ lat: b.fields.building_lat, lng: b.fields.building_lon });
    setModalPk(b.pk);
    setModalFirst(true);
    setSearchFull(false);
  };

  return (
    <>
      <S.wrapper>
        <S.header>
          <S.closeBtn onClick={closeSearchFull} src="/modal/close_button.png" />
          <h2>목적지 검색</h2>
          <S.inputHere
            id="value"
            onKeyUp={filter}
            type="text"
            placeholder="목적지를 입력해주세요."
          />
        </S.header>
        <S.choice>
          {fullBuildingList?.map((building) => (
            <S.itemDiv key={building["pk"]}>
              <S.buildName
                onClick={() => {
                  moveToFirstModal(building);
                }}
              >
                {building["fields"]["building_name"]}
              </S.buildName>
            </S.itemDiv>
          ))}
        </S.choice>
      </S.wrapper>
    </>
  );
}
