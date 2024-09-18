import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "virtual:svg-icons-register";
import "./index.css";
import appRouter from "./lib/appRouter.tsx";
import { ThemeProvider } from "./components/theme-provider/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  </StrictMode>,
);
