import { LinkList } from "./type";

import { Handshake, Phone, Building2 } from "lucide-react";

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
  { label: "About", path: "/about", icon: Building2 },
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
  {
    id: "cht",
    icons: "ic_cht_flag",
    label: "Ch(Traditional)",
  },
  {
    id: "chs",
    icons: "ic_cht_flag",
    label: "Ch(Simplified)",
  },
];
