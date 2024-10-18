import { IndustryCard } from "./type";
import sectorHospital from "@/assets/sectors/sectorHospitality.png";
import sectorHealthCare from "@/assets/sectors/sectorHealthcare.jpg";
import sectorTransport from "@/assets/sectors/sectorTransport.jpg";
import sectorEvents from "@/assets/sectors/sectorEvents.jpg";
import sectorRetail from "@/assets/sectors/sectorRetail.jpg";

export const topSector: IndustryCard[] = [
  {
    title: "HOSPITALITY",
    bgImage: sectorHospital,
  },
  {
    title: "HEALTHCARE",
    bgImage: sectorHealthCare,
  },
];
export const bottomSector: IndustryCard[] = [
  {
    title: "TRANSPORT",
    bgImage: sectorTransport,
  },
  {
    title: "EVENTS",
    bgImage: sectorEvents,
  },
  {
    title: "RETAIL",
    bgImage: sectorRetail,
  },
];

export const sector: IndustryCard[] = [...topSector, ...bottomSector];
