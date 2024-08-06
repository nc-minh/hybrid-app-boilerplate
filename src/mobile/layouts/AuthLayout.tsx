import { Navigate, Outlet } from "react-router-dom";

import useAuthentication from "@core/hooks/useAuthentication";
import { routeConfig } from "@core/routes";

export default function AuthLayout() {
  const isAuth = useAuthentication();

  if (!isAuth) return <Navigate to={routeConfig.login} />;

  return <Outlet />;
}
