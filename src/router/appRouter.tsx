import { createBrowserRouter, RouteObject } from "react-router-dom";
import { lazy } from "react";

import App from "@/App";

import ErrorScreen from "@/screens/error-screen";

export const About = lazy(() => import("@/screens/about"));
export const Services = lazy(() => import("@/screens/services"));
export const Home = lazy(() => import("@/screens/home"));
export const HowToUse = lazy(() => import("@/screens/how-to-use"));
export const Faqs = lazy(() => import("@/screens/faqs"));
export const BusinessCard = lazy(() => import("@/screens/business-card"));
export const SocialMedia = lazy(() => import("@/screens/social-media"));
export const QRCode = lazy(() => import("@/screens/qr-code"));
export const TermsAndConditions = lazy(
  () => import("@/screens/terms-and-conditions"),
);
export const Partners = lazy(() => import("@/screens/partner-with-us"));

export const IScreen = lazy(() => import("@/screens/iscreen"));

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
      { path: "how-to", element: <HowToUse /> },
      { path: "icharge-solution", element: <Services /> },
      { path: "iscreen", element: <IScreen /> },
      { path: "about", element: <About /> },
      { path: "contact-us", element: <>Contact us</> },
      {
        path: "faqs",
        element: <Faqs />,
      },
      {
        path: "business-card/:id",
        element: <BusinessCard />,
      },
      {
        path: "social-media/",
        element: <SocialMedia />,
      },
      {
        path: "qr-code/:id",
        element: <QRCode />,
      },
      {
        path: "terms-and-conditions",
        element: <TermsAndConditions />,
      },
    ],
  },
];

const appRouter = createBrowserRouter(router);

export default appRouter;
