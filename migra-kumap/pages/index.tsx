import { Container, ImageCont } from "styles/index/style";
import { useRecoilState } from "recoil";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import { allBuildingState, AllFacilityState } from "./constants/atom";

export default function Home() {
  const [buildingList, setBuildingList] = useRecoilState(allBuildingState);
  const [facilities, setFacilities] = useRecoilState(AllFacilityState);

  const api_urls = [
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/building_list`,
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/facility_list`,
  ];

  const [value, setValue] = useState("");
  const router = useRouter();

  const requests = api_urls.map((url) => axios.get(url));
  const dataFetch = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/building_list`)
      .then(function (res) {
        const { data } = res;
        //console.log("searchfull", data);
        const buliding_info = JSON.parse(data.building);
        //console.log("buliding_info", buliding_info);
        setBuildingList(buliding_info);
      })
      .catch((err) => {
        console.log("에러", err);

        // axios.all(requests).then((res) => {
        //   res.forEach((item) => {
        //     if (item.data.building) {
        //       const building_info = JSON.parse(item.data.building);
        //       console.log(building_info);
        //       setBuildingList(building_info);
        //     }
        //     if (item.data.facility) {
        //       const facility_info = JSON.parse(item.data.facility);
        //       console.log(facility_info);
        //       setFacilities(facility_info);
        //     }

        //   });
      });
  };

  useEffect(() => {
    dataFetch();
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => {
      router.push("/index");
    }, 3000);
  });

  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Container>
        <ImageCont src="start.png" />
      </Container>
    </>
  );
}
