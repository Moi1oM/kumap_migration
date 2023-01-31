import { Container, ImageCont } from "styles/index/style";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { allBuildingState } from "./constants/atom";

export default function Home() {
  const [buildingList, setBuildingList] = useRecoilState(allBuildingState);
  const [value, setValue] = useState("");
  const router = useRouter();

  const dataFetch = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/building_list`)
      .then(function (res) {
        const { data } = res;
        console.log("searchfull", data);
        const buliding_info = JSON.parse(data.building);
        console.log("buliding_info", buliding_info);
        setBuildingList(buliding_info);
      })
      .catch((err) => {
        console.log("에러", err);
      });
  };
  useEffect(() => {
    dataFetch();
  }, []);

  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Container>
        <input onChange={onChange}></input>
        <br />
        {/* <Link legacyBehavior href="/entrance/15"> */}
        <a onClick={() => router.push(`entrance/${value}`)}>
          Go to entrance/{value}.js
        </a>
        {/* </Link> */}
        <br />
        <a onClick={() => router.push(`facility/${value}`)}>
          Go to facility/{value}.js
        </a>
        <br />
        <a onClick={() => router.push("index")}>Go to googlemap</a>
        <br />
        <ImageCont src="https://demo.malgnlms.com/data/file/9cb1c1fa3b25fef4d2a9d9c7f5923780.jpg" />
      </Container>
    </>
  );
}
