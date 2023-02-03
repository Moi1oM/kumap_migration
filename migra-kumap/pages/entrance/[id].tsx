import axios from "axios";
import { useRouter } from "next/router";
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
>>>>>>> 187b2ad9e680e602164b54449fd19fa6e9d90dc2

const Post = () => {
  const [name, setName] = useState();
  const [pk, setPk] = useState<any>();
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [entrances, setEntrances] = useState<any[]>();
  const [schoolj, setSchoolj] = useState();
  const [mapCenter, setMapCenter] = useState();
  const [isMarkerLoaded, setIsMarkerLoaded] = useState(0);
  const router = useRouter();
  const { id } = router.query;
  const dataFetch = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/entrance/${pk}`)
      .then(function (res) {
        console.log(res);
        setName(res.data.buildingName);
        setLat(res.data.building_lat);
        setLon(res.data.building_lon);
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



  fetch('https:/ku-map.com/detail_ajax/2')
    .then((res) => res.json())
    .then((data) => console.log(JSON.stringify(data)))

  // 2트 - 이건 그냥 다른 도메인으로 연결
  // axios.get('/api/2')
  //   .then(res => {
  //     console.log(res.data)
  //   })

  return <p>Entrance: {id}</p>;
  if (!isLoaded) {
    return <p>Loading...</p>;
  }
  const markerClicked = (e: any) => {
    console.log(e);
  };
  console.log(name);
  console.log(entrances);
  const arrowLeft = () => {
    router.push("/index");
  };
  return (
    <div>
      <GoogleMap
        id="65e8ebc6cdf29142"
        options={mapOptions}
        zoom={19}
        center={{ lat: lat!, lng: lon! }}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: "100%", height: "100vh" }}
        onLoad={() => console.log("Map Component Loaded...")}
      >
        {entrances?.map((entrance) => (
          <MarkerContainer key={entrance.pk}>
            <Marker
              position={{
                lat: entrance.fields.entrance_lat,
                lng: entrance.fields.entrance_lon,
              }}
              onLoad={() => console.log("Marker Loaded")}
              onClick={(e) => {
                markerClicked(e);
              }}
            />
          </MarkerContainer>
        ))}
      </GoogleMap>
      <BackMarker src="/modal/arrow_left.png" onClick={arrowLeft} />
    </div>
  );
};

export default Post;
