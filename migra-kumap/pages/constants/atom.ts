import { Building, buildings, Facility } from "@/src/data";
import { atom } from "recoil";

export const AllBuilding = atom<Building[]>({
  key: "AllBuilding",
  default: buildings,
});

export const All = atom<string>({
  key: "All",
  default: "basic",
});

export const IsChoiceLoaded = atom<boolean>({
  key: "isChoiceLoaded",
  default: false,
});
