export const PROMPT = "prompt";
export const GRANTED = "granted";
export const DENIED = "denied";

// Local notifications are notifications that can still be sent to the device and this is the right to display or not, different from push notifications
export enum NOTIFICATIONS_PERMISSION_STATE {
  PROMPT = "prompt",
  GRANTED = "granted",
  DENIED = "denied",
  PROMPT_WITH_RATIONALE = "prompt-with-rationale",
}
