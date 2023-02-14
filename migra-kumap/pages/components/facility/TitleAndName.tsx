import * as S from "@/styles/facility/FacilityGroup";

export default function TitleAndName({
  title,
  name,
}: {
  title: string;
  name: string;
}) {
  return (
    <>
      <S.CateTitle>{title}</S.CateTitle>
      <S.CateLocation>{name}</S.CateLocation>
      <S.DivideLine></S.DivideLine>
    </>
  );
}
