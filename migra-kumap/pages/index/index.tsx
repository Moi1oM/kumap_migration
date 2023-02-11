import FirstModal from "../components/FirstModal";
import SecondModal from "../components/SecondModal";
import ThirdModal from "../components/ThirdModal";
import SearchBox from "@/pages/components/SearchBox";
import SearchFull from "../components/SearchFull";
import SecondSearchFull from "../components/SecondSearchFull";
import Category from "@/pages/components/Category";

import { choice } from "@/styles/index/SearchFull";
import { MarkerContainer } from "@/styles/entrance/style";

import axios from "axios";
import { useRecoilState } from "recoil";
import type { NextPage } from "next";
import { useMemo, useState, useEffect } from "react";

import {
  useLoadScript,
  GoogleMap,
  MarkerF,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import {
  All,
  IsChoiceLoaded,
  fromModalPkState,
  indexMapState,
  mapState,
  secondSearchState,
  cateBuildingState,
  modalState,
  modalLatState,
  modalLonState,
  modalPkState,
  modalSecondState,
  modalThirdState,
  searchFullState,
  allBuildingState,
  AllFacilityState,
} from "../constants/atom";

const Home: NextPage = () => {
  const [map, setMap] = useState<any>(
    /** @type google.mpas.GoogleMap */ //indexMapState
    null
  );
  const libraries = useMemo(() => ["places"], []);
  const mapCenter = useMemo(() => ({ lat: 37.586175, lng: 127.029045 }), []);

  /*-- 카테고리 마커 관리 --*/
  const [activeCate, setActiveCate] = useRecoilState<string>(All);
  const [isChosen, setisChosen] = useRecoilState(IsChoiceLoaded);
  const iconPath = `/category/${activeCate}.png`;

  useEffect(() => {
    {
      iconPath && setisChosen(false);
    }
    // console.log(iconPath);
    // console.log(isChosen);
  });

  /*-- 모달 관리 --*/
  const [modalFirst, setModalFirst] = useRecoilState(modalState);
  const [modalSecond, setModalSecond] = useRecoilState(modalSecondState);
  const [modalThird, setModalThird] = useRecoilState(modalThirdState);
  const [modalLat, setModalLat] = useRecoilState(modalLatState);
  const [modalLon, setModalLon] = useRecoilState(modalLonState);
  const [modalPk, setModalPk] = useRecoilState(modalPkState);
  const [fromModalPk, setFromModalPk] = useRecoilState(fromModalPkState);

  /*-- 검색 관리 --*/
  const [searchFull, setSearchFull] = useRecoilState(searchFullState);
  const [secondSearchFull, setSecondSearchFull] =
    useRecoilState(secondSearchState);

  /*-- 데이터 관리 --*/
  const [buildingList, setBuildingList] = useRecoilState(allBuildingState); //모든 건물
  const [cateBuilding, setCateBuilding] = useRecoilState(cateBuildingState); //카테고리에 선택된 건물
  //확인용 console.log("building", buildingList);

  /*-- 구글맵 띄우기 --*/
  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLEMAPAPIKEY as string,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }
  const markerClicked = (e: any) => {
    setModalSecond(false);
    setModalThird(false);
    map.panTo({ lat: e.fields.building_lat, lng: e.fields.building_lon });
    // setModalLon(e.fields.building_lon);
    setModalPk(e.pk);
    setModalFirst(true);
  };

  return (
    <div>
      <GoogleMap
        id="65e8ebc6cdf29142"
        options={mapOptions}
        zoom={16}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: "100%", height: "100vh" }}
        onLoad={(indexMap) => {
          console.log("googleMap", indexMap);
          setMap(indexMap);
        }}
      >
        {searchFull && <SearchFull indexMap={map}></SearchFull>}
        {secondSearchFull && <SecondSearchFull></SecondSearchFull>}
        <SearchBox></SearchBox>
        <Category />

        {cateBuilding.length !== 0
          ? cateBuilding.map((choiceMarker) => (
              <MarkerContainer key={choiceMarker["pk"]}>
                {!isChosen && (
                  <MarkerF
                    icon={iconPath}
                    position={{
                      lat: choiceMarker["fields"]["building_lat"],
                      lng: choiceMarker["fields"]["building_lon"],
                    }}
                    onLoad={() => console.log("Marker Loaded", choiceMarker)}
                    onClick={() => {
                      markerClicked(choiceMarker);
                    }}
                  />
                )}
              </MarkerContainer>
            ))
          : buildingList.map((basicMarker) => (
              <MarkerContainer key={basicMarker["pk"]}>
                <MarkerF
                  icon={"/category/basic.png"}
                  position={{
                    lat: basicMarker["fields"]["building_lat"],
                    lng: basicMarker["fields"]["building_lon"],
                  }}
                  onLoad={() => console.log("Marker Loaded", basicMarker)}
                  onClick={() => {
                    markerClicked(basicMarker);
                  }}
                />
              </MarkerContainer>
            ))}
      </GoogleMap>

      {modalFirst && <FirstModal></FirstModal>}
      {modalSecond && <SecondModal></SecondModal>}
      {modalThird && <ThirdModal></ThirdModal>}
    </div>
  );
};

export default Home;
