import { LocalNotifications } from "@capacitor/local-notifications";

export const registerActionTypes = () => {
  LocalNotifications.registerActionTypes({
    types: [
      {
        id: "OPEN_NOTIFICATION",
        actions: [
          {
            id: "OPEN_APP",
            title: "Open App",
          },
          {
            id: "SEE_MORE",
            title: "See More",
            destructive: true,
          },
          {
            id: "COMMENT",
            title: "Comment",
            input: true,
            inputPlaceholder: "Your comment",
            inputButtonTitle: "Comment",
          },
        ],
      },
    ],
  });
};
