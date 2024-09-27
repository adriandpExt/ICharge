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
        path: "/sectors/hospitality",
        label: "Hospitality",
        icon: "ic_hospitality",
        sublabel: "Bars, Restaurant, coffee, shops, lounges",
      },
      {
        path: "/sectors/transport",
        label: "Transport",
        icon: "ic_retail",
        sublabel: "Airports, Transport hubs, bus terminals, train stations",
      },
      {
        path: "/sectors/healthcare",
        label: "Healthcare",
        icon: "ic_healthcare",
        sublabel: "Hospitals, Clinic, gyms, wellness centers",
      },
      {
        path: "/sectors/events",
        label: "Events",
        icon: "ic_events",
        sublabel: "Concert Venues, festivals, exhibitions, sports arenas",
      },
      {
        path: "/sectors/retail",
        label: "Retail",
        icon: "ic_retail",
        sublabel: "Shopping malls, supermarkets, department stores, boutiques",
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
