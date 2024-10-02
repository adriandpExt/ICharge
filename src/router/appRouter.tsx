import { createBrowserRouter, RouteObject } from "react-router-dom";

import App from "@/App";

import ErrorScreen from "@/screens/error-screen";

import { sectorRoutes } from "@/screens/sectors/routes";

import Home from "@/screens/home";
import Sustainabilities from "@/screens/sustainability";
import News from "@/screens/news/News";
import Faqs from "@/screens/faqs";
import TermsAndConditions from "@/screens/terms-and-conditions";
import Partners from "@/screens/partner/Partners";
import UserAgreements from "@/screens/user-agreement/UserAgreements";
import Privacies from "@/screens/privacy/Privacies";
import Cookie from "@/screens/cookies/Cookie";

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
      { path: "partner", element: <Partners /> },
      { path: "sustainability", element: <Sustainabilities /> },
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
        element: <UserAgreements />,
      },
      {
        path: "privacy",
        element: <Privacies />,
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
