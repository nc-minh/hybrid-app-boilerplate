import { createBrowserRouter } from "react-router-dom";

import MobileLayout from "@mobile/layouts/MobileLayout";

import routes from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MobileLayout />,
    children: routes,
  },
]);

export default router;
