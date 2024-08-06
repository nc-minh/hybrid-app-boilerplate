// Use for authenticating user
import { TOKEN_STORAGE_KEY } from "@core/localStorage/token";
import TokenStorage from "@core/types/auth/TokenStorage";

import useLocalStorageChange from "./useLocalStorageChange";

// Redirect to zalo oauth
export default function useAuthentication() {
  const tokens = useLocalStorageChange<TokenStorage>(TOKEN_STORAGE_KEY);

  // User is considered logined if exists access token
  if (tokens?.accessToken) {
    return true;
  }

  return false;
}
