import { useEffect } from "react";

import { LocalNotifications } from "@capacitor/local-notifications";

export default function useLocalNotificationListener() {
  useEffect(() => {
    LocalNotifications.addListener(
      "localNotificationActionPerformed",
      notification => {
        console.log(
          "Notification action performed:",
          JSON.stringify(notification),
        );

        if (notification.actionId === "OPEN_NOTIFICATION") {
          console.log("Notification action performed:", notification);
          // Handle the notification action here
        }
      },
    );
  }, []);
}
