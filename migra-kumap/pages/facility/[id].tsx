import { useRouter } from "next/router";
import * as S from "@/styles/facility/style";
import axios from "axios";
import { useEffect, useState } from "react";

import { useRecoilState } from "recoil";
import { isFMarkerClicked } from "../constants/atom";
import FacilityGroup from "../components/facility/FacilityGroup";

const Post = () => {
  const router = useRouter();
  const [pk, setPk] = useState<any>();
  const [name, setName] = useState();
  const [history, setHistory] = useState();
  const [facilities, setFacilities] = useState<any[]>([]);
  const [isFMarkerClicekd, setFMarkerClicked] =
    useRecoilState(isFMarkerClicked);
  const [facList, setFacList] = useState<any[][]>([[], [], [], [], [], [], []]);
  const [buildHistory, setBuildHistory] = useState([]);
  const { id } = router.query;

  const clickedLeft = () => {
    router.push("/index");
    setFMarkerClicked(false);
  };

  const dataFetch = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/v1/facilities/${pk}`)
      .then(function (res) {
        const { data } = res;
        const building = JSON.parse(data.building);
        const facilitie = JSON.parse(data.facilities);
        console.log("buliding", building);
        const splitBuildingHistory = building[0].fields.history.split("\r\n");
        splitBuildingHistory.map((his: any) => his.replace("-", "·"));
        console.log("split", splitBuildingHistory);
        setBuildHistory(splitBuildingHistory);
        console.log("faciliites", facilitie);
        setName(building[0].fields.building_name);
        setFacilities(facilitie);
        let faciList: any[][] = [
          ["열람실/라운지"],
          ["카페"],
          ["식당"],
          ["원스탑"],
          ["인쇄"],
          ["자동책반납기"],
          ["ATM"],
        ];
        for (let i = 0; i < facilitie.length; i++) {
          const facfac: any = facilitie[i];
          if (facfac.fields.category === "lounge") {
            faciList[0].push(facfac);
          } else if (facfac.fields.category === "cafe") {
            faciList[1].push(facfac);
          } else if (facfac.fields.category === "restaurant") {
            faciList[2].push(facfac);
          } else if (facfac.fields.category === "one-stop") {
            faciList[3].push(facfac);
          } else if (facfac.fields.category === "printer") {
            faciList[4].push(facfac);
          } else if (facfac.fields.category === "book_return") {
            faciList[5].push(facfac);
          } else {
            faciList[6].push(facfac);
          }
        }
        console.log("faciList", faciList);
        setFacList(faciList);
      })
      .catch((err) => {
        console.log("에러", err);
      });
  };

  useEffect(() => {
    setPk(id);
    if (pk) {
      dataFetch();
    }
  }, [id, pk]);

  return (
    <>
      <S.middleDiv>
        <S.wrapper>
          <S.titleBox>
            <S.titleHeader>
              <S.BackMarker src="/modal/arrow_left.png" onClick={clickedLeft} />
              <S.BuildingName>{name}</S.BuildingName>
              <br />
            </S.titleHeader>
          </S.titleBox>
          <S.contentBox>
            {buildHistory?.map((hist) => (
              <S.historyP key={hist}>{hist}</S.historyP>
            ))}
            {facList?.map((f) => (
              <FacilityGroup key={f[0]} category={f[0]} facs={f.slice(1)} />
            ))}
            {/* {facilities?.map((fac) => (
              <S.facList key={fac.pk}>
                <div>
                  <S.facName>{fac.fields.facility_name}</S.facName>
                  <S.facCategory>{fac.fields.category}</S.facCategory>
                  <S.facInfo>{fac.fields.facility_loc}</S.facInfo>
                </div>
              </S.facList>
            ))} */}
          </S.contentBox>
        </S.wrapper>
      </S.middleDiv>
    </>
  );
};

export default Post;
