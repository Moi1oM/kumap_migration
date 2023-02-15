import styled from "styled-components";

export default function Subject({
  title,
  prof,
  day,
  star,
}: {
  title: string;
  prof: string;
  day: string;
  star: string;
}) {
  return (
    <SubjectDiv>
      <ColumnDiv>
        <SubjectTitle>{title}</SubjectTitle>
        <SubjectProf>{prof}</SubjectProf>
        <SubjectText>{day}</SubjectText>
      </ColumnDiv>
      <ColumnDiv>
        <SubjectStar src={`/stars/${star}.png`} />
        <SubjectText>sth...</SubjectText>
      </ColumnDiv>
    </SubjectDiv>
  );
}

const SubjectDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;
  margin-top: 15px;
  align-items: flex-start;
`;

const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const SubjectTitle = styled.h5`
  font-size: 80%;
`;

const SubjectProf = styled.p`
  font-size: 70%;
`;

const SubjectText = styled.p`
  font-size: 65%;
`;

const SubjectStar = styled.img`
  width: 100px;
  height: calc(widht / 5);
`;
