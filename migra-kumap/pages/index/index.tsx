import FirstModal from "../components/FirstModal";
import SecondModal from "../components/SecondModal";
import ThirdModal from "../components/ThirdModal";
import SearchBox from "@/pages/components/SearchBox";
import SearchFull from "../components/SearchFull";
import SecondSearchFull from "../components/SecondSearchFull";
import Category from "@/pages/components/Category/Category";
import loading from "@/public/lotties/loading.json";
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
  walkTimeModalState,
  walkToSearchFullState,
  clickedBuildingState,
  isFMarkerClicked,
  IsFloorLoaded,
  IsOverlayLoaded,
} from "../constants/atom";
import WalkTimeModal from "../components/WalkTimeModal";
import ToSearchFull from "../components/ToSearchFull";
import FloorMarker from "../components/FloorMarker";
import Lottie from "react-lottie-player";
import { relative } from "path";
import { AnimatePresence, motion } from "framer-motion";

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
  const [isFloor, setIsFloor] = useRecoilState(IsFloorLoaded);
  const [isOverlay, setIsOverlay] = useRecoilState(IsOverlayLoaded);

  useEffect(() => {
    {
      iconPath && setisChosen(false);
    }
    {
      isFloor && setIsOverlay(false);
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
  const [walkTimeModal, setWalkTimeModal] = useRecoilState(walkTimeModalState);
  const [toSearchFull, setToSearchFull] = useRecoilState(walkToSearchFullState);
  const [clicekdBuilding, setclickedBuilding] =
    useRecoilState(clickedBuildingState);
  const [isFMarkerClicekd, setFMarkerClicekd] =
    useRecoilState(isFMarkerClicked);

  /*-- 검색 관리 --*/
  const [searchFull, setSearchFull] = useRecoilState(searchFullState);
  const [secondSearchFull, setSecondSearchFull] =
    useRecoilState(secondSearchState);

  /*-- 데이터 관리 --*/
  const [buildingList, setBuildingList] = useRecoilState(allBuildingState); //모든 건물
  const [cateBuilding, setCateBuilding] = useRecoilState(cateBuildingState); //카테고리에 선택된 건물

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
    return (
      <Lottie
        loop
        animationData={loading}
        play
        style={{ width: 150, height: 150 }}
      />
    );
  }
  const markerClicked = (e: any) => {
    console.log("초이스마커확인", e);
    map.zoom = 18;
    setModalSecond(false);
    setModalThird(false);
    map.panTo({ lat: Number(e.latitude), lng: Number(e.longitude) });
    // setModalLon(e.fields.building_lon);
    setModalPk(e.id);
    setModalFirst(true);
    setclickedBuilding(e);
    setFMarkerClicekd(true);
    setIsOverlay(true);
  };

  return (
    <div style={{ position: "relative" }}>
      {!searchFull && <Category />}
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
        <AnimatePresence>
          {searchFull && (
            <motion.div
              style={{ zIndex: 40 }}
              initial={{ y: 2000, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 2000, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SearchFull indexMap={map}></SearchFull>
            </motion.div>
          )}
        </AnimatePresence>

        {secondSearchFull && <SecondSearchFull></SecondSearchFull>}
        {toSearchFull && <ToSearchFull></ToSearchFull>}
        {!searchFull && <SearchBox></SearchBox>}

        {!isOverlay && <FloorMarker map={map} />}

        {cateBuilding.length !== 0
          ? cateBuilding.map((choiceMarker) => (
              <MarkerContainer key={choiceMarker["id"]}>
                {!isChosen && (
                  <div style={{ animation: "${fadein} 1s 1s forwards" }}>
                    <MarkerF
                      icon={iconPath}
                      position={{
                        lat: Number(choiceMarker["latitude"]),
                        lng: Number(choiceMarker["longitude"]),
                      }}
                      onLoad={() => console.log("Marker Loaded", choiceMarker)}
                      onClick={() => {
                        markerClicked(choiceMarker);
                      }}
                    />
                  </div>
                )}
              </MarkerContainer>
            ))
          : buildingList.map((basicMarker) => (
              <MarkerContainer key={basicMarker["id"]}>
                <MarkerF
                  icon={"/category/basic.png"}
                  position={{
                    lat: Number(basicMarker["latitude"]),
                    lng: Number(basicMarker["longitude"]),
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
      {walkTimeModal && <WalkTimeModal></WalkTimeModal>}
    </div>
  );
};

export default Home;
