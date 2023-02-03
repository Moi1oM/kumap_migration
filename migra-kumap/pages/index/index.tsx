import Category from "@/components/Category";
import { facilities, buildings, Building, Facility } from "@/src/data";

import {
  useLoadScript,
  GoogleMap,
  MarkerF,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import type { NextPage } from "next";

import { useMemo, useState, useEffect } from "react";
import { All, AllBuilding, IsChoiceLoaded } from "../constants/atom";
import { MarkerContainer } from "@/styles/entrance/style";

import axios from "axios";
import FirstModal from "../components/FirstModal";
import { useRecoilState } from "recoil";
import {
  modalState,
  modalLatState,
  modalLonState,
  modalPkState,
  modalSecondState,
  modalThirdState,
  searchFullState,
  allBuildingState,
} from "@/pages/constants/atom";
import SecondModal from "../components/SecondModal";
import ThirdModal from "../components/ThirdModal";
import SearchBox from "@/pages/components/SearchBox";
import SearchFull from "../components/SearchFull";

const Home: NextPage = () => {
  const [map, setMap] = useState<any>(/** @type google.maps.GoogleMap */ null);
  const libraries = useMemo(() => ["places"], []);
  const mapCenter = useMemo(() => ({ lat: 37.586175, lng: 127.029045 }), []);

  const [buildingdata, setBuildingdata] = useRecoilState(AllBuilding);
  const [activeCate, setActiveCate] = useRecoilState<string>(All);
  const [isChosen, setisChosen] = useRecoilState(IsChoiceLoaded);

  /* 카테고리 마커 관리 */
  const iconPath = `/category/${activeCate}.png`;

  useEffect(() => {
    {
      iconPath && setisChosen(false);
    }
    console.log(iconPath);
    console.log(isChosen);
  });

  const [modalFirst, setModalFirst] = useRecoilState(modalState);
  const [modalSecond, setModalSecond] = useRecoilState(modalSecondState);
  const [modalThird, setModalThird] = useRecoilState(modalThirdState);
  const [modalLat, setModalLat] = useRecoilState(modalLatState);
  const [modalLon, setModalLon] = useRecoilState(modalLonState);
  const [modalPk, setModalPk] = useRecoilState(modalPkState);
  const [searchFull, setSearchFull] = useRecoilState(searchFullState);
  const [buildingList, setBuildingList] = useRecoilState(allBuildingState);
  const sampleMarkers = [
    { lat: 37.586262, lng: 127.027807, pk: 4 },
    { lat: 37.586175, lng: 127.029045, pk: 28 },
    { lat: 37.586296, lng: 127.030746, pk: 3 },
  ];

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
    // map.panTo({ lat: e.fields.building_lat, lng: e.fields.building_lon });
    console.log("e", e);
    // setModalLat(e.fields.building_lat);
    // setModalLon(e.fields.building_lon);
    setModalPk(e.pk);
    setModalFirst(true);
  };

  console.log("bulding", buildingList);

  return (
    <div>
      <GoogleMap
        id="65e8ebc6cdf29142"
        options={mapOptions}
        zoom={16}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: "100%", height: "100vh" }}
        onLoad={(map) => setMap(map)}
      >
        <MarkerF
          position={mapCenter}
          onLoad={() => console.log("Marker Loaded")}
          onClick={(e) => {
            markerClicked(e);
          }}
        />

        {searchFull && <SearchFull></SearchFull>}
        <SearchBox></SearchBox>
        <Category />
        {buildingdata?.map((choiceMarker) => (
          <MarkerContainer key={choiceMarker["id"]}>
            {!isChosen && (
              <MarkerF
                icon={iconPath}
                // icon = {"/category/" + activeCate + ".png"}
                // icon={"/category/cafe.png"}
                position={{
                  lat: choiceMarker["lat"],
                  lng: choiceMarker["lng"],
                }}
                onLoad={() => console.log("Marker Loaded", choiceMarker)}
                onClick={() => {
                  markerClicked(choiceMarker);
                }}
              />
            )}
          </MarkerContainer>
        ))}
        {buildingList?.map((sampleMarker) => (
          <MarkerContainer key={sampleMarker["pk"]}>
            <MarkerF
              position={{
                lat: sampleMarker["fields"]["building_lat"],
                lng: sampleMarker["fields"]["building_lon"],
              }}
              onLoad={() => console.log("Marker Loaded", sampleMarker)}
              onClick={() => {
                markerClicked(sampleMarker);
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
