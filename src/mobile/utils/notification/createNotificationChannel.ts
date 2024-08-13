import { PushNotifications } from "@capacitor/push-notifications";

const SOUND_CHANNELS = [
  {
    name: "Thông báo mới",
    sound: "mixkit-bell-notification.wav",
  },
];

const createSoundNotiChannel = async () => {
  SOUND_CHANNELS.forEach(config =>
    PushNotifications.createChannel({
      ...config,
      id: config.sound, // "id" must be the same as "sound"
      importance: 5,
    }),
  );
};

export { createSoundNotiChannel };
