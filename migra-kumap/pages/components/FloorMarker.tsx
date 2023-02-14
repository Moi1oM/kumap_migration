import { useMemo, useEffect } from "react";
import axios from "axios";
import OverlayView from "./OverlayView";
import { useRecoilState } from "recoil";
import { clickedBuildingState } from "../constants/atom";
import * as S from "@/styles/index/style";
import { MarkerContainer } from "@/styles/entrance/style";

interface FloorMarkerProps {
  map?: google.maps.Map;
}

export default function FloorMarker({ map }: FloorMarkerProps) {
  /*-- 모든 시설 데이터 받기 --*/
  const dataFetch = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/facility_list}`)
      .then((res) => {
        const facility_info = JSON.parse(res.data);
        console.log(facility_info);
      })
      .catch((err) => {
        console.log("에러", err);
      });
  };
  useEffect(() => {
    dataFetch();
  }, []);

  const [clickedBuilding, setclickedBuilding] =
    useRecoilState(clickedBuildingState);
  console.log("-------------------");

  return (
    <>
      {map && clickedBuilding && (
        <OverlayView
          position={{
            lat: clickedBuilding["fields"]["building_lat"] as number,
            lng: clickedBuilding["fields"]["building_lon"] as number,
          }}
          map={map}
          zIndex={20}
        >
          <S.facilityFloor>
            {clickedBuilding["fields"]["building_name"]}
          </S.facilityFloor>
        </OverlayView>
      )}
    </>
  );
}
