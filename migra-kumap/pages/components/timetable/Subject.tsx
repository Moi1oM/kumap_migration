import * as S from "./style";

export interface SubjectProps {
  name: string;
  prof: string;
  lecplace: string;
  randomColor: number;
}
export default function Subject({
  name,
  prof,
  lecplace,
  randomColor,
}: SubjectProps) {
  return (
    <S.SubjectCell
      style={{
        backgroundColor: randomColor == 1 ? "#DF5C5C" : "#FB7C7C",
      }}
    >
      <S.Subjectname>{name}</S.Subjectname>
      <S.Profname>{prof}</S.Profname>
      <S.Lecplace>{lecplace}</S.Lecplace>
    </S.SubjectCell>
  );
}
