import { RouteObject } from "react-router-dom";
import Sectors from "./Sectors";
import Hospitality from "./hospitality/Hospitality";

export const sectorRoutes: RouteObject[] = [
  {
    path: "sectors",
    element: <Sectors />,
    children: [
      {
        index: true,
        element: <Hospitality />,
      },
      {
        path: "hospitality",
        element: <Hospitality />,
      },
      {
        path: "transport",
        element: <>Transport</>,
      },
      {
        path: "healthcare",
        element: <>Health Care</>,
      },
      {
        path: "events",
        element: <>Events</>,
      },
      {
        path: "retail",
        element: <>Retail</>,
      },
    ],
  },
];
