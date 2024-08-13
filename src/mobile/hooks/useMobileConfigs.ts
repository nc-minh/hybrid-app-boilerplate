import useLocalNotificationListener from "./useLocalNotificationListener";
import useNotificationListener from "./useNotificationListener";

export default function useMobileConfigs() {
  useNotificationListener();
  useLocalNotificationListener();
}
