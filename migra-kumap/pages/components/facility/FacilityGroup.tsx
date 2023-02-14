import * as S from "@/styles/facility/FacilityGroup";
import TitleAndName from "./TitleAndName";

export default function FacilityGroup({
  category,
  facs,
}: {
  category: string;
  facs: any[];
}) {
  console.log("group", category, facs);
  if (facs.length > 0) {
    return (
      <>
        <S.cateH4>{category}</S.cateH4>
        {facs.map((fac) => (
          <TitleAndName
            title={fac.fields.facility_name}
            name={fac.fields.facility_loc}
          />
        ))}
      </>
    );
  } else {
    return <></>;
  }
}
