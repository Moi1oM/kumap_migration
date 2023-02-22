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
import {
  clickedBuildingState,
  modalBuildingNameState,
} from "../constants/atom";

const Post = () => {
  const [map, setMap] = useState<any>(
    /** @type google.mpas.GoogleMap */ //indexMapState
    null
  );
  const [name, setName] = useState(); //클릭된 빌딩 이름
  const [pk, setPk] = useState<any>(); //클릭된 빌딩 pk
  const [clickedBuildilng, setClickedBuilding] =
    useRecoilState(clickedBuildingState);

  const [lat, setLat] = useState(); // 클릭된 빌딩 위도
  const [lon, setLon] = useState(); // 클릭된 빌딩 경도
  const [entrances, setEntrances] = useState<any[]>(); // 클릭된 빌딩에 속하는 출입구 객체들
  const [mapCenter, setMapCenter] = useState();
  const [isMarkerLoaded, setIsMarkerLoaded] = useState(0);
  const [todayHour, setTodayHour] = useState(0);
  const [todayMin, setTodayMin] = useState(0);
  const [entranceName, setEntranceName] = useRecoilState(entranceNameState); // 클릭된 출입구 이름
  const [entranceTime, setEntranceTime] = useRecoilState(entranceTimeState); // 클릭된 출입구 시간

  const [mapLat, setMapLat] = useState(""); // 출입구 위도
  const [mapLon, setMapLon] = useState(""); // 출입구 경도

  const [entranceModal, setEntranceModal] = useRecoilState(entranceModalState); // 출입구 클릭 때의 모달
  const [buildingname, buildingSetName] = useRecoilState(
    modalBuildingNameState
  ); // 클릭된 빌딩에 이름
  console.log(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/v1/entrances/${buildingname}`
  );
  const router = useRouter();
  const { id } = router.query;

  // const dataFetch1 = async () => {
  //   await axios.get();
  // };

  const dataFetch2 = async () => {
    await axios
      .get(
        `${process.env.NEXT_PUBLIC_API_SERVER_URL}/v1/entrances/all?building=${buildingname}`
      )
      .then(function (res) {
        const entrancesData = res.data;
        console.log("entrancesData", entrancesData); //출입구 객체 배열
        entrancesData.map((entrance: any) => {
          console.log(
            `entrance/${entrance.entrance_loc.substr(0, 1)}.png`,
            entrance.id
          );
        });
        console.log("-------", clickedBuildilng);
        setName(clickedBuildilng!["building_name_ko"]);
        setLat(clickedBuildilng!["latitude"]); // 클릭된 건물 위도
        setLon(clickedBuildilng!["longitude"]); // 클릭된 건물 경도
        setEntrances(entrancesData); //개별 출입구가 아니라 빌딩에 해당하는 출입구들이구나
      })
      .catch((err) => {
        console.log("에러", err);
      });
  };
  useEffect(() => {
    setPk(id);
    if (pk) {
      // dataFetch1();
      dataFetch2();
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
    setMapLat(ent.latitude);
    setMapLon(ent.longtitude);
    setEntranceName(ent.entrance_loc);
    setEntranceTime(ent.time);
    setEntranceModal(true);
    map.panTo({ lat: Number(mapLat), lng: Number(mapLon) });
  };
  // console.log(name);
  // console.log(entrances);
  const arrowLeft = () => {
    setEntranceModal(false);
    router.push("/index");
  };

  return (
    <div>
      <GoogleMap
        id="65e8ebc6cdf29142"
        options={mapOptions}
        zoom={19}
        center={{ lat: Number(lat!), lng: Number(lon!) }}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: "100%", height: "100vh" }}
        onLoad={(indexMap) => {
          console.log("googleMap", indexMap);
          setMap(indexMap);
        }}
      >
        {entrances?.map((entrance) => (
          <MarkerContainer key={entrance.id}>
            <Marker
              icon={`/entrance/${entrance.entrance_loc.substr(0, 1)}.png`}
              position={{
                lat: Number(entrance.latitude),
                lng: Number(entrance.longitude),
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
