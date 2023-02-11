import Category from "@/components/Category";

import {
  useLoadScript,
  GoogleMap,
  MarkerF,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import type { NextPage } from "next";

import { useMemo, useState, useEffect } from "react";
import {
  All,
  IsChoiceLoaded,
  fromModalPkState,
  indexMapState,
  mapState,
  secondSearchState,
  cateBuildingState,
} from "../constants/atom";
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
  AllFacilityState,
} from "@/pages/constants/atom";
import SecondModal from "../components/SecondModal";
import ThirdModal from "../components/ThirdModal";
import SearchBox from "@/pages/components/SearchBox";
import SearchFull from "../components/SearchFull";
import SecondSearchFull from "../components/SecondSearchFull";
import { choice } from "@/styles/index/SearchFull";

const Home: NextPage = () => {
  const [map, setMap] = useState<any>(
    /** @type google.mpas.GoogleMap */ //indexMapState
    null
  );
  const libraries = useMemo(() => ["places"], []);
  const mapCenter = useMemo(() => ({ lat: 37.586175, lng: 127.029045 }), []);

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
  const [fromModalPk, setFromModalPk] = useRecoilState(fromModalPkState);
  const [searchFull, setSearchFull] = useRecoilState(searchFullState);
  const [secondSearchFull, setSecondSearchFull] =
    useRecoilState(secondSearchState);
  const [buildingList, setBuildingList] = useRecoilState(allBuildingState);
  const [cateBuilding, setCateBuilding] = useRecoilState(cateBuildingState);
  const [facilities, setFacilities] = useRecoilState(AllFacilityState);

  const dataFetch = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/facility_list`)
      .then(function (res) {
        const { data } = res;
        const facility_info = JSON.parse(data.facility);
        setFacilities(facility_info);
      })
      .catch((err) => {
        console.log("에러", err);
      });
  };
  useEffect(() => {
    dataFetch();
  }, []);

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

  console.log("facility", facilities);
  console.log("building", buildingList);

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
