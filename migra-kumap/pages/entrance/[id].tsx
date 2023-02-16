import { json } from "stream/consumers";

import { BackMarker, MarkerContainer } from "@/styles/entrance/style";
import {
  GoogleMap,
  Marker,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import {
  entranceModalState,
  entranceNameState,
  entranceTimeState,
} from "../constants/entranceAtom";
import { useRecoilState } from "recoil";
import EntranceModal from "../components/entrance/EntranceModal";

const Post = () => {
  const [map, setMap] = useState<any>(
    /** @type google.mpas.GoogleMap */ //indexMapState
    null
  );
  const [name, setName] = useState();
  const [pk, setPk] = useState<any>();
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [entrances, setEntrances] = useState<any[]>();
  const [schoolj, setSchoolj] = useState();
  const [mapCenter, setMapCenter] = useState();
  const [isMarkerLoaded, setIsMarkerLoaded] = useState(0);
  const [todayHour, setTodayHour] = useState(0);
  const [todayMin, setTodayMin] = useState(0);
  const [entranceName, setEntranceName] = useRecoilState(entranceNameState);
  const [entranceTime, setEntranceTime] = useRecoilState(entranceTimeState);

  const [mapLat, setMapLat] = useState("");
  const [mapLon, setMapLon] = useState("");

  const [entranceModal, setEntranceModal] = useRecoilState(entranceModalState);

  const router = useRouter();
  const { id } = router.query;
  const dataFetch = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/v1/entrances/${pk}`)
      .then(function (res) {
        // console.log(res);
        const entrancesData = res.data;
        console.log("entrances data", entrancesData);
        entrancesData.map((entrance: any) => {
          console.log(
            `entrance/${entrance.entrance_name.substr(0, 1)}.png`,
            entrance.pk
          );
        });
        setName(res.data.building_name_ko);
        setLat(res.data.latitude);
        setLon(res.data.longitude);
        setEntrances(JSON.parse(res.data.entrances));
        setSchoolj(res.data.schoolj);
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
  const todayTime = () => {
    let now = new Date(); // 현재 날짜 및 시간
    let hours = now.getHours();
    let minutes = now.getMinutes();
    setTodayHour(hours);
    setTodayMin(minutes);
    return hours + "시 " + minutes + "분";
  };
  useEffect(() => {
    const today = todayTime();
    console.log(today);
  }, []);

  const libraries = useMemo(() => ["places"], []);
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
  const markerClicked = (ent: any) => {
    console.log(ent);
    setMapLat(ent.fields.entrance_lat);
    setMapLon(ent.fields.entrance_lon);
    setEntranceName(ent.fields.entrance_name);
    setEntranceTime(ent.fields.entrance_time);
    setEntranceModal(true);
    map.panTo({ lat: mapLat, lng: mapLon });
  };
  // console.log(name);
  // console.log(entrances);
  const arrowLeft = () => {
    setEntranceModal(false);
    router.push("/index");
  };

  // useEffect(() => {
  //   map.panTo({ lat: mapLat, lng: mapLon });
  // }, [mapLat, mapLon]);

  return (
    <div>
      <GoogleMap
        id="65e8ebc6cdf29142"
        options={mapOptions}
        zoom={19}
        center={{ lat: lat!, lng: lon! }}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: "100%", height: "100vh" }}
        onLoad={(indexMap) => {
          console.log("googleMap", indexMap);
          setMap(indexMap);
        }}
      >
        {entrances?.map((entrance) => (
          <MarkerContainer key={entrance.pk}>
            <Marker
              icon={`/entrance/${entrance.fields.entrance_name.substr(
                0,
                1
              )}.png`}
              position={{
                lat: entrance.fields.entrance_lat,
                lng: entrance.fields.entrance_lon,
              }}
              onLoad={() => console.log("Marker Loaded")}
              onClick={(e) => {
                markerClicked(entrance);
              }}
            />
          </MarkerContainer>
        ))}
      </GoogleMap>
      <BackMarker src="/modal/arrow_left.png" onClick={arrowLeft} />
      {entranceModal && <EntranceModal></EntranceModal>}
    </div>
  );
};

export default Post;
