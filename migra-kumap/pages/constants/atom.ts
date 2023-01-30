import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: false,
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
