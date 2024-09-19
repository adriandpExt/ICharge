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
  { label: "Sustainability", path: "sustainability" },
  {
    label: "News",
    path: "/news",
  },
  { label: "Customer Service", path: "/customer-service" },
];
