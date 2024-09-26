import { RouteObject } from "react-router-dom";

interface SubChild extends Omit<RouteObject, "children"> {
  label: string;
  icon: string;
  sublabel: string;
}

interface LinkList extends Omit<RouteObject, "children"> {
  label: string;
  subChild?: SubChild[];
}

export const linkList: LinkList[] = [
  {
    label: "Sectors",
    path: "/sectors",
    subChild: [
      {
        path: "/hospitality",
        label: "Hospitality",
        icon: "ICON",
        sublabel: " Lorem, ipsum dolor sit amet consectetur.",
      },
      {
        path: "/transport",
        label: "Transport",
        icon: "ICON",
        sublabel: " Lorem, ipsum dolor sit amet consectetur.",
      },
      {
        path: "/healthcare",
        label: "Healthcare",
        icon: "ICON",
        sublabel: " Lorem, ipsum dolor sit amet consectetur.",
      },
      {
        path: "/events",
        label: "Events",
        icon: "ICON",
        sublabel: " Lorem, ipsum dolor sit amet consectetur.",
      },
      {
        path: "/retail",
        label: "Retail",
        icon: "ICON",
        sublabel: " Lorem, ipsum dolor sit amet consectetur.",
      },
    ],
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
