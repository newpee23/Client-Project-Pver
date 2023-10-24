import axios, { AxiosResponse, CancelTokenSource } from "axios";
import { SERVER_APP_API } from "./config";
import { FormDataP0, FormDataP1InsertType, FormDataP1Type, findPage1F1Type, resultSubmitP0 } from "../types/pageType";
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

export const savePage0 = async (data: FormDataP0): Promise<resultSubmitP0> => {
  const user = getUserFromLocalStorage();
  const fId = getFIdFromLocalStorage();
  const token = getTokenFromLocalStorage();

  if (!user || !fId) {
    logOutPage();
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
  
    return response.data as resultSubmitP0;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return { message:`เกิดข้อผิดพลาด: ${error.message}`,status: false };
    } else {
      return { message:`เกิดข้อผิดพลาดไม่รู้จัก`,status: false };
    }
  }
};

export const findEditPage0Data = async (fId: string) => {

  const token = getTokenFromLocalStorage();

  if (!token) {
    logOutPage();
  }
  
  try {
    const response: AxiosResponse = await axios.get(
      SERVER_APP_API + `/findPage0/${fId}`,
      {
        headers: {
          "Content-Type": "application/json",
          "token-request": token,
        },
        cancelToken: cancelSource.token,
      }
    );
  
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return { message:`เกิดข้อผิดพลาด: ${error.message}`,status: false };
    } else {
      return { message:`เกิดข้อผิดพลาดไม่รู้จัก`,status: false };
    }
  }
};

export const updatePage0 = async (data: FormDataP0): Promise<resultSubmitP0> => {
  const user = getUserFromLocalStorage();
  const fId = getFIdFromLocalStorage();
  const token = getTokenFromLocalStorage();

  if (!user || !fId) {
    logOutPage();
  }

  const parsedData: userLogin = JSON.parse(user);
  const requestData: { data: FormDataP0; member_id: number, fId: string } = { "data": data, "member_id": parsedData.id, "fId": fId };
  
  try {
    const response: AxiosResponse = await axios.put(
      SERVER_APP_API + `/update/updatePage0`,
      requestData,
      {
        headers: {
          "Content-Type": "application/json",
          "token-request": token,
        },
        cancelToken: cancelSource.token,
      }
    );
  
    return response.data as resultSubmitP0;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return { message:`เกิดข้อผิดพลาด: ${error.message}`,status: false };
    } else {
      return { message:`เกิดข้อผิดพลาดไม่รู้จัก`,status: false };
    }
  }
};

export const findPage1F1async = async (fId: string):Promise<findPage1F1Type> => {

  const token = getTokenFromLocalStorage();

  if (!token) {
    logOutPage();
  }
  
  try {
    const response: AxiosResponse = await axios.get(
      SERVER_APP_API + `/findPage1F1/${fId}`,
      {
        headers: {
          "Content-Type": "application/json",
          "token-request": token,
        },
        cancelToken: cancelSource.token,
      }
    );
  
    return response.data as findPage1F1Type;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return { message:`เกิดข้อผิดพลาด: ${error.message}`,status: false };
    } else {
      return { message:`เกิดข้อผิดพลาดไม่รู้จัก`,status: false };
    }
  }
};

export const savePage1 = async (data: FormDataP1Type): Promise<resultSubmitP0> => {
  const user = getUserFromLocalStorage();
  const fId = getFIdFromLocalStorage();
  const token = getTokenFromLocalStorage();

  if (!user || !fId) {
    logOutPage();
  }

  const parsedData: userLogin = JSON.parse(user);
  const newData:FormDataP1InsertType = {
    p1F1:data.p1F1?.value ? data.p1F1?.value : null ,
    p1F2T:data.p1F2T?.value ? data.p1F2T?.value : null ,
    p1F2:data.p1F2 ,
    p1F3:data.p1F3 ,
    p1F4:data.p1F4 ,
    p1F5:data.p1F5?.value ? data.p1F5?.value : null ,
    p1F6:data.p1F6 ,
    p1F7:data.p1F7 ,
    p1F8:data.p1F8?.value ? data.p1F8?.value : null ,
    p1F9:data.p1F9?.value ? data.p1F9?.value : null ,
    p1F10:data.p1F10?.value ? data.p1F10?.value : null ,
    p1F11:data.p1F11?.value ? data.p1F11?.value : null ,
    p1F12:data.p1F12?.value ? data.p1F12?.value : null ,
    p1F13:data.p1F13?.value ? data.p1F13?.value : null ,
    p1F14:data.p1F14?.value ? data.p1F14?.value : null ,
    p1F15:data.p1F15?.value ? data.p1F15?.value : null ,
    p1F16:data.p1F16?.value ? data.p1F16?.value : null ,
    p1F17:data.p1F17?.value ? data.p1F17?.value : null ,
    p1F18:data.p1F18?.value ? data.p1F18?.value : null ,
    p1F19:data.p1F19?.value ? data.p1F19?.value : null ,
    p1F20:data.p1F20?.value ? data.p1F20?.value : null ,
    p1F21:data.p1F21?.value ? data.p1F21?.value : null ,
    p1F22:data.p1F22 ,
    p1F23:data.p1F23 ,
    p1F24:data.p1F24?.value ? data.p1F24?.value : null ,
    p1F25:data.p1F25?.value ? data.p1F25?.value : null ,
    p1F26:data.p1F26?.value ? data.p1F26?.value : null ,
    p1F27:data.p1F27 ,
    p1F28:data.p1F28
  };
  const requestData: { data: FormDataP1InsertType; member_id: number, fId: string } = { "data": newData, "member_id": parsedData.id, "fId": fId };
  
  try {
    const response: AxiosResponse = await axios.post(
      SERVER_APP_API + `/insert/savePage1`,
      requestData,
      {
        headers: {
          "Content-Type": "application/json",
          "token-request": token,
        },
        cancelToken: cancelSource.token,
      }
    );
  
    return response.data as resultSubmitP0;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return { message:`เกิดข้อผิดพลาด: ${error.message}`,status: false };
    } else {
      return { message:`เกิดข้อผิดพลาดไม่รู้จัก`,status: false };
    }
  }
};
