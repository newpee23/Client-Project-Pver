import axios, { AxiosResponse, CancelTokenSource } from "axios";
import { SERVER_APP_API } from "./config";
import { FormDataP0 } from "../types/pageType";
import { userLogin } from "../types/authType";
import { logOutPage } from "./logoutApi";

// สร้างตัวแปรเพื่อใช้ในการยกเลิก
const cancelSource: CancelTokenSource = axios.CancelToken.source();

const getTokenFromLocalStorage = () => {
  return localStorage?.getItem("tokenAuth") || '';
}

const getUserFromLocalStorage = () => {
  return localStorage?.getItem('userLogin') || '';
}

const getFIdFromLocalStorage = () => {
  return localStorage?.getItem('questionId') || '';
}


export const savePage0 = async (data: FormDataP0): Promise<string> => {
  const user = getUserFromLocalStorage();
  const fId = getFIdFromLocalStorage();
  const token = getTokenFromLocalStorage();

  if (!user || !fId) {
    logOutPage();
    return "";
  }

  const parsedData: userLogin = JSON.parse(user);

  const requestData: { data: FormDataP0; member_id: number, fId: string } = { "data": data, "member_id": parsedData.id, "fId": fId };

  try {
    const response: AxiosResponse = await axios.post(
      SERVER_APP_API + `/insert/savePage0`,
      requestData,
      {
        headers: {
          "Content-Type": "application/json",
          "token-request": token,
        },
        cancelToken: cancelSource.token,
      }
    );

    return response.data.message;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return `เกิดข้อผิดพลาด: ${error.message}`;
    } else {
      return "เกิดข้อผิดพลาดไม่รู้จัก";
    }
  }
};

