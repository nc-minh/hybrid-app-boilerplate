import {
  AndroidSettings,
  IOSSettings,
  NativeSettings,
} from "capacitor-native-settings";

import { LocalNotifications } from "@capacitor/local-notifications";
import { PushNotifications } from "@capacitor/push-notifications";
import { NOTIFICATIONS_PERMISSION_STATE } from "@mobile/constants/notification";

const openSettingAskNotiPermission = async () => {
  const pushNotiPerm = await PushNotifications.checkPermissions();
  const localNotiPerm = await LocalNotifications.checkPermissions();

  if (pushNotiPerm.receive === NOTIFICATIONS_PERMISSION_STATE.PROMPT) {
    const result = await PushNotifications.requestPermissions();

    return result.receive === NOTIFICATIONS_PERMISSION_STATE.GRANTED;
  }

  if (pushNotiPerm.receive === NOTIFICATIONS_PERMISSION_STATE.DENIED) {
    NativeSettings.open({
      optionAndroid: AndroidSettings.ApplicationDetails,
      optionIOS: IOSSettings.App,
    });

    return false;
  }

  if (localNotiPerm.display === NOTIFICATIONS_PERMISSION_STATE.DENIED) {
    NativeSettings.open({
      optionAndroid: AndroidSettings.ApplicationDetails,
      optionIOS: IOSSettings.App,
    });

    return false;
  }

  return true;
};

export default openSettingAskNotiPermission;
