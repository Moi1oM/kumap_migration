import { atom, atomFamily } from "recoil";

export const ResultModalState = atom({
  key: "ResultModalState",
  default: false,
});

export const timetableState = atom({
  key: "timetableState",
  default: {
    mon: [],
    tue: [],
    wed: [],
    thu: [],
    fri: [],
  },
});

//참고: https://tech.osci.kr/2022/07/05/recoil-react-js-state-management/
