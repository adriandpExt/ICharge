import { IndustryCard } from "./type";

export const topSector: IndustryCard[] = [
  {
    title: "HOSPITALITY",
    bgImage: "bg-[url('@/assets/sectors/sectorHospitality.png')]",
  },
  {
    title: "HEALTHCARE",
    bgImage: "bg-[url('@/assets/sectors/sectorHealthcare.jpg')]",
  },
];
export const bottomSector: IndustryCard[] = [
  {
    title: "TRANSPORT",
    bgImage: "bg-[url('@/assets/sectors/sectorTransport.jpg')]",
  },
  {
    title: "EVENTS",
    bgImage: "bg-[url('@/assets/sectors/sectorEvents.jpg')]",
  },
  {
    title: "RETAIL",
    bgImage: "bg-[url('@/assets/sectors/sectorRetail.jpg')]",
  },
];

export const sector: IndustryCard[] = [...topSector, ...bottomSector];
