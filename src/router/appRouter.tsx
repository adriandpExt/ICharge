import App from "@/App";
import ErrorScreen from "@/screens/error-screen/ErrorScreen";
import Faqs from "@/screens/faqs/Faqs";
import Home from "@/screens/home/Home";
import News from "@/screens/news/News";
import Sectors from "@/screens/sectors";
import { createBrowserRouter, RouteObject } from "react-router-dom";

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
      {
        path: "sectors",
        element: <Sectors />,
      },
      { path: "partner", element: <>Partber</> },
      { path: "sustainability", element: <>Sustainability</> },
      { path: "news", element: <News /> },
      { path: "customer-service", element: <>Customer Service</> },
      {
        path: "faqs",
        element: <Faqs />,
      },
    ],
  },
];

const appRouter = createBrowserRouter(router);

export default appRouter;
