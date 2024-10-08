import TokenStorage from "@core/types/auth/TokenStorage";

import { jsonParse, jsonStringify } from "./json";
import { observableLocalStorage } from "./storage";

export const TOKEN_STORAGE_KEY = "tokens";

export const getTokens = (): TokenStorage =>
  jsonParse(observableLocalStorage.getItem(TOKEN_STORAGE_KEY) || "{}");

export const setTokens = (token: TokenStorage) =>
  observableLocalStorage.setItem(TOKEN_STORAGE_KEY, jsonStringify(token));
