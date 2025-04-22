import { formatSecondsToTime } from "./formatSecondsToTime";

export const formatMilisecondsToTime = (miliseconds: number) => {
  return formatSecondsToTime(Math.floor(miliseconds / 1000));
};
