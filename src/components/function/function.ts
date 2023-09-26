import { BASEURL } from "../../api/config";
import { cleanState } from "../../store/slices/authSlices";
import { userLogin } from "../../types/authType";
import { clearLocalStorageSingIn } from "./localStorage";

export const checkLevelUser = (user: userLogin): void => {
  switch (user.level) {
    case "m":
        window.location.replace(BASEURL + "home");
      break;
    case "a":
        window.location.replace(BASEURL + "dashboard");
      break;
    default:
        window.location.replace(BASEURL);
      break;
  }
};

export const backToLogin = async (): Promise<void> => {
    clearLocalStorageSingIn();
    cleanState();
    window.location.replace(BASEURL);
}

// แปลงเวลา
export function formatDateTimeISOToCustom(isoDateTime: string): string {
  const date = new Date(isoDateTime);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}