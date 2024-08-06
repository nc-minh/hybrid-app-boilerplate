import { RouteObject } from "react-router-dom";

import { routeConfig } from "@core/routes";
import { HomePage } from "@web/pages/HomePage";
import { LoginPage } from "@web/pages/LoginPage";

const routes: RouteObject[] = [
  {
    path: routeConfig.login,
    element: <LoginPage />,
  },
  {
    path: routeConfig.home,
    element: <HomePage />,
  },
];

export default routes;
