import { useCallback } from "react";

import { LocalNotifications } from "@capacitor/local-notifications";

export const LoginPage = () => {
  const helloNoti = useCallback(async () => {
    await LocalNotifications.schedule({
      notifications: [
        {
          title: "Hello",
          body: "Hello, this is a notification!",
          id: 1,
          schedule: { at: new Date(Date.now() + 1000 * 1) },
          sound: "mixkitbell.wav",
        },
      ],
    });
  }, []);

  const notiWithAction = useCallback(async () => {
    await LocalNotifications.schedule({
      notifications: [
        {
          title: "WITH ACTION",
          body: "This notification has actions!",
          id: 2,
          sound: "mixkitbell.wav",
          actionTypeId: "OPEN_NOTIFICATION",
          extra: {
            someData: "This is some extra data",
          },
        },
      ],
    });
  }, []);

  return (
    <div>
      <h1>LoginPage - mobile</h1>

      <button onClick={helloNoti}>TEST noti</button>
      <button onClick={notiWithAction}>TEST noti with actioin</button>
    </div>
  );
};
