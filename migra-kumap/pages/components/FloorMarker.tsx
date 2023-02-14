import { useMemo, useEffect, useState } from "react";
import axios from "axios";
import { atom } from "recoil";
import OverlayView from "./OverlayView";
import { useRecoilState } from "recoil";
import { clickedBuildingState, All, isFMarkerClicked } from "../constants/atom";
import * as S from "@/styles/index/style";
import { MarkerContainer } from "@/styles/entrance/style";

interface FloorMarkerProps {
  map?: google.maps.Map;
}

export default function FloorMarker({ map }: FloorMarkerProps) {
  const [facilities, setFacilities] = useState([]);

  /*-- 모든 시설 데이터 받기 --*/
  const dataFetch = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/facility_list`)
      .then((res) => {
        setFacilities(JSON.parse(res.data.facility));
      })
      .catch((err) => {
        console.log("에러", err);
      });
  };
  useEffect(() => {
    dataFetch();
  }, []);

  // console.log(facility_info, "--------");
  const [clickedBuilding, setclickedBuilding] =
    useRecoilState(clickedBuildingState);
  const [activeCate, setActiveCate] = useRecoilState<string>(All);
  const [isFMarkerClicekd, setFMarkerClicekd] =
    useRecoilState(isFMarkerClicked);
  const iconpath_mini = `/category/${activeCate}icon.png`;
  let facility_loc: any = []; //조건에 맞는 시설들 필터링
  let facility_floor = []; //시설들의 층수만 필터링
  let final_floor: string; //화면에 보여줄 최종 층수 데이터

  /*--클릭된 빌딩과 선택된 카테고리에 맞는 시설의 층수 필터링--*/
  if (clickedBuilding) {
    for (let facility of facilities) {
      let temp = facility["fields"];

      if (temp["building_id"] == clickedBuilding["pk"]) {
        if (temp["category"] == activeCate) {
          facility_loc.push(temp["facility_loc"]);
        }
      }
    }

    for (const floor of facility_loc) {
      if (floor.includes("층")) {
        let hint = floor.indexOf("층");
        if (floor.includes("지하")) {
          facility_floor.push("B" + floor[hint - 1]);
        } else {
          facility_floor.push(floor[hint - 1]);
        }
      } else {
        facility_floor.push("*"); //예외처리 (층수표기X)
      }
    }
  }

  facility_floor = Array.from(new Set(facility_floor));
  if (facility_floor.length > 1) {
    final_floor = facility_floor[0] + "F+";
  } else {
    final_floor = facility_floor[0] + "F";
  }

  console.log(facility_floor, "=======");

  return (
    <>
      {map && activeCate && isFMarkerClicekd && clickedBuilding && (
        <OverlayView
          position={{
            lat: clickedBuilding["fields"]["building_lat"] as number,
            lng: clickedBuilding["fields"]["building_lon"] as number,
          }}
          map={map}
          zIndex={20}
        >
          <S.FloorMarkerBox>
            <S.FloorMarkerIcon>
              <S.FloorMarkerImg src={iconpath_mini} />
            </S.FloorMarkerIcon>
            <S.FloorMarkerFont1>
              {clickedBuilding["fields"]["building_name"]}
            </S.FloorMarkerFont1>
            <S.FloorMarkerFont2>{final_floor}</S.FloorMarkerFont2>
          </S.FloorMarkerBox>
        </OverlayView>
      )}
    </>
  );
}
