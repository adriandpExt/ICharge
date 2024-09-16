import App from "@/App";
import ErrorScreen from "@/screens/error-screen/ErrorScreen";
import Faqs from "@/screens/faqs/Faqs";
import Home from "@/screens/home/Home";
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
        path: "faqs",
        element: <Faqs />,
      },
    ],
  },
];

const appRouter = createBrowserRouter(router)

export default appRouter;
