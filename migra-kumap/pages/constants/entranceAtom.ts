import { atom } from "recoil";

export const entranceModalState = atom({
  key: "entranceModal",
  default: false,
});

export const entrancePkState = atom({
  key: "entrancePk",
  default: null,
});

export const entranceNameState = atom({
  key: "entranceName",
  default: "",
});

export const entranceTimeState = atom({
  key: "entranceTime",
  default: "",
});
