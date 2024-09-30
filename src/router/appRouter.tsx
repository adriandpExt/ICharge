import App from "@/App";
import ErrorScreen from "@/screens/error-screen/ErrorScreen";
import Faqs from "@/screens/faqs/Faqs";
import Home from "@/screens/home/Home";
import News from "@/screens/news/News";
import Partner from "@/screens/partner/partner";
import Termsandcondition from "@/screens/terms-and-conditions/terms";
import Sustainablity from "@/screens/sustainability/sustainability";
import UserAgreement from "@/screens/user-agreement/useragreement";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import Privacy from "@/screens/privacy/privacy";
import Cookies from "@/screens/cookies/cookies";
import { sectorRoutes } from "@/screens/sectors/routes";

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
      { path: "sustainability", element: <Sustainablity /> },
      { path: "news", element: <News /> },
      { path: "customer-service", element: <>Customer service</> },
      {
        path: "faqs",
        element: <Faqs />,
      },
      {
        path: "terms-and-conditions",
        element: <Termsandcondition />,
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
        element: <Cookies />,
      },
    ],
  },
];

const appRouter = createBrowserRouter(router);

export default appRouter;
