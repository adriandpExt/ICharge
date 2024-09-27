import { HexGridProps } from "./type";

export const sectorsDesktop: HexGridProps[] = [
  { name: "HEALTHCARE", q: 0, r: 0, s: 0, navigation: "healthcare" },
  { name: "RETAIL", q: 1, r: 0, s: -1, navigation: "retail" },
  { name: "EVENTS", q: 0, r: -1, s: 1, navigation: "events" },
  { name: "TRANSPORT", q: -1, r: 0, s: 1, navigation: "transport" },
  { name: "HOSPITALITY", q: -2, r: 1, s: 1, navigation: "hospitality" },
  { name: "", q: -2, r: 0, s: 1 },
  { name: "", q: 0, r: 1, s: 1 },
  { name: "", q: 0, r: 1, s: -1 },
  { name: "", q: -1, r: 1, s: 0 },
  { name: "", q: 1, r: -1, s: 0 },
  { name: "", q: -1, r: -1, s: 2 },
  { name: "", q: 0, r: -2, s: 2 },
];

export const sectorMobile: HexGridProps[] = [
  { name: "HEALTHCARE", q: 0, r: -1, s: 1 },
  { name: "RETAIL", q: 0, r: -2, s: 2 },
  { name: "EVENTS", q: 0, r: 0, s: 0 },
  { name: "TRANSPORT", q: 0, r: 1, s: -1 },
  { name: "HOSPITALITY", q: 0, r: 2, s: -2 },
];
