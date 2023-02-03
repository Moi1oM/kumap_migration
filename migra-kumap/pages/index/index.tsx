import Category from "@/components/Category";
import { facilities, buildings, Building, Facility } from "@/src/data";
import { useRecoilState } from "recoil";
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

const Home: NextPage = () => {
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
    console.log(e);
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
        onLoad={() => console.log("Map Component Loaded...")}
      >
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

        <MarkerF
          position={mapCenter}
          onLoad={() => console.log("Marker Loaded")}
          onClick={(e) => {
            markerClicked(e);
          }}
        />
      </GoogleMap>
    </div>
  );
};

export default Home;
