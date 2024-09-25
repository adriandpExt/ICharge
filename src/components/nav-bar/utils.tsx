import { RouteObject } from "react-router-dom";

interface LinkList extends Omit<RouteObject, "children"> {
  label: string;
}

export const linkList: LinkList[] = [
  {
    label: "Sectors",
    path: "/sectors",
  },
  {
    label: "Partner with Us",
    path: "/partner",
  },
  { label: "Sustainability", path: "/sustainability" },
  {
    label: "News",
    path: "/news",
  },
  { label: "Customer Service", path: "/faqs" },
];

export const language = [
  {
    id: "en",
    icons: "ic_uk_flag",
    label: "En",
  },
  {
    id: "ph",
    icons: "ic_ph_flag",
    label: "Ph",
  },
];
