import { createBrowserRouter, RouteObject } from "react-router-dom";

import App from "@/App";

import ErrorScreen from "@/screens/error-screen";

import { sectorRoutes } from "@/screens/sectors/routes";

import Home from "@/screens/home";
import Partner from "@/screens/partner";
import Sustainability from "@/screens/sustainability";
import News from "@/screens/news/News";
import Faqs from "@/screens/faqs";
import TermsAndConditions from "@/screens/terms-and-conditions";
import UserAgreement from "@/screens/user-agreement";
import Privacy from "@/screens/privacy";
import { Cookie } from "@/screens/cookies";

const router: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorScreen />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      ...sectorRoutes,
      { path: "partner", element: <Partner /> },
      { path: "sustainability", element: <Sustainability /> },
      { path: "news", element: <News /> },
      { path: "customer-service", element: <>Customer service</> },
      {
        path: "faqs",
        element: <Faqs />,
      },
      {
        path: "terms-and-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "user-agreement",
        element: <UserAgreement />,
      },
      {
        path: "privacy",
        element: <Privacy />,
      },
      {
        path: "cookies",
        element: <Cookie />,
      },
    ],
  },
];

const appRouter = createBrowserRouter(router);

export default appRouter;
