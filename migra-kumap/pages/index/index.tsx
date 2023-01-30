import { MarkerContainer } from "@/styles/entrance/style";
import {
  useLoadScript,
  GoogleMap,
  MarkerF,
  Marker,
} from "@react-google-maps/api";
import type { NextPage } from "next";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import FirstModal from "../components/FirstModal";
import { useRecoilState } from "recoil";
import {
  modalState,
  modalLatState,
  modalLonState,
  modalPkState,
} from "@/pages/constants/atom";
const Home: NextPage = () => {
  const libraries = useMemo(() => ["places"], []);
  const mapCenter = useMemo(() => ({ lat: 37.586175, lng: 127.029045 }), []);
  const [modalFirst, setModalFirst] = useRecoilState(modalState);
  const [modalLat, setModalLat] = useRecoilState(modalLatState);
  const [modalLon, setModalLon] = useRecoilState(modalLonState);
  const [modalPk, setModalPk] = useRecoilState(modalPkState);
  console.log(mapCenter);
  const sampleMarkers = [
    { lat: 37.586262, lng: 127.027807, pk: 4 },
    { lat: 37.586175, lng: 127.029045, pk: 2 },
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
    console.log("e", e);
    setModalLat(e.lat);
    setModalLon(e.lng);
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
        onLoad={() => console.log("Map Component Loaded...")}
      >
        {sampleMarkers?.map((sampleMarker) => (
          <MarkerContainer key={sampleMarker.lat}>
            <MarkerF
              position={{ lat: sampleMarker.lat, lng: sampleMarker.lng }}
              onLoad={() => console.log("Marker Loaded", sampleMarker)}
              onClick={() => {
                markerClicked(sampleMarker);
              }}
            />
          </MarkerContainer>
        ))}
      </GoogleMap>
      {modalPk && <FirstModal></FirstModal>}
    </div>
  );
};

export default Home;
