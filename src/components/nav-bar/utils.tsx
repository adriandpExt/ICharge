import { LinkList } from "./type";

import { Handshake, Phone } from "lucide-react";

export const linkList: LinkList[] = [
  {
    label: "Partners With Us",
    path: "/partner",
    icon: Handshake,
  },
  {
    label: "Services",
    path: "/services",
    icon: Phone,
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
