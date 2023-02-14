import { atom } from "recoil";

export const All = atom<string>({
  key: "All",
  default: "",
});

export const IsChoiceLoaded = atom<boolean>({
  key: "isChoiceLoaded",
  default: false,
});

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

export const cateBuildingState = atom({
  key: "catebuilding",
  default: [],
});

export const mapState = atom({
  key: "map",
  default: null,
});

export const secondSearchState = atom({
  key: "secondSearch",
  default: false,
});

export const fromModalPkState = atom({
  key: "fromModalPk",
  default: null,
});

export const AllFacilityState = atom({
  key: "allfacility",
  default: [],
});

export const indexMapState = atom({
  key: "indexMap",
  default: null,
});

export const myModalState = atom({
  key: "myModal",
  default: false,
});

export const walkTimeModalState = atom({
  key: "walkTimeModal",
  default: false,
});

export const walkToBuildPkState = atom({
  key: "walkToBulidPk",
  default: null,
});

export const walkToSearchFullState = atom({
  key: "walkToSearchFull",
  default: false,
});

export const clickedBuildingState = atom({
  key: "clickedBuilding",
  default: null,
});

export const isFMarkerClicked = atom({
  key: "isMarkerClicked",
  default: false,
});
