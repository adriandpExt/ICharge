import { RouteObject } from "react-router-dom";
import { Building2, Handshake, Leaf, Newspaper, Phone } from "lucide-react";

interface SubChild extends Omit<RouteObject, "children"> {
  label: string;
  sublabel: string;
  icon?: React.ElementType;
}

interface LinkList extends Omit<RouteObject, "children"> {
  label: string;
  icon?: React.ElementType;
  subChild?: SubChild[];
}

export const linkList: LinkList[] = [
  {
    label: "Sectors",
    path: "/sectors",
    icon: Building2,
    subChild: [
      {
        path: "/sectors/hospitality",
        label: "Hospitality",
        sublabel: "Bars, Restaurant, coffee, shops, lounges",
      },
      {
        path: "/sectors/transport",
        label: "Transport",
        sublabel: "Airports, Transport hubs, bus terminals, train stations",
      },
      {
        path: "/sectors/healthcare",
        label: "Healthcare",
        sublabel: "Hospitals, Clinic, gyms, wellness centers",
      },
      {
        path: "/sectors/events",
        label: "Events",
        sublabel: "Concert Venues, festivals, exhibitions, sports arenas",
      },
      {
        path: "/sectors/retail",
        label: "Retail",
        sublabel: "Shopping malls, supermarkets, department stores, boutiques",
      },
    ],
  },
  {
    label: "Partner with Us",
    path: "/partner",
    icon: Handshake,
  },
  { label: "Sustainability", icon: Leaf, path: "/sustainability" },
  {
    label: "News",
    path: "/news",
    icon: Newspaper,
  },
  { label: "Customer Service", path: "/faqs", icon: Phone },
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
