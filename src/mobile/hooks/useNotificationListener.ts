import { useEffect } from "react";

import { PushNotifications } from "@capacitor/push-notifications";

export default function useNotificationListener() {
  useEffect(() => {
    (async () => {
      await PushNotifications.addListener("registration", token => {
        console.log("Push registration success, token: " + token.value);
      });

      await PushNotifications.addListener("registrationError", err => {
        console.log("Error on registration: ", err);
      });

      await PushNotifications.addListener(
        "pushNotificationReceived",
        notification => {
          console.log("Push received: ", notification);
        },
      );

      await PushNotifications.addListener(
        "pushNotificationActionPerformed",
        async action => {
          console.log("Push action performed: ", action);
        },
      );

      const permission = await PushNotifications.checkPermissions();

      if (permission.receive === "granted") {
        await PushNotifications.register();
      }
    })();
  }, []);
}
