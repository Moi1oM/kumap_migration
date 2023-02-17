import { useRouter } from "next/router";
import * as S from "@/styles/facility/style";
import axios from "axios";
import { useEffect, useState } from "react";

import { useRecoilState } from "recoil";
import { isFMarkerClicked } from "../constants/atom";
import FacilityGroup from "../components/facility/FacilityGroup";
import styled from "styled-components";

const Post = () => {
  const router = useRouter();
  const [pk, setPk] = useState<any>();
  const [name, setName] = useState();
  const [buildName, setBuildName] = useState("");
  const [history, setHistory] = useState();
  const [facilities, setFacilities] = useState<any[]>([]);
  const [zeroFac, setZeroFac] = useState(false);
  const [zeroHist, setZeroHist] = useState(false);
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
    console.log("pk", pk);
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/v1/buildings/${pk}`)
      .then((res) => {
        console.log("v1", res);
        const build_name = res.data.building_name_ko;
        setName(build_name);
        const hist = res.data.history;
        if (hist) {
          setZeroHist(false);
        } else {
          setZeroHist(true);
        }
        console.log("hist", hist);
        const splitBuildingHistory = hist.split("\n");
        console.log("split", splitBuildingHistory);
        setBuildHistory(splitBuildingHistory);
        setBuildName(build_name);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_API_SERVER_URL}/v1/facilities?building=${buildName}`;
    console.log(url);
    axios
      .get(url)
      .then((res) => {
        const { data } = res;
        console.log("newdata", data);
        if (data.length === 0) {
          setZeroFac(true);
        } else {
          setZeroFac(false);
        }
        let faciList: any[][] = [
          ["열람실/라운지"],
          ["카페"],
          ["식당"],
          ["원스탑"],
          ["인쇄"],
          ["자동책반납기"],
          ["ATM"],
        ];
        for (let i = 0; i < data.length; i++) {
          const facfac: any = data[i];
          if (facfac.facility_category === "lounge") {
            faciList[0].push(facfac);
          } else if (facfac.facility_category === "cafe") {
            faciList[1].push(facfac);
          } else if (facfac.facility_category === "restaurant") {
            faciList[2].push(facfac);
          } else if (facfac.facility_category === "one-stop") {
            faciList[3].push(facfac);
          } else if (facfac.facility_category === "printer") {
            faciList[4].push(facfac);
          } else if (facfac.facility_category === "book_return") {
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
  }, [buildName]);

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
            {zeroHist && <S.noHist>수집된 건물 정보가 없습니다.</S.noHist>}
            {facList?.map((f) => (
              <FacilityGroup key={f[0]} category={f[0]} facs={f.slice(1)} />
            ))}
            {zeroFac && <S.noFac>수집된 시설 정보가 없습니다.</S.noFac>}
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
