import { useRouter } from "next/router";
import * as S from "@/styles/facility/style";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { isFMarkerClicked } from "../constants/atom";

const Post = () => {
  const router = useRouter();
  const [pk, setPk] = useState<any>();
  const [name, setName] = useState();
  const [history, setHistory] = useState();
  const [facilities, setFacilities] = useState<any[]>([]);
  const [isFMarkerClicekd, setFMarkerClicked] =
    useRecoilState(isFMarkerClicked);
  const { id } = router.query;

  const clickedLeft = () => {
    router.push("/index");
    setFMarkerClicked(false);
  };

  const dataFetch = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/facility/${pk}`)
      .then(function (res) {
        const { data } = res;
        const building = JSON.parse(data.building);
        const facilitie = JSON.parse(data.facilities);
        // console.log("buliding", building);
        // console.log("faciliites", facilitie);
        setName(building[0].fields.building_name);
        setHistory(building[0].fields.history);
        setFacilities(facilitie);
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

  return (
    <>
      <S.middleDiv>
        <S.wrapper>
          <S.titleBox>
            <S.titleHeader>
              <S.BackMarker src="/modal/arrow_left.png" onClick={clickedLeft} />
              <h2>{name}</h2>
              <br />
            </S.titleHeader>
          </S.titleBox>
          <S.contentBox>
            <S.historyP>{history}</S.historyP>
            {facilities?.map((fac) => (
              <S.facList key={fac.pk}>
                <div>
                  <S.facName>{fac.fields.facility_name}</S.facName>
                  <S.facCategory>{fac.fields.category}</S.facCategory>
                  <S.facInfo>{fac.fields.facility_loc}</S.facInfo>
                </div>
              </S.facList>
            ))}
          </S.contentBox>
        </S.wrapper>
      </S.middleDiv>
    </>
  );
};

export default Post;
