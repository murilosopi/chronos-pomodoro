import { toast } from "react-toastify";

export const notify = {
  success(message: string) {
    toast.success(message);
  },
  warning(message: string) {
    toast.warning(message);
  },
  error(message: string) {
    toast.error(message);
  },
  info(message: string) {
    toast.info(message);
  },
};
