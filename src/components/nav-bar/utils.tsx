import { LinkList } from "./type";

import { Handshake, Phone } from "lucide-react";

export const linkList: LinkList[] = [
  {
    label: "Services",
    path: "/services",
    icon: Phone,
  },
  {
    label: "Partners",
    path: "/partner",
    icon: Handshake,
  },

  { label: "About", path: "/about" },
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
