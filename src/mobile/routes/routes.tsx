import { RouteObject } from "react-router-dom";

import { routeConfig } from "@core/routes";
import AuthLayout from "@mobile/layouts/AuthLayout";
import MainLayout from "@mobile/layouts/MainLayout";
import { HomePage } from "@mobile/pages/HomePage";
import { LoginPage } from "@mobile/pages/LoginPage";

const routes: RouteObject[] = [
  {
    path: routeConfig.login,
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            path: routeConfig.home,
            element: <HomePage />,
          },
        ],
      },
    ],
  },
];

export default routes;
