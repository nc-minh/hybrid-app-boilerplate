import { createBrowserRouter } from "react-router-dom";

import WebLayout from "@web/layouts/WebLayout";

import routes from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WebLayout />,
    children: routes,
  },
]);

export default router;
