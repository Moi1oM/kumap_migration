/* 문지후 카테고리 마커 임시 테스트용 */

import { NamedTupleMember } from "typescript";

export type Building = {
  id: number;
  name: string;
  lat: number;
  lng: number;
};

export type Facility = {
  id: number;
  name: string;
  category: string;
  building: string;
  floor: string;
};

export const buildings = [
  {
    id: 1,
    name: "운초우선교육관",
    lat: 37.59150613,
    lng: 127.03429957,
  },
  {
    id: 2,
    name: "정경관",
    lat: 37.58709459,
    lng: 127.03041123,
  },
  {
    id: 3,
    name: "과학도서관",
    lat: 37.5845688,
    lng: 127.0265505,
  },
  {
    id: 4,
    name: "신공학관",
    lat: 37.58250949,
    lng: 127.0264242,
  },
  {
    id: 5,
    name: "SK미래관",
    lat: 37.58791381,
    lng: 127.03294209,
  },
  {
    id: 6,
    name: "하나스퀘어",
    lat: 37.5846186,
    lng: 127.0253533,
  },
  {
    id: 7,
    name: "중앙광장(지하)",
    lat: 37.588586,
    lng: 127.033771,
  },
  {
    id: 8,
    name: "교우회관",
    lat: 37.59202602,
    lng: 127.035748,
  },
];

export const facilities = [
  {
    id: 1,
    name: "카페몰리",
    category: "cafe",
    building: "운초우선교육관",
    floor: "1층",
  },
  {
    id: 2,
    name: "프린터",
    category: "printer",
    building: "정경관",
    floor: "2층",
  },
  {
    id: 3,
    name: "델타라운지",
    category: "study",
    building: "과학도서관",
    floor: "지하1층",
  },
  {
    id: 4,
    name: "전수영라운지",
    category: "study",
    building: "운초우선교육관",
    floor: "4층",
  },
  {
    id: 5,
    name: "버거킹(버거)",
    category: "restaurant",
    building: "중앙광장(지하)",
    floor: "지하1층",
  },
  {
    id: 6,
    name: "ATM",
    category: "ATM",
    building: "교우회관",
    floor: "1층",
  },
  {
    id: 7,
    name: "책반납기",
    category: "book-return",
    building: "하나스퀘어",
    floor: "지하1층",
  },
];
