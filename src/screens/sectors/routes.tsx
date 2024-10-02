import { RouteObject } from "react-router-dom";
import Sectors from "./Sectors";
import SectorPage from "./sector-pages/SectorPage";

export const sectorRoutes: RouteObject[] = [
  {
    path: "sectors",
    element: <Sectors />,
    children: [
      {
        path: "hospitality",
        element: <SectorPage title="HOSPITALITY" />,
      },
      {
        path: "transport",
        element: <SectorPage title="TRANSPORT" />,
      },
      {
        path: "healthcare",
        element: <SectorPage title="HEALTHCARE" />,
      },
      {
        path: "events",
        element: <SectorPage title="EVENTS" />,
      },
      {
        path: "retail",
        element: <SectorPage title="RETAIL" />,
      },
    ],
  },
];
