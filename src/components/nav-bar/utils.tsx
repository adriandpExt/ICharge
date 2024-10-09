import { LinkList } from "./type";

import { Building2, Handshake, Phone } from "lucide-react";

export const linkList: LinkList[] = [
  {
    label: "Sectors",
    path: "/sectors",
    icon: Building2,
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
    icon: Handshake,
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
