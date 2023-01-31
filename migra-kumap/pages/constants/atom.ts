import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: false,
});

export const modalSecondState = atom({
  key: "modalSecondState",
  default: false,
});

export const modalThirdState = atom({
  key: "modalThirdState",
  default: false,
});

export const modalBuildingNameState = atom({
  key: "modalBuildingNameState",
  default: "",
});

export const modalLatState = atom({
  key: "modalLat",
  default: 0,
});

export const modalLonState = atom({
  key: "modalLon",
  default: 0,
});

export const modalPkState = atom({
  key: "modalPk",
  default: 0,
});

export const searchFullState = atom({
  key: "searchFull",
  default: false,
});

export const allBuildingState = atom({
  key: "allbuilding",
  default: [],
});
