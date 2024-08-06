export const OP_TYPE = {
  SET: "SET",
  CLEAR: "CLEAR",
  REMOVE: "REMOVE",
};

export const observableLocalStorage = {
  getItem: (key: string) => {
    return localStorage.getItem(key);
  },

  setItem: (key: string, value: string) => {
    localStorage.setItem(key, value);
    window.dispatchEvent(
      new CustomEvent("localStorageChange", {
        detail: {
          op: OP_TYPE.SET,
          key,
        },
      }),
    );
  },
  clear: () => {
    localStorage.clear();
    window.dispatchEvent(
      new CustomEvent("localStorageChange", {
        detail: {
          op: OP_TYPE.CLEAR,
        },
      }),
    );
  },
  removeItem: (key: string) => {
    localStorage.removeItem(key);
    window.dispatchEvent(
      new CustomEvent("localStorageChange", {
        detail: {
          op: OP_TYPE.REMOVE,
          key,
        },
      }),
    );
  },
};

export const observableSessionStorage = {
  getItem: (key: string) => {
    return sessionStorage.getItem(key);
  },
  setItem: (key: string, value: string) => {
    sessionStorage.setItem(key, value);
    window.dispatchEvent(new CustomEvent("sessionStorageChange"));
  },
  clear: () => {
    sessionStorage.clear();
    window.dispatchEvent(new CustomEvent("sessionStorageChange"));
  },
  removeItem: (key: string) => {
    sessionStorage.removeItem(key);
    window.dispatchEvent(new CustomEvent("sessionStorageChange"));
  },
};
