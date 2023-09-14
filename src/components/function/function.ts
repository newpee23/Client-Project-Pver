import { BASEURL } from "../../api/config";
import { userLogin } from "../../types/authType";
export const checkLevelUser = (user: userLogin): void => {
  switch (user.level) {
    case "m":
        window.location.replace(BASEURL + "home");
      break;
    case "a":
        window.location.replace(BASEURL + "app");
      break;
    default:
        window.location.replace(BASEURL + "/");
      break;
  }
};
