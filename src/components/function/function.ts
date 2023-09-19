import { BASEURL } from "../../api/config";
import { logOutPage } from "../../api/logoutApi";
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
    // await logOutPage();
    await clearLocalStorageSingIn();
    await cleanState();
    window.location.replace(BASEURL);
  

}

