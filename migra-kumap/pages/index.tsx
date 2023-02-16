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
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/v1/buildings/all`,
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/v1/facilities`,
  ];

  const [value, setValue] = useState("");
  const router = useRouter();

  const requests = api_urls.map((url) => axios.get(url));
  const dataFetch = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/v1/buildings/all`)
      .then(function (res) {
        const { data } = res;
        //console.log("searchfull", data);
        const buliding_info = data;
        //console.log("buliding_info", buliding_info);
        setBuildingList(buliding_info);
      })
      .catch((err) => {
        console.log("에러", err);
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
